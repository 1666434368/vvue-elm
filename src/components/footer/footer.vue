<template>
  <div class="index-wrapper">
    <div class="index-footer">
      <router-link to="/home" active-class="select" class="index-footerTab">
        <img src="../../img/home1.svg" alt="首页" class="index-footerTabIcon">
        <span class="index-footerTabText">首页</span>
      </router-link>
      <router-link to="/find" active-class="select" class="index-footerTab">
        <img src="../../img/find.svg" alt="发现" class="index-footerTabIcon">
        <span class="index-footerTabText">发现</span>
      </router-link>
      <router-link to="/order" active-class="select" class="index-footerTab">
        <img src="../../img/order.svg" alt="订单" class="index-footerTabIcon">
        <span class="index-footerTabText">订单</span>
      </router-link>
      <router-link to="/mine" active-class="select" class="index-footerTab">
        <img src="../../img/mine.svg" alt="我的" class="index-footerTabIcon">
        <span class="index-footerTabText">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.index-wrapper{
  height: 1.6rem;
  .index-footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding-top: .12rem;
    background-color: #fff;
    height: 1.6rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    .index-footerTab{
      display: block;
      flex: 1;
      text-align: center;
      font-size: 0;
      text-decoration: none;
      .index-footerTabIcon {
        width: .533333rem;
        height: .533333rem;
      }
      .index-footerTabText {
        display: block;
        color: #8e8e93;
        font-size: .266667rem;
      }
    }
    .select{
      .index-footerTabText{
        color: #0089dc;
      }
    }
  }
}
</style>
