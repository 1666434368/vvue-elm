<template>
  <div>
    <header class="head-top">
      <div class="c-head-1">
        <div class="c-head-2">
          <img class="img1" src="../../img/mark.png" alt="1">
          <span class="text1">{{headTopData.formattedAddress}}</span>
          <img class="img2" src="../../img/sub.png" alt="2">
        </div>
      </div>
    </header>
    <!-- <div class="search">
      <div class="content">
        <span>搜索饿了么商家、商品名称</span>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Head',
  props: {
    // 从父组件传递过来的数据，主要是定位信息
    headTopData: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../style/main';
  .head-top{
    // background-color: #3190e8;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    // position: fixed;
    // top: 0;
    // left: 0;
    .wh(100%, 1.186667rem);
    padding: .266667rem .373333rem 0;
    .c-head-1{
      width: 100%;
      height: 100%;
      .c-head-2{
        display: flex;
        align-items: center;
        width: 60%;
        height: 100%;
        font-weight: 700;
        .img1{
          width: .346667rem;
          height: .413333rem;
        }
        .text1{
          margin: 0 .133333rem;
          font-size: .453333rem;
          max-width: 80%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #ffffff;
        }
        .img2{
          width: .186667rem;
          height: .093333rem;
        }
      }
    }
  }
  // .search{
  //   position: sticky;
  //   z-index: 999;
  //   top: 0;
  //   background-image: linear-gradient(90deg,#0af,#0085ff);
  //   padding: .2rem .373333rem;
  //   margin: -.133333vw 0;
  //   .content{
  //     display: flex;
  //     width: 100%;
  //     height: .96rem;
  //     justify-content: center;
  //     align-items: center;
  //     border-radius: .026667rem;
  //     background: #fff;
  //     color: #999;
  //     font-size: .373333rem;
  //   }
  // }
</style>
