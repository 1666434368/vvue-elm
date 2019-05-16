<template>
  <div>
    <div class="index-title">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-slide" v-for="(item1, index1) in foods.rst.posters" :key="index1">
          <img class="index-img" :src="imgUrl686(item1.image_hash)" :alt="item1.name">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="recommend">
      <p class="recommend-title">{{foods.recommend[0].name}}</p>
      <div class="recommend-content">
        <div class="recommend-item" v-for="(item2, index2) in foods.recommend[0].items" :key="index2">
          <img alt="" class="recommend-img" :src="imgUrl240(item2.photos[0])">
          <div>
            <p class="food-card-description">{{item2.name}}</p>
            <p class="food-card-description">月售{{item2.month_sales}}&nbsp;&nbsp;好评率{{item2.satisfy_rate}}%</p>
            <div class="food-card">
              <p class="food-card-text" style="color: rgb(255, 83, 57);"><small>¥</small>{{item2.specfoods[0].price}}<!----></p>
              <span style="font-size: 0;">
                <entitybutton :foodid="item2.specfoods[0].food_id" :price="item2.specfoods[0].price" :sku_id="item2.specfoods[0].sku_id" v-on:goodsRequest="goodsRequest" />
                <!-- <span class="cartbutton-entitybutton">
                  <a href="javascript:" role="button" aria-label="添加商品"><svg style="fill: rgb(35, 149, 255);" data-spm-anchor-id="a2ogi.12117545.0.i41"><use xlink:href="#cart-minus"></use></svg></a>
                </span> -->
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-list">
      <div class="shop-content">
        <div class="menuview">
          <div class="menuview-main">
            <div class="menuview-left">
              <ul class="menucategory-category">
                <li class="menucategory-categoryItem menucategory-active" v-for="(item3, index3) in foods.menu" :key="index3">
                  <img class="menucategory-categoryIcon" v-if="item3.icon_url" :src="imgUrl26(item3.icon_url)">
                  <span class="menucategory-categoryQuantity">1</span>
                  <span class="menucategory-categoryName">{{item3.name}}</span>
                </li>
              </ul>
            </div>
            
          <!-- <swiper :options="swiperOptionRight" class="swiper-right-box"> -->
            <div class="menuview-right" ref="menuviewRight">
              <div class="scroller">
                <dl v-for="(item4, index4) in foods.menu" :key="index4">
                  <dt>
                    <div class="category-title">
                      <strong class="category-name">{{item4.name}}</strong>
                      <span class="category-desc">{{item4.description}}</span>
                    </div>
                  </dt>
                  <dd v-for="(item5, index5) in item4.foods" :key="index5">
                    <div class="fooddetails-root">
                      <span class="fooddetails-logo">
                        <span class="attrTag-attrTag" v-if="item5.attributes.length > 0" :style="{ background: '#' + item5.attributes[0].icon_color }">{{item5.attributes[0].icon_name}}</span>
                        <img :alt="item5.name" :title="item5.name" :src="imgUrl140(item5.image_path)">
                      </span>
                      <div class="fooddetails-info">
                        <p class="fooddetails-name">
                          <span class="fooddetails-nameText">{{item5.name}}</span>
                        </p>
                        <p class="fooddetails-desc">{{item5.description}}</p>
                        <p class="fooddetails-sales">
                          <span>月售{{item5.month_sales}}份</span> <span>好评率{{item5.satisfy_rate}}%</span>
                        </p>
                        <div class="fooddetails-activityRow"><!----> <!----></div>
                        <span class="fooddetails-salesInfo" style="color: rgb(255, 83, 57);"><span>{{item5.specfoods[0].price}}</span> <!----> <!----></span>
                        <div class="fooddetails-button">
                          <entitybutton :foodid="item5.specfoods[0].food_id" :price="item5.specfoods[0].price" :sku_id="item5.specfoods[0].sku_id" v-on:goodsRequest="goodsRequest" />
                        </div>
                      </div>
                    </div>
                  </dd>
                  <!-- <dd>
                    <div class="fooddetails-root">
                      <span class="fooddetails-logo">
                        <span class="attrTag-attrTag">招牌</span>
                        <img alt="肥西老母鸡汤小份" title="肥西老母鸡汤小份" src="//fuss10.elemecdn.com/a/4a/31d4456a8c7323c79641cb6389278jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/">
                      </span>
                      <div class="fooddetails-info">
                        <p class="fooddetails-name">
                          <span class="fooddetails-nameText">肥西老母鸡汤小份</span>
                        </p>
                        <p class="fooddetails-desc">1份/口味：咸鲜（主要原料：鸡块、农夫山泉纯净水、精盐）180天优质土鸡。精火熬炖，汤清肉白，原汁原味。中华烹饪协会评定为“中华名吃”</p>
                        <p class="fooddetails-sales">
                          <span>月售413份</span> <span>好评率92%</span>
                        </p>
                        <div class="fooddetails-activityRow"></div>
                        <span class="fooddetails-salesInfo" style="color: rgb(255, 83, 57);"><span>15</span></span>
                        <div class="fooddetails-button"></div>
                      </div>
                    </div>
                  </dd> -->
                </dl>
              </div>
            </div>
          <!-- </swiper> -->
          </div>
          <div>
            <button type="button" class="essential-tip" style="display: none;">去点必选品</button>
            <footer class="cartview">
              <transition name="fade">
                <div class="cartmask" style="z-index: 10; display: none;" v-show="isBgShow"></div>
              </transition>
              <div class="cartbody" style="z-index: 11;" :class="isBgShow ? 'cartbodyOpen' : ''">
                <section class="discount-tip" style="">
                  <span style="color: #333333;">满28减13元，满45减23元，满65减30元，满90减40元，满130减50元</span>
                </section>
                <transition name="fade">
                <div v-show="isBgShow">
                  <div class="cartheader">
                    <div class="header-text"><span>已选商品</span> <!----> <!----></div>
                    <a href="javascript:" class="cartheader-remove">
                      <span>清空</span>
                    </a>
                  </div>
                  <div class="cartbody-scroller">
                    <ul class="cartlist">
                      <li class="entityrow">
                        <span class="entityList-entityname">
                          <em class="entityList-name">葱油鸡</em>
                          <p class="entityList-entityspecs"> </p>
                        </span>
                        <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">
                          <span class="entityList-entitytotal-discount">17</span>
                        </span>
                        <span class="entityList-entitycart-button">
                          <span class="entity-button"></span>
                        </span>
                      </li>
                    </ul>
                    <div class="entityList-entityrow">
                      <span class="entityList-entityname">餐盒</span>
                      <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">0.5</span>
                      <span class="entityList-entitycartbutton"></span></div>
                  </div>
                </div>
                </transition>
              </div>
              <div class="bottomNav-cartfooter" style="z-index: 11;" @click="handleFooter">
                <span class="bottomNav-carticon" :class="response.cart.total_weight === 0 ? 'bottomNav-empty' : ''"><span v-if="response.cart.total_weight > 0">{{response.cart.total_weight}}</span></span>
                <div class="bottomNav-cartInfo">
                  <p class="bottomNav-carttotal"><span v-if="response.cart.total_weight > 0">¥{{response.cart.total}}</span><span v-if="response.cart.total_weight === 0" style="font-size: .7em;color: #999;">未选购商品</span></p>
                  <p class="bottomNav-cartdelivery">{{response.cart.agent_fee_tip}}</p>
                </div>
                <a href="javascript:;" class="submit-btn" :class="response.checkout_button_v2.action === 'forbidden' ? 'submit-btn-disabled' : ''"><span>{{response.checkout_button_v2.text}}</span></a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imgUrl686, imgUrl240, imgUrl26, imgUrl140 } from '@/utils/imgurl.js'
