<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {

    created () {
      // 异步获取address
      this.$store.dispatch('getAddress')
      // 异步获取登陆用户信息
      this.$store.dispatch('getUserInfo')
      this.$store.dispatch('getShopInfo')
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
