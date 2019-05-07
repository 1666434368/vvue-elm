<template>
  <div class="foodentry">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-slide item" v-for="(item1, index1) in foodentry.data.length" :key="index1">
        <a href="javascript:" v-for="item in foodentry.data[index1]" :key="item.id">
          <div class="container">
            <img :src="item.image_hash" :alt="item.name">
          </div>
          <span class="title">{{item.name}}</span>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      entries: [
        {
          id: 20133249,
          name: '美食',
          image_hash: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133233,
          name: '晚餐',
          image_hash: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133169,
          name: '商超便利',
          image_hash: 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133017,
          name: '水果',
          image_hash: 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133185,
          name: '医药健康',
          image_hash: 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133193,
          name: '浪漫鲜花',
          image_hash: 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133041,
          name: '跑腿代购',
          image_hash: 'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133065,
          name: '汉堡披萨',
          image_hash: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20159899,
          name: '厨房生鲜',
          image_hash: 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133081,
          name: '炸鸡炸串',
          image_hash: 'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133161,
          name: '地方菜系',
          image_hash: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133145,
          name: '麻辣烫',
          image_hash: 'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133033,
          name: '速食简餐',
          image_hash: 'https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133209,
          name: '地方小吃',
          image_hash: 'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133105,
          name: '大牌惠吃',
          image_hash: 'https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133137,
          name: '米粉面馆',
          image_hash: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133089,
          name: '包子粥店',
          image_hash: 'https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          id: 20133121,
          name: '速食简餐',
          image_hash: 'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        }
      ],
      swiperOption: {
        // 滑动方向水平
        direction: 'horizontal',
        // 开启循环
        loop: true,
        // 设置slider容器能够同时显示的slides数量
        slidesPerView: 1,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          // bulletClass: 'indicator',
          // bulletActiveClass: 'is-active'
        }
      }
    }
  },
  created () {

  },
  mounted () {
    // var mySwiper = new Swiper('.swiper-container', {});
    // mySwiper.pagination.$el.addClass('indicator');
  },
  methods: {

  },
  computed: {
    foodentry () {
      let json = {}
      json.len = Math.ceil(this.entries.length / 10)
      json.data = []
      const len = this.entries.length
      for (let i = 0, j = 0; i < json.len; i++) {
        if (len >= j + 10) {
          json.data.push(this.entries.slice(j, j + 10))
        } else {
          json.data.push(this.entries.slice(j))
        }
        j = j + 10
      }
      return json
    }
  }
}
</script>

<style lang="less" scoped>
.foodentry{
  overflow: hidden;
  height: 4.72rem;
  background-color: #fff;
  text-align: center;
  position: relative;
  font-size: 0;
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .item{
      width: 100%;
      height: 100%;
      a{
        position: relative;
        float: left;
        margin-top: .293333rem;
        width: 20%;
        text-decoration: none;
        .container{
          position: relative;
          display: inline-block;
          width: 1.2rem;
          height: 1.2rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .title{
          display: block;
          margin-top: .133333rem;
          color: #666;
          font-size: .32rem;
        }
      }
    }
    .swiper-pagination{
      height: .04rem;
      .indicator{
        display: inline-block;
        width: .24rem;
        height: .04rem;
        margin: 0 .066667rem;
        border-radius: 0;
        background: #000;
        opacity: .2;
      }
      .is-active{
        background-color: #00a6ff;
      }
    }
  }
  // .indicators{
  //   position: absolute;
  //   bottom: 10px;
  //   left: 50%;
  //   transform: translateX(-50%);
    // .indicator{
    //   display: inline-block;
    //   width: .24rem;
    //   height: .04rem;
    //   margin: 0 .066667rem;
    //   border-radius: 0;
    //   background: #000;
    //   opacity: .2;
    // }
    // .is-active{
    //   background-color: #00a6ff;
    // }
  // }
}
</style>
