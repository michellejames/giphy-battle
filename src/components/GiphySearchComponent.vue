<template>
  <div>
    <h1>Test{{msg}}</h1>
    <router-link to="/">Got it.</router-link>
  </div>
</template>

<script>
export default {
  name: 'GiphySearch',
  data () {
    return {
      msg: 'Giphy Search'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
