<template>
  <div class="login-wrap">
    <van-nav-bar title="标题" />
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        clearable
        label="手机号"
        placeholder="请输入手机号"
        left-icon="contact"
        :error-message="mobilemessage"
      />
      <van-field v-model="user.code" label="验证码" clearable placeholder="请输入验证码" left-icon="gem-o">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button @click="handleLogin" class="btn" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      mobilemessage: ''
    }
  },
  methods: {
    async handleLogin () {
      // if (this.user.mobile.trim().length === 0) {
      //   this.mobilemessage = '请输入手机号码'
      // } else {
      //   this.mobilemessage = ''
      // }
      try {
        const data = await login(this.user)
        this.$store.commit('setUser', data)
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log('登录失败' + err)
      }
    }
  }
}

</script>

<style>
</style>
<style lang="less" scoped>
.login-btn {
  padding: 10px;
  .btn {
    width: 100%;
  }
}
</style>
