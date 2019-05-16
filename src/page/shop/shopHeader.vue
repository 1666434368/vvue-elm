<template>
  <div class="header">
    <div class="nav">
      <div class="nav-img" :style="{ backgroundImage: 'url(\'' + imgUrl750(topData.shop_sign.image_hash) + '\')' }">
        <a href="javascript:;" class="return" @click.stop="handleReturn"></a>
      </div>
      <div class="nav-text">
        <div class="logo">
          <span class="bg">品牌<span class="text">品牌</span></span>
          <img class="img" :src="imgUrl150(topData.image_path)">
        </div>
        <div class="name">
          <h2>
            <span>{{topData.name}}</span>
            <i></i>
          </h2>
          <div class="Introduction">
            <span>评价{{topData.rating}}</span>
            <span>月售{{topData.recent_order_num}}单</span>
            <span>{{topData.delivery_mode.text}}约{{topData.order_lead_time}}分钟</span>
          </div>
        </div>
        <div class="Offer">
          <div class="Offer-left">
            <div class="Offer-content">
              <span class="title" style="color: rgb(255, 255, 255);" :style="{ backgroundColor: '#' + topData.activities[0].icon_color }">{{topData.activities[0].icon_name}}</span>
              <span class="text">{{topData.activities[0].description}}</span>
            </div>
          </div>
          <div class="Offer-right">{{topData.activities.length}}个优惠</div>
        </div>
        <p class="bulletin">公告：{{topData.promotion_info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { imgUrl750, imgUrl150 } from '@/utils/imgurl.js'
export default {
  name: 'shopHeader',
  props: {
    // 传递给shopHeader的数据，必须传
    topData: {
      type: Object,
      required: true
    }
  },
  created() {
    // console.log(this.$route)
  },
  methods: {
    imgUrl750,
    imgUrl150,
    // 界面头部的返回按钮
    handleReturn() {
      this.$router.back(-1)
      console.log(this.$route)
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  position: relative;
  .nav{
    color: #333;
    font-size: .293333rem;
    background-color: #fff;
    padding-top: 2.666667rem;
    .nav-img{
      padding: .106667rem .266667rem 0;
      display: flex;
      align-items: justify;
      top: 0;
      height: 2.666667rem;
      position: absolute;
      left: 0;
      right: 0;
      background-image: url('//fuss10.elemecdn.com/6/b0/20c6b239007cabfbd2655b0148e7cpng.png?imageMogr/format/webp/thumbnail/750x/');
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      &::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
      }
      .return{
        margin-top: .133333rem;
        margin-left: .133333rem;
        width: .32rem;
        height: .32rem;
        display: inline-block;
        border-bottom: .053333rem solid #fff;
        border-left: .053333rem solid #fff;
        transform: rotate(45deg);
        outline: none;
        color: inherit;
        text-decoration: none;
      }
    }
    .nav-text{
      padding: .8rem 0 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      .logo{
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1.6rem;
        .bg{
          position: relative;
          font-size: .266667rem;
          color: transparent;
          white-space: nowrap;
          position: absolute!important;
          top: 0;
          left: 0;
          border-top-left-radius: .08rem;
          border-bottom-right-radius: .08rem;
          background-image: linear-gradient(90deg,#fff100,#ffe339);
          width: .586667rem;
          height: .32rem;
          .text{
            color: #6f3f15;
            font-weight: 700;
            font-size: .48rem!important;
            position: absolute;
            left: 0;
            top: 0;
            right: -100%;
            bottom: -100%;
            transform: scale(.5);
            transform-origin: 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .533333rem;
          }
        }
      }
      .name{
        flex: 1;
        width: 7.2rem;
        h2{
          font-size: .546667rem;
          font-weight: 700;
          white-space: nowrap;
          position: relative;
          padding-right: .266667rem;
          display: flex;
          align-items: center;
          justify-content: center;
          span{
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          i{
            width: .4rem;
            position: relative;
            height: .653333rem;
            &::after{
              content: "";
              border-style: solid;
              border-width: .146667rem 0 .146667rem .173333rem;
              border-color: transparent transparent transparent rgba(0,0,0,.67);
              position: absolute;
              left: .16rem;
              top: .213333rem;
            }
          }
        }
        .Introduction{
          white-space: nowrap;
          height: .32rem;
          margin-top: .173333rem;
          font-size: .293333rem;
          color: #666;
          text-align: center;
          span{
            &::after{
              content: " \B7 ";
              opacity: .2;
            }
          }
        }
      }
      .Offer{
        display: flex;
        color: #333;
        margin: .32rem auto 0;
        align-items: center;
        width: 8rem;
        font-size: .293333rem;
        .Offer-left{
          flex: 1;
          overflow: hidden;
          .Offer-content{
            display: flex;
            font-size: .346667rem;
            align-items: center;
            .title{
              margin-right: .16rem;
              font-size: .24rem;
              padding: .053333rem .12rem;
              height: .346667rem;
              display: inline-block;
              box-sizing: border-box;
              border-radius: .026667rem;
              background-color: rgb(112, 188, 70);
              color: transparent;
              white-space: nowrap;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .text{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              flex: 1;
              font-size: .293333rem;
            }
          }
        }
        .Offer-right{
          width: 1.626667rem;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          position: relative;
          padding-right: .293333rem;
          text-align: right;
          color: #999;
          &::after{
            content: "";
            display: block;
            border-style: solid;
            border-width: .106667rem .093333rem 0;
            border-color: #999 transparent transparent;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
          }
        }
      }
      .bulletin{
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: .226667rem auto .266667rem;
        padding: 0;
        white-space: nowrap;
        width: 8rem;
        font-size: .293333rem;
      }
    }
  }
}
</style>
