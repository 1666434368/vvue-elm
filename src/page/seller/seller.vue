<template>
  <div class="seller">
    <section class="section">
      <img class="brand-img" :src="imgUrl460(brand.header_image)">
      <h3 class="brand-text1">{{brand.title}}</h3>
      <p class="brand-text2">{{brand.brand_intros[0].brief}}</p>
      <div class="brand-text3">查看品牌故事</div>
    </section>
    <section class="section">
      <h3 class="section-title">配送信息</h3>
      <div class="delivery">
        <div>
          <span class="delivery-title">{{seller.delivery_mode.text}}</span>
          <span>约{{seller.order_lead_time}}分钟送达，距离{{seller.distance > 1000 ? (seller.distance / 1000).toFixed(1) : seller.distance}}km</span>
        </div>
        <div>配送费￥{{seller.float_delivery_fee}}</div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-title">商家服务</h3>
      <div class="activity">
        <div class="activity-content" v-for="(item, index) in seller.supports" :key="index">
          <span class="mini-tag" style="border-style: solid;border-width: 1px;" :style="{borderColor: '#' + item.icon_color}">{{item.icon_name}}</span>
          <span class="activity-text">{{item.description}}</span>
        </div>
      </div>
    </section>
    <section class="section album" v-if="seller.albums">
      <h3 class="section-title">商家实景</h3>
      <div class="album-content">
        <a href="javascript:" v-for="(item2, index2) in seller.albums" :key="index2">
          <img :src="imgUrl200(item2.cover_image_hash)">
          <span class="album-text">{{item2.name}}({{item2.count}}张)</span>
        </a>
        <!-- <a href="javascript:">
          <img src="//fuss10.elemecdn.com/e/0a/016d439547ce41a34fdf5d29faa91jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/">
          <span class="album-text">后厨(1张)</span>
        </a> -->
      </div>
    </section>
    <section class="section">
      <h3 class="section-title">商家信息</h3>
      <ul class="detail-content">
        <li>{{seller.description}}</li>
        <li>
          <span>品类</span>
          <span v-for="(item1, index1) in seller.flavors" :key="index1">{{item1.name}}{{index1 === (seller.flavors.length - 1) ? '' : ','}}</span>
        </li>
        <li>
          <span>商家电话</span>
          <span>
            <span style="font-weight: 400;color: #666;">{{seller.phone}}</span>
            <span class="detail"></span>
          </span>
        </li>
        <li>
          <span>地址</span>
          <span>{{seller.address}}</span>
        </li>
        <li>
          <span>营业时间</span>
          <span>{{seller.opening_hours[0].split('/').join('-')}}</span>
        </li>
      </ul>
    </section>
    <section class="section">
      <a href="https://h5.ele.me/shop/certification/#/?restaurant_id=E16126239747654481306" class="section-title detail-text" @click.prevent="handleDetail">营业资质<span class="detail"></span></a>
    </section>
  </div>
</template>

<script>
import { imgUrl460, imgUrl200 } from '@/utils/imgurl.js'
export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // 此处都是发送求情得来的数据
      brand: {
        brand_intros: [
          {
            brief: "2003年，老乡鸡第1家快餐店肥西老母鸡在合肥开业；2012年，品牌升级为老乡鸡；2016年老乡鸡入驻南京、武汉；品牌创办至今，老乡鸡在全国已经有600多家直营店，并持续高速发展中。",
            image_hash: "3b4d6ee5a574923d8c2c08b876560eebjpeg"
          },
          {
            brief: "老乡鸡是以180天土鸡与农夫山泉炖制的肥西老母鸡汤为特色；食材甄选一线品牌供应商深度合作，品质放心。老乡鸡始终坚持直营，并严格控制烹饪流程，确保每道菜品都处于最佳保鲜期。餐厅设计透明化厨房，将烹饪全程呈现在顾客面前。坚持健康营养的中式烹饪方式出品，深受消费者的认可和欢迎。作为日常就餐更好的选择，老乡鸡已经服务消费者4.5亿人次，顾客排队成为餐厅日常。",
            image_hash: "8933e6d0ce6c6d2bb5ddac996e77207cjpeg"
          },
          {
            brief: "老乡鸡已于2018年成功收购武汉永和，拉开了中国餐饮业区域品牌并购的序幕！餐饮业进入强者恒强时代。对于未来，我们预测：未来5年，老乡鸡在南京和武汉可以各开到500家餐厅，安徽则会超过600家餐厅！ 我们致力于做世界骄傲的中国品牌 赶超洋快餐，实现中国梦！感谢你见证我一点一滴的成长。",
            image_hash: "c4d79a5dd16aa51a9f4c65f5102fc10ajpeg"
          }
        ],
        header_image: "7651ad81e1bb8ea7e2313fd83c407023png",
        target_url: "eleme://web?url=https%3A//h5.ele.me/brandstory/%3Frestaurant_id%3DE17818434310094381435",
        title: "老乡鸡——全国600多家直营店"
      }
    }
  },
  methods: {
    imgUrl460, imgUrl200,
    handleDetail() {
      alert('你点击的是“营业资质”！')
    }
  }
}
</script>

