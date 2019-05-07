<template>
  <span class="cartbutton">
    <span class="entitybutton">
      <span class="button" v-if="number !== 0" @click="left_button">-</span>
      <span role="button" aria-label="已选1份" class="entityquantity" v-if="number !== 0">{{number}}</span>
      <span class="button right" @click="right_button">+</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'entitybutton',
  props: {
    foodid: {
      required: true
    },
    price: {
      required: true
    },
    sku_id: {
      required: true
    }
  },
  data() {
    return{
      number: 0,
      request: {
        user_id: 5278812666,
        // 餐厅id
        restaurant_id: "E2250635489379941286",
        /*
        id: 食品id，
        sku_id: 
        quantity： 食品数量
        */
        entities: [
          {id: 900225321, sku_id: "522190739652", quantity: 2, new_specs: [], attrs: []},
          {id: 900203696, sku_id: "522168618180", quantity: 1, new_specs: [], attrs: []}
        ]
      },
      response: {
        checkout_button_v2_1: {
          action: "forbidden",
          forbidden_reason: {
            content: "还差¥7.5起送",
            scheme: "eleme://catering?restaurant_id=E2250635489379941286"
          },
          text: ""
        },
        checkout_button_v2: {
          action: "checkout",
          scheme: "",
          text: "去结算"
        },
        cart: {
          agent_fee_tip: "另需配送费5.1元",
          sku_id: 12,
          discount_amount: 0
        },
        extra: {
          category_id: 102,
          description: "",
          icon: {color: "62cb92", image_hash: "", name: "包装"},
          id: -70000,
          max_quantity: 1,
          name: "餐盒",
          original_price: 1,
          price: 1,
          quantity: 1,
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
        ]
      }
    }
  },
  watch: {
    number(newVal, oldVal) {
      console.log(newVal, oldVal)
      let json = {}
      json.foodid = this.foodid;
      json.sku_id = this.sku_id;
      json.price = this.price;
      json.quantity = newVal;
      this.$emit('goodsRequest', json)
    }
  },
  methods: {
    left_button() {
      console.log('left')
      if (this.number > 0 ) {
        this.number--
      }
    },
    right_button() {
      console.log('right')
      this.number++
    }
  }
}
</script>

<style lang="less" scoped>
.cartbutton{
  display: inline-block;
  font-size: 0;
  .entitybutton{
    display: inline-block;
    font-size: 0;
    .button{
      display: inline-block;
      width: .586667rem;
      height: .586667rem;
      border-radius: .293333rem;
      border: 2px solid #2396ff;
      font-size: .64rem;
      text-align: center;
      line-height: .533333rem;
      color: #2396ff;
      font-weight: 700;
      background: #fff;
    }
    .right{
      color: #fff;
      background: #2396ff
    }
    .entityquantity{
      display: inline-block;
      text-align: center;
      color: rgba(0,0,0,.87);
      font-size: .373333rem;
      width: .693333rem;
      overflow: hidden;
    }
  }
}
</style>