import entitybutton from '../../components/entitybutton/entitybutton'
import BScroll from 'better-scroll'
export default {
  components:{
    entitybutton
  },
  props: {
    foods: {
      type: Object,
      required: true
    }
  },
  created()　{
    console.log(this.foods)
    this.request.user_id = this.foods.user.user_id
    this.request.restaurant_id = this.foods.rst.id
    this.response.checkout_button_v2.action = "forbidden",
    this.response.checkout_button_v2.text = '￥' + this.foods.rst.float_minimum_order_amount + '起送'
  },
  mounted() {
    // console.log(this.request)
    // this.request.user_id = this.foods.user.user_id
    // this.request.restaurant_id = this.foods.ret.id
    // console.log(this.request)
    this.$nextTick(function () {
      // this.rights = new BScroll(this.$refs.menuviewRight,{
      this.rights = new BScroll('.menuview-right',{
          probeType: 3
      })
      this.rights.on('scroll', (pos) => {
        console.log(pos)
      })
    })
  },
  data() {
    return {
      isBgShow: false,
      request: {
        user_id: undefined,
        // 餐厅id
        restaurant_id: undefined,
        entities: []
      },
      response: {
        checkout_button_v2: {
          action: "checkout",
          scheme: "",
          text: "去结算"
        },
        cart: {
          agent_fee_tip: "另需配送费5.1元",
          sku_id: 12,
          discount_amount: 0,
          total: 0,
          total_weight: 0,
          extra: {
            category_id: 102,
            description: "",
            icon: {color: "62cb92", image_hash: "", name: "包装"},
            id: -70000,
            max_quantity: 1,
            name: "餐盒",
            original_price: 0,
            price: 0,
            quantity: 0,
            sale_total_weight: 0,
            type: 0
          },
          group: [
            {
              act_tags: [],
              activities: [],
              attrs: [],
              beyond_time_peroid: 0,
              category_id: 1,
              discount_amount: 0,
              garnish: [],
              group_id: 533304346,
              id: 900212088,
              image_hash: "94eefa4bcb0596c1e7284fe96d276740jpeg",
              is_selected: true,
              is_sold_out: 0,
              is_understock: 0,
              is_valid: 1,
              min_purchase_quantity: 1,
              name: "米饭",
              new_specs: [],
              price: 2,
              quantity: 1,
              sale_total_weight: 0,
              sale_unit: "",
              scheme: "eleme://catering?target_food_id=900212088&restaurant_id=E2250635489379941286&category_id=533304346",
              sku_id: "522177177796",
              specs: [],
              stock: 9992,
              total_discount_amount: 0,
              total_price: 2,
              weight: 1,
              weight_flag: 2
            },
            {
              act_tags: [],
              activities: [],
              attrs: [],
              beyond_time_peroid: 0,
              category_id: 1,
              discount_amount: 0,
              garnish: [],
              group_id: 547048976,
              id: 900230309,
              image_hash: "72834276d6807688461310655011f754jpeg",
              is_selected: true,
              is_sold_out: 0,
              is_understock: 0,
              is_valid: 1,
              min_purchase_quantity: 1,
              name: "蜜汁南瓜",
              new_specs: [],
              price: 9,
              quantity: 1,
              sale_total_weight: 0,
              sale_unit: "",
              scheme: "eleme://catering?target_food_id=900230309&restaurant_id=E2250635489379941286&category_id=547048976",
              sku_id: "522195808452",
              specs: [],
              stock: 9999,
              total_discount_amount: 0,
              total_price: 9,
              weight: 1,
              weight_flag: 2
            }
          ],
        }
      },
      swiperOption: {
        // 滑动方向水平
        direction: 'horizontal',
        // // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // 抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        resistanceRatio: 0,
        // 开启loop模式
        loop : this.foods.rst.posters.length > 1 ? true : false,
        // 自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperOptionRight: {
        // 滑动方向垂直
        direction: 'vertical',
        // 抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        resistanceRatio: 0,
        on: {
          // touchMove: function(event){
            // console.log($(document).scrollTop() , $('.shop-list').offset().top- $('.shoptab').height())
            // if ($(document).scrollTop() < $('.shop-list').offset().top - $('.shoptab').height()) {
            //   $(document).scrollTop($('.shop-list').offset().top)
            // }
            // console.log($(document).scrollTop())
            // scroll_init(event)
          // },
        },
      }
    }
  },
  methods: {
    imgUrl686,
    imgUrl240,
    imgUrl26,
    imgUrl140,
    handleFooter() {
      console.log('123')
      this.isBgShow = !this.isBgShow;
    },
    goodsRequest(data) {
      console.log(data)
      /*  id: 食品id，
        sku_id: 
        quantity： 食品数量
      */
      let isPush = this.request.entities.findIndex(function(item) {
        return item.foodid === data.foodid
      })
      if (isPush < 0) {
        this.request.entities.push(data)
      } else {
        this.request.entities.fill(data,isPush,isPush+1)
      }
      this.goodsResponse()
    },
    goodsResponse() {
      // 总价
      let totalPrice = 0
      let tath = this
      this.response.cart.total_weight = 0
      this.request.entities.forEach(function(item){
        totalPrice = totalPrice + item.price * item.quantity
        tath.response.cart.total_weight += item.quantity
      })
      this.response.cart.total = totalPrice
      // 餐盒费
      this.response.cart.extra.original_price = this.response.cart.total_weight * 0.5
      this.response.cart.extra.price= this.response.cart.total_weight * 0.5
      // 起送价
      let startingPrice = this.foods.rst.float_minimum_order_amount
      if (totalPrice >= startingPrice) {
        this.response.checkout_button_v2 = {
          action: "checkout",
          scheme: "",
          text: "去结算"
        }
      } else if (totalPrice === 0) {
        this.response.checkout_button_v2 = {
          action: "forbidden",
          scheme: "",
          text: '￥' + this.foods.rst.float_minimum_order_amount + '起送'
        }
      } else {
        this.response.checkout_button_v2 = {
          action: "forbidden",
          forbidden_reason: {
            content: "还差¥" + (startingPrice - totalPrice) + "起送",
            scheme: "eleme://catering?restaurant_id=E2250635489379941286"
          },
          text: "还差¥" + (startingPrice - totalPrice) + "起送"
        }
      }
    },
    scroll_init(e) {
      console.log(e, $(document).scrollTop())
    }
  }
}
</script>

