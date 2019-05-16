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
        <div class="name" @click="dialogName">
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
        <div class="Offer" @click="dialogOffer">
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
    <!-- <c-dialog :visible.sync="briefDialogVisible" v-model="briefDialogVisible" width="30%"></c-dialog> -->
    <c-dialog :visible.sync="briefDialogVisible" width="30%">
      <transition name="scale-show">
        <div v-if="briefDialogVisible" class="content">
          <h2 class="brief-title">
            <i class="brief-img">品牌</i>{{topData.name}}
          </h2>
          <ul class="brief-param">
            <li class="brief-info">
              <h3 class="brief-info-data">{{topData.rating}}</h3>
              <p class="brief-info-dire">评分</p>
            </li>
            <li class="brief-info">
              <h3 class="brief-info-data">{{topData.recent_order_num}}单</h3>
              <p class="brief-info-dire">月售</p>
            </li>
            <li class="brief-info">
              <h3 class="brief-info-data">{{topData.delivery_mode.text}}</h3>
              <p class="brief-info-dire">约{{topData.order_lead_time}}分钟</p>
            </li>
            <li class="brief-info">
              <h3 class="brief-info-data">{{topData.piecewise_agent_fee.extra_fee}}元</h3>
              <p class="brief-info-dire">配送费</p>
            </li>
            <li class="brief-info">
              <h3 class="brief-info-data">{{topData.distance > 1000 ? (topData.distance / 1000).toFixed(1) : topData.distance}}km</h3>
              <p class="brief-info-dire">距离</p>
            </li>
          </ul>
          <h3 class="brief-bulletin">
            <span>公告</span>
          </h3>
          <div class="brief-desc">{{topData.promotion_info}}</div>
        </div>
      </transition>
      <div class="close" style="" @click="briefDialogVisible = false"></div>
    </c-dialog>
    <c-dialog :visible.sync="discountDialogVisible" width="30%">
      <transition name="discount-show">
        <div v-if="discountDialogVisible" class="discount">
          <h2 class="discount-title">优惠活动</h2>
          <ul class="discount-content">
            <li class="discount-info" v-for="(item, index) in topData.activities" :key="index">
              <h3 class="discount-img" :style="{background: '#' + item.icon_color}">{{item.icon_name}}</h3>
              <p class="discount-text">{{item.tips}}</p>
            </li>
          </ul>
          <div class="close" style="" @click="discountDialogVisible = false">x</div>
        </div>
      </transition>
    </c-dialog>
  </div>
</template>

<script>
import { imgUrl750, imgUrl150 } from '@/utils/imgurl.js'
import cDialog from '@/components/dialog'
export default {
  name: 'shopHeader',
  components: {
    cDialog
  },
  props: {
    topData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      briefDialogVisible: false,
      discountDialogVisible: false
    }
  },
  created() {
    // console.log(this.$route)
  },
  methods: {
    imgUrl750,
    imgUrl150,
    handleReturn() {
      this.$router.back(-1)
      console.log(this.$route)
    },
    dialogName() {
      console.log(123)
      this.briefDialogVisible = true;
    },
    dialogOffer() {
      this.discountDialogVisible = true;
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
  .content{
    position: relative;
    width: 80%;
    max-height: 8.533333rem;
    padding: .706667rem .666667rem .746667rem;
    border-radius: .106667rem;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    .brief-title{
      font-size: .6rem;
      line-height: .666667rem;
      color: #333;
      text-align: center;
      font-weight: bolder;
      .brief-img{
        position: relative;
        top: -.053333rem;
        margin-right: .16rem;
        border-radius: .026667rem;
        background-image: linear-gradient(90deg,#fff100,#ffe339);
        color: #6a3709;
        font-style: normal;
        padding: .08rem;
        font-weight: 700;
        font-size: .32rem;
      }
    }
    .brief-param{
      display: flex;
      margin: .506667rem -.666667rem 0;
      .brief-info{
        flex: 1;
        text-align: center;
        .brief-info-data{
          font-size: .4rem;
          font-weight: 600;
          color: #333;
          margin-bottom: .16rem;
        }
        .brief-info-dire{
          font-size: .293333rem;
          color: #999;
        }
      }
    }
    .brief-bulletin{
      position: relative;
      text-align: center;
      margin: .48rem auto .266667rem;
      width: 2.026667rem;
      background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
      background-size: 100% 1px;
      background-position: 50%;
      background-repeat: no-repeat;
      font-size: 0;
      span{
        font-size: .32rem;
        padding: 0 .106667rem;
        color: #999;
        background-color: #fff;
      }
    }
    .brief-desc{
      font-size: .346667rem;
      line-height: 1.54;
      color: #333;
      max-height: 2.666667rem;
      overflow-y: auto;
    }
  }
  .close{
    margin-top: .8rem;
    width: .8rem;
    height: .8rem;
    background-size: 100%;
    background-position: 50%;
    background-repeat: no-repeat;background-image: url('//fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/');
  }
  .scale-show-enter-active {
    animation: bounce-in .3s;
  }
  .scale-show-leave-active {
    animation: bounce-in .3s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .discount{
    position: absolute;
    background-color: #f5f5f5;
    box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
    bottom: 0;
    left: 0;
    right: 0;
    padding: .533333rem .693333rem;
    box-sizing: border-box;
    color: #333;
    .discount-title{
      text-align: center;
      font-size: .453333rem;
      font-weight: 600;
      margin-bottom: .413333rem;
    }
    .discount-content{
      height: 5.08rem;
      overflow-y: scroll;
      .discount-info{
        margin-bottom: .306667rem;
        display: flex;
        font-size: .346667rem;
        align-items: center;
        .discount-img{
          background-color: rgb(112, 188, 70);
          height: .48rem;
          padding: .053333rem .16rem;
          margin-right: .16rem;
          font-size: .32rem;
          display: inline-block;
          box-sizing: border-box;
          border-radius: .026667rem;
          color: #fff;
          white-space: nowrap;
        }
        .discount-text{
          font-size: .346667rem;
          line-height: 1.38;
          flex: 1;
        }
      }
    }
    .close{
      position: absolute;
      height: .64rem;
      width: .64rem;
      right: .266667rem;
      top: 0;
      margin-top: 0;
      // background-size: 100%;
      // background-position: 50%;
      // background-repeat: no-repeat;background-image: url('//fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/');
  
    }
  }
  .discount-show-enter-active {
    animation: bounce-in-discount .3s;
  }
  .discount-show-leave-active {
    animation: bounce-in-discount .3s reverse;
  }
  @keyframes bounce-in-discount {
    0% {
      transform: translateY(7.093333rem);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
