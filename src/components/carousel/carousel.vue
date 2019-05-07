<template>
  <div class="box">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-slide item" v-for="(item1, index1) in data.length" :key="index1">
        <slot></slot>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="less" scoped>

</style>