<style lang="less" scoped>
.index-title{
    background: #fff;
    padding: .186667rem 0 0;
  .index-img{
    width: 9.146667rem;
    height: 2.346667rem;
    border-radius: .08rem;
    display: block;
    margin: 0 auto;
  }
}
.recommend{
  padding-top: .426667rem;
  background-color: #fff;
  .recommend-title{
    padding-left: .426667rem;
    color: #333;
    font-size: .426667rem;
    font-weight: 700;
    margin-bottom: .266667rem;
  }
  .recommend-content{
    overflow-x: scroll;
    display: flex;
    -webkit-overflow-scrolling: touch;
    .recommend-item{
      -webkit-flex: none;
      flex: none;
      width: 3.2rem;
      margin-right: .266667rem;
      padding-bottom: .426667rem;
      &:first-child {
        margin-left: .426667rem;
      }
      .recommend-img{
        display: block;
        width: 3.2rem;
        height: 3.2rem;
        border-top-left-radius: .08rem;
        border-top-right-radius: .08rem;
      }
      div{
        .food-card-description{
          color: #999;
          font-size: .266667rem;
          margin-bottom: .186667rem;
          min-height: 1em;
          &:first-child {
            color: #333;
            font-size: .373333rem;
            margin: .186667rem 0 .093333rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .food-card{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: .026667rem;
          .food-card-text{
            font-size: .48rem;
            color: #ff5339;
          }
          .cartbutton-entitybutton{
            display: inline-flex;
            font-size: .346667rem;
            align-items: center;
            a{
              display: inline-block;
              vertical-align: middle;
              text-decoration: none;
            }
          }
        }
      }
    }

  }
}
.shop-list{
  position: relative;
  .shop-content{
    height: 100%;
    box-sizing: border-box;
    height: 1253px;
    .menuview{
      height: 100%;
      padding-bottom: 1.28rem;
      background-color: #fff;
      .menuview-main{
        display: flex;
        height: 100%;
        .menuview-left{
          width: 2.053333rem;
          height: 100%;
          overflow-y: auto;
          background-color: #f8f8f8;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 1.066667rem;
          .menucategory-category{
            position: relative;
            z-index: 0;
            flex: none;
            list-style: none;
            .menucategory-categoryItem{
              position: relative;
              padding: .466667rem .2rem;
              font-size: .32rem;
              color: #666;
              background-color: #fff;
              .menucategory-categoryIcon{
                width: .346667rem;
                height: .346667rem;
                vertical-align: top;
                margin-right: .08rem;
              }
              .menucategory-categoryQuantity{
                position: absolute;
                right: .08rem;
                top: .08rem;
                color: #fff;
                background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
                border-radius: .2rem;
                font-size: .266667rem;
                font-weight: 700;
                text-align: center;
                min-width: .373333rem;
                padding: 0 .106667rem;
                line-height: .373333rem;
              }
              .menucategory-categoryName{
                line-height: 1.2em;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
              }
            }
            .menucategory-active{
              color: #333;
              background-color: #fff;
            }
          }
        }
        .menuview-right{
          position: relative;
          height: 100%;
          width: 7.946667rem;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          .scroller{
            // height: 100%;
            padding-bottom: 1.066667rem;
            dl{
              dt{
                position: relative;
                margin-left: .266667rem;
                padding: .2rem .8rem .2rem 0;
                .category-title{
                  display: flex;
                  align-items: center;
                  overflow: hidden;
                  .category-name{
                    margin-right: .133333rem;
                    font-weight: 700;
                    font-size: .32rem;
                    color: #666;
                    flex: none;
                  }
                  .category-desc{
                    flex: 1;
                    color: #999;
                    font-size: .266667rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                }
              }
              dd{
                position: relative;
                margin: 0;
                min-height: 3.066667rem;
                padding-left: .266667rem;
                .fooddetails-root{
                  padding: .266667rem 0;
                  margin-bottom: .013333rem;
                  display: flex;
                  min-height: 2.746667rem;
                  position: relative;
                  .fooddetails-logo{
                    width: 2.533333rem;
                    height: 2.533333rem;
                    flex: none;
                    margin-right: .266667rem;
                    position: relative;
                    .attrTag-attrTag{
                      position: absolute;
                      left: 0;
                      top: 0;
                      border-top-left-radius: .053333rem;
                      border-bottom-right-radius: .053333rem;
                      width: .64rem;
                      height: .346667rem;
                      font-size: .266667rem;
                      color: #fff;
                      white-space: nowrap;
                      background-image: linear-gradient(135deg,#ffae1b,#f57751);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    img{
                      width: 100%;
                      border-radius: .053333rem;
                    }
                  }
                  .fooddetails-info{
                    flex: 1;
                    position: relative;
                    padding-bottom: .666667rem;
                    padding-right: .4rem;
                    .fooddetails-name{
                      position: relative;
                      padding-right: .4rem;
                      display: flex;
                      align-items: start;
                      .fooddetails-nameText{
                        font-weight: 700;
                        overflow: hidden;
                        font-size: .4rem;
                        white-space: nowrap;
                        width: 4rem;
                        text-overflow: ellipsis;
                      }
                    }
                    .fooddetails-desc{
                      margin: .133333rem 0;
                      font-size: .266667rem;
                      color: #999;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      width: 4.266667rem;
                    }
                    .fooddetails-sales{
                      margin: .173333rem 0!important;
                      color: #999;
                      font-size: .266667rem;
                      line-height: 1;
                      min-height: 1em;
                      span{
                        vertical-align: middle;
                        &:last-child{
                          margin-left: .106667rem;
                          vertical-align: middle;
                        }
                      }
                    }
                    .fooddetails-activityRow{}
                    .fooddetails-salesInfo{
                      position: absolute;
                      bottom: 0;
                      font-size: .48rem;
                      line-height: .426667rem;
                      color: #ff5339;
                      padding-bottom: .093333rem;
                      display: flex;
                      align-items: baseline;
                      &::before{
                        content: "\A5";
                        font-size: .373333rem;
                        display: inline-block;
                        margin-right: .026667rem;
                      }
                      span:first-child{
                        margin-right: .026667rem;
                      }
                    }
                    .fooddetails-button{
                      position: absolute;
                      right: .4rem;
                      bottom: .066667rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .essential-tip{
        position: fixed;
        bottom: 2rem;
        right: .133333rem;
        color: #fff;
        padding: .133333rem .266667rem;
        box-shadow: 0 0.013333rem 0.026667rem #ddd;
        font-size: .32rem;
        font-weight: 700;
        background-color: #ff6000;
        -webkit-appearance: none;
        outline: none;
        border: .08rem solid #fff;
        border-radius: .666667rem;
        z-index: 10;
        transition: opacity .3s ease;
      }
      .cartview{
        font-size: .426667rem;
        .cartmask{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: #000;
          opacity: .4;
          transition: opacity .3s ease;
          &.fade-enter-active,&.fade-leave-active {
            transition: opacity .5s;
          }
          &.fade-enter,&.fade-leave-active {
            opacity: 0;
          }
        }
        .cartbody{
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          transition: transform .3s ease;
          transform: translate3d(0,100%,0);
          bottom: 1.813333rem;
          .discount-tip{
            background-color: #fffad6;
            border-top: .013333rem solid #f9e8a3;
            opacity: .96;
            line-height: .533333rem;
            font-size: .266667rem;
            text-align: center;
          }
          .cartheader{
            display: flex;
            align-items: center;
            padding: 0 .4rem;
            border-bottom: .013333rem solid #ddd;
            background-color: #eceff1;
            color: #666;
            height: 1.066667rem;
            .header-text{
              display: flex;
              align-items: center;
              flex: 1;
            }
            .cartheader-remove{
              flex: none;
              display: flex;
              align-items: center;
              padding-left: .4rem;
              color: #666;
              text-decoration: none;
              font-size: .346667rem;
              line-height: .4rem;
              outline: none;
            }
          }
          .cartbody-scroller{
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            max-height: 8rem;
            .cartlist{
              margin: 0;
              padding: 0;
              flex: none;
              .entityrow{
                display: flex;
                align-items: center;
                padding: .2rem .333333rem .2rem 0;
                min-height: 1.466667rem;
                margin-left: .333333rem;
                .entityList-entityname{
                  flex: 5.5;
                  line-height: normal;
                  .entityList-name{
                    display: inline-block;
                    font-style: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: middle;
                    max-width: 4.666667rem;
                  }
                  .entityList-entityspecs{
                    width: 100%;
                    line-height: .333333rem;
                    color: #999;
                    font-size: .266667rem;
                  }
                }
                .entityList-entitytotal{
                  flex: 2.5;
                  color: #ff5339;
                  text-align: right;
                  white-space: nowrap;
                  font-weight: 700;
                  .entityList-entitytotal-discount{
                    &::before{
                      content: "\A5";
                      font-size: .266667rem;
                      color: currentColor;
                    }
                  }
                }
                .entityList-entitycart-button{
                  flex: 3;
                  text-align: right;
                  .entity-button{
                    display: inline-flex;
                    font-size: .346667rem;
                    align-items: center;
                  }
                }
              }
            }
            .entityList-entityrow{
              display: flex;
              align-items: center;
              padding: .2rem .333333rem .2rem 0;
              min-height: 1.466667rem;
              margin-left: .333333rem;
              border-top: .013333rem solid #eee;
              .entityList-entityname{
                flex: 5.5;
                line-height: normal;
              }
              .entityList-entitytotal{
                flex: 2.5;
                color: #ff5339;
                text-align: right;
                white-space: nowrap;
                font-weight: 700;
              }
              .entityList-entitycartbutton{
                flex: 3;
                text-align: right;
              }
            }
          }
        }
        .cartbodyOpen{
          transform: translateZ(0);
          bottom: 1.28rem;
        }
        .bottomNav-cartfooter{
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          padding-left: 2.106667rem;
          background-color: rgba(61,61,63,.9);
          -webkit-backdrop-filter: blur(.266667rem);
          height: 1.28rem;
          .bottomNav-carticon{
            position: absolute;
            left: .32rem;
            bottom: .2rem;
            width: 1.333333rem;
            height: 1.333333rem;
            box-sizing: border-box;
            border-radius: 100%;
            background-color: #3190e8;
            border: .133333rem solid #444;
            box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
            will-change: transform;
            &::before{
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==') 50% no-repeat;
              background-size: .6rem;
              content: "";
            }
            span{
              position: absolute;
              right: -.12rem;
              top: -.133333rem;
              line-height: 1;
              background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
              color: #fff;
              border-radius: .32rem;
              padding: .053333rem .133333rem;
              font-size: .266667rem;
            }
          }
          .bottomNav-empty {
            background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
          }
          .bottomNav-cartInfo{
            flex: 1;
            .bottomNav-carttotal{
              font-size: .48rem;
              line-height: normal;
              color: #fff;
            }
            .bottomNav-cartdelivery{
              color: #999;
              font-size: .266667rem;
            }
          }
          .submit-btn{
            height: 100%;
            width: 2.8rem;
            background-color: #38ca73;
            color: #fff;
            text-align: center;
            text-decoration: none;
            font-size: .4rem;
            font-weight: 700;
            -webkit-user-select: none;
            user-select: none;
            line-height: 1.28rem;
          }
          .submit-btn-disabled{
            background-color: #535356;
          }
        }
      }
    }
  }
}
</style>
