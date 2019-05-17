<template>
  <div class="mine">
    <!-- 头部的登录 -->
    <div class="mine-header" @click="mineHeader">
      <div class="header">
        <div class="header-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="12123123">
        </div>
        <div class="header-content">
          <p class="login">登录/注册</p>
          <p class="text">
            <img src="@/img/phone.png" alt="phone">
            <span>登录后享受更多特权</span>
          </p>
        </div>
        <span class="header-right-img">
          >
        </span>
      </div>
    </div>
    <!-- 红包加金币 -->
    <div class="mine-main-info">
      <div class="info">
        <p class="img">
          <img src="@/img/redEnvelope.png" alt="redEnvelope">
        </p>
        <p class="text">红包</p>
      </div>
      <div class="info">
        <p class="img">
          <img src="@/img/gold.png" alt="gold">
        </p>
        <p class="text">金币</p>
      </div>
    </div>
    <!-- 我的地址 -->
    <div class="mine-profile">
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">我的地址<span class="right-img"></span></div>
      </div>
    </div>
    <!-- 金币商城 -->
    <div class="mine-profile">
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">金币商城<span class="right-img"></span></div>
      </div>
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">分享拿20元现金<span class="right-img"></span></div>
      </div>
    </div>
    <!-- 客服 -->
    <div class="mine-profile">
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">我的客服<span class="right-img"></span></div>
      </div>
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">下载饿了么APP<span class="right-img"></span></div>
      </div>
      <div class="profile">
        <div class="img">
          <img src="@/img/address.png" alt="address">
        </div>
        <div class="text">规则中心<span class="right-img"></span></div>
      </div>
    </div>
    <div class="mine-privacy">隐私政策</div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {

    }
  },
  methods: {
    // 跳转到登录界面
    mineHeader() {
      this.$router.push({path: '/login'});
    }
  }
}
</script>

<style lang="less" scoped>
.mine {
  .mine-header {
    .header {
      display: flex;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      padding: .666667rem .4rem;
      color: #fff;
      align-items: center;
      .header-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .header-content {
        overflow: hidden;
        margin-left: .48rem;
        flex-grow: 1;
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .login {
          font-size: .56rem;
          margin-bottom: .213333rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          align-items: center;
          font-size: 0;
          img {
            width: .32rem;
            height: .32rem;
          }
          span {
            font-size: .32rem;
          }
        }
      }
      .header-right-img {
        width: .266667rem;
        height: .56rem;
        font-size: .48rem;
      }
    }
  }
  .mine-main-info {
    width: 100%;
    height: 2.24rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    display: flex;
    .info {
      flex: 1;
      text-align: center;
      height: 100%;
      padding: .48rem 0;
      .img {
        width: 100%;
        height: .773333rem;
        font-size: 0;
        img {
          width: .693333rem;
          height: .693333rem;
        }
      }
      .text {
        margin-top: .133333rem;
        font-size: .32rem;
        line-height: .373333rem;
        font-weight: 500;
        color: #666;
        font-weight: 700;
      }
    }
    .info:not(:last-child) {
      border-right: 1px solid #ddd;
    }
  }
  .mine-profile {
    margin-top: .266667rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: .426667rem;
    line-height: .453333rem;
    background: #fff;
    .profile {
      font-size: .426667rem;
      color: #333;
      display: flex;
      align-items: center;
      padding-left: .666667rem;
      .img {
        margin-left: -.266667rem;
        margin-right: .266667rem;
        font-size: 0;
        img {
          width: .48rem;
          height: .48rem;
          margin-top: .053333rem;
        }
      }
      .text {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: .373333rem .266667rem .373333rem 0;
        .right-img {
          width: .32rem;height: .32rem;
          background: url('../../img/rightArrow.png');
        }
      }
    }
  }
  .mine-privacy {
    text-align: center;
    margin: .613333rem auto;
    color: #4da6f0;
    font-size: .4rem;
  }
}
</style>