<style lang="less" scoped>
.seller{
  background-color: #f5f5f5;
  font-size: .346667rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  p{
    margin: 0;
    color: #666;
  }
  .section{
    margin-bottom: .266667rem;
    padding: .426667rem .4rem .4rem;
    font-size: .346667rem;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    .brand-img{
      width: 9.2rem;
      height: 5.2rem;
      margin-bottom: .426667rem;
    }
    .brand-text1{
      color: #333;
      font-weight: 700;
      font-size: .4rem;
      margin-bottom: .106667rem;
    }
    .brand-text2{
      font-size: .346667rem;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      height: .96rem;
    }
    .brand-text3{
      margin: .4rem 0 -.4rem;
      text-align: center;
      font-size: .346667rem;
      padding: .4rem 0;
    }
    .section-title{
      color: #000;
      font-weight: 700;
      font-size: .4rem;
      line-height: .56rem;
    }
    .delivery{
      margin-top: .426667rem;
      div{
        margin-bottom: .186667rem;
        .delivery-title{
          width: 1.386667rem;
          font-size: .293333rem;
          margin-right: .266667rem;
          display: inline-block;
          text-align: center;
          color: #fff;
          background-color: #0097ff;
          padding: .08rem 0;
          border-radius: .08rem;
        }
      }
    }
    .activity{
      margin-top: .426667rem;
      .activity-content{
        display: flex;
        font-size: .346667rem;
        align-items: center;
        margin-bottom: .306667rem;
        .mini-tag{
          margin-right: .16rem;
          box-sizing: border-box;
          border-radius: .026667rem;
          height: .426667rem;
          padding: .053333rem .16rem;
          font-size: .32rem!important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .activity-text{
          flex: 1;
          font-size: .346667rem;
          line-height: 1.38;
        }
      }
    }
    .album-content{
      margin-top: .213333rem;
      a{
        position: relative;
        float: left;
        margin-right: .186667rem;
        width: 2.08rem;
        height: 2.08rem;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
        .album-text{
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          height: .48rem;
          line-height: .48rem;
          color: #eee;
          background-color: rgba(0,0,0,.6);
        }
      }
    }
    .detail-content{
      font-size: 0;
      li:not(:first-child) {
        border-top: 1px solid #ddd;
      }
      li:last-child {
        padding-bottom: 0;
      }
      li{
        display: flex;
        padding: .4rem .4rem .4rem 0;
        justify-content: space-between;
        align-items: center;
        margin-right: -.4rem;
        font-size: .346667rem;
        span{
          font-size: 0.346667rem;
        }
        span:first-child {
          font-weight: 700;
          color: #333;
        }
        span:last-child {
          max-width: 6.666667rem;
          text-align: right;
        }
      }
    }
    .detail{
      display: inline-block;
      width: .24rem;
      height: .24rem;
      border-bottom: .026667rem solid #ccc;
      border-right: .026667rem solid #ccc;
      transform: rotate(-45deg);
    }
    .detail-text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      outline: none;
      -webkit-touch-callout: none;
    }
  }
  .album{
    overflow: hidden;
  }
}
</style>
