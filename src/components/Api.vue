<template>
  <div id="api-page">
    <h1>Api Page</h1>
    <label>郵便番号</label>
    <input type="text" name="zipcode" value="" v-model="zipcode" v-on:change="getAddress">
    <p>{{address}}</p>
  </div>
</template>

<script>
import HttpMixin from "../mixins/HttpMixin"

export default {
  name: 'Api',
  mixins: [HttpMixin],
  data() {
    return {
      api_url: 'https://api.zipaddress.net/',
      zipcode: '',
      address: '',
      errro: [],
      errored: false
    }
  },
  methods: {
    getAddress() {
      this.axios
        .get(this.api_url + '?zipcode=' + this.zipcode)
        .then(response => {
          this.address = response.data.data.fullAddress
        })
        .catch(error => {
          this.error = error
          this.errored = true
          this.address = '見つかりませんでした'
        })
        .finally(() => this.loading = false)
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    display: block;
    padding-bottom: 10px;
  }
</style>
