<template>
  <div id="app">
    <transition name="router-fade"> 
      <router-view/>
    </transition>
    <foot-guide v-if="$route.meta.isFootGuide"/>
  </div>
</template>

<script>
import footGuide from './components/footer/footer'
export default {
  name: 'App',
  components: {
    footGuide
  },
  data() {
    return {
      isFootGuide: false
    }
  },
  created() {
    console.log(this.$route)
    // if (this.$route.meta.isFootGuide) {
    //   this.isFootGuide = this.$route.meta.isFootGuide
    // } else {
    //   this.isFootGuide = false
    // }
  },
  mounted() {
    
  }
}
</script>

<style>
#app{
  height: auto;
  min-height: 100%;
  background-color: #f5f5f5;
  /* overflow: hidden; */
}
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
