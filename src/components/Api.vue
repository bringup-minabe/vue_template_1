<template>
  <div id="api-page">
    Api Page
    <div
      v-for="currency in info"
      :key="currency.code"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Api',
  data() {
    return {
      info: [],
      errro: [],
      errored: false
    }
  },
  mounted () {
    this.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        this.error = error
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
