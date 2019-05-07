<template>
  <div>
    <headTop/>
    <div class="search">
      <div class="content">
        <span>搜索饿了么商家、商品名称</span>
      </div>
    </div>
    <foodEntry/>
    <div class="banner">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-slide item" v-for="(item1, index1) in banner.length" :key="index1">
          <a href="javascript:" v-for="item in banner[index1]" :key="item.id">
            <div class="container">
              <img :src="item.image_hash" :alt="item.name">
            </div>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="text">资质证照</div>
    </div>
    <shoplist/>
    <!-- <foot-guide/> -->
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import foodEntry from '../../components/foodentry/foodentry'
import shoplist from '../../components/shoplist/shoplist'
// import footGuide from '../../components/footer/footer'
export default {
  components: {
    headTop,
    foodEntry,
    shoplist,
    // footGuide
  },
  data () {
    return {
      banner: [
        [
          {
            id: 20133249,
            name: '20133249',
            image_hash: 'https://fuss10.elemecdn.com/1/9c/d8da44b63fa1208476992df88edc9jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
          }
        ],
        [
          {
            id: 20133259,
            name: '20133259',
            image_hash: 'https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
          }
        ]
      ],
      swiperOption: {
        // 滑动方向水平
        direction: 'horizontal',
        // // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // 开启loop模式
        loop : true,
        // 自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  margin-top: .133333rem;
  border-radius: 1.066667vw;
  width: 100%;
  height: 2.346667rem;
  padding: 0 .266667rem;
  position: relative;
  .swiper-box{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .container{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination{
      height: .133333rem;
      font-size: 0;
    }
  }
  .text{
    position: absolute;
    z-index: 9;
    bottom: .053333rem;
    right: .533333rem;
    width: 1.466667rem;
    line-height: .506667rem;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    font-size: .266667rem;
    border-radius: .266667rem;
    color: #eee;
  }
}
.search{
  position: sticky;
  z-index: 999;
  top: 0;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding: .2rem .373333rem;
  margin: -.133333rem 0;
  .content{
    display: flex;
    width: 100%;
    height: .96rem;
    justify-content: center;
    align-items: center;
    border-radius: .026667rem;
    background: #fff;
    color: #999;
    font-size: .373333rem;
  }
}
</style>
