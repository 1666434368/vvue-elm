<template>
  <div class="login">
    <div class="main">
      <div class="header">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV">
      </div>
      <div class="form">
        <div class="info">
          <input type="tel" maxlength="11" placeholder="手机号">
          <span class="but1">获取验证码</span>
        </div>
        <div class="info">
          <input type="tel" maxlength="8" placeholder="验证码">
        </div>
        <div class="statement">
          <span class="text1">新用户登录即自动注册，并表示已同意</span>
          <span class="text2">《用户服务协议》</span>
        </div>
        <div class="but">登录</div>
      </div>
      <div class="aboutUs">关于我们</div>
    </div>
  </div>
</template>

<script>
export default {
  // 注册界面
  name: 'login'
}
</script>

<style lang="less" scoped>
.login {
  height: auto;
  min-height: 100%;
  padding-top: 1.066667rem;
  background: #fff;
  .main {
    width: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    justify-content: flex-start;
    flex: 1 1 auto;
    .header {
      text-align: center;
      img {
        height: 1.493333rem;
      }
    }
    .form {
      margin-top: .426667rem;
      .info {
        position: relative;
        margin-bottom: .426667rem;
        height: 1.28rem;
        font-size: .32rem;
        background: #fff;
        * {
          display: inline-block;
          position: absolute;
          top: 50%;
          right: .266667rem;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        input {
          width: 100%;
          height: 100%;
          left: 0;
          padding-left: .266667rem;
          border: 1px solid #ddd;
          border-radius: .106667rem;
          color: #333;
          -webkit-appearance: none;
          font-size: .373333rem;
          outline: none;
        }
        input:focus {
          border-color: #0089dc;
        }
        .but1 {
          padding: 0;
          border-radius: .16rem;
          color: #ccc;
          background: transparent;
          text-align: center;
          font-size: .32rem;
        }
      }
      .statement {
        margin-top: .32rem;
        color: #999;
        font-size: .373333rem;
        line-height: .533333rem;
        .text2 {
          color: #2395ff;
        }
      }
      .but {
        display: block;
        width: 100%;
        height: 1.12rem;
        margin-top: .8rem;
        border-radius: .106667rem;
        background: #4cd96f;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: .426667rem;
        line-height: 1.12rem;
      }
    }
    .aboutUs {
      display: block;
      margin-top: .533333rem;
      text-align: center;
      color: #999;
      font-size: .32rem;
    }
  }
}
</style>
