<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './components/index'
export default {
  name: 'app',
  components: {
    index: index
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  body {
    margin: 0
  }
</style>
