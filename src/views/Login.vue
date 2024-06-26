<script setup lang="ts">
import { ref, reactive ,onMounted} from 'vue'
const loginModel = reactive({ account: "", password: "",  savepasswd: false})

const login = () => {
    const account = loginModel.account;
    const password = loginModel.password;
    console.log(account,password,loginModel.savepasswd)
}

</script>

<template>
  <main class="content_bg">
    <div class="container">
        <div class="login_box">
            <div class="login_title">欢迎登录</div>
            <div class="account_input">
                <el-input placeholder="请输入账户名" v-model="loginModel.account" />
            </div>
            <div class="password_input">
                <el-input placeholder="请输入密码" v-model="loginModel.password" type="password"/>
            </div>
            <div class="remember_password">
                <el-checkbox label="记住密码" size="large" v-model="loginModel.savepasswd"/>
            </div>
            <div class="login_btn">
                <el-button type="success" plain @click="login">登录</el-button>
            </div>
        </div>
    </div>
  </main>
</template>


<style scoped lang="scss">
.content_bg{
    background-image: url(@/assets/bgimg.png);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}

.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin:  0 auto; /* 10% top and bottom margin */
}

.login_box{
    width: 650px;
    height: 650px;
    background-image: url(@/assets/login_box.png);
    //background-color: #f0f0f0; /* Example background color */
    //border: 1px solid #ccc; /* Example border */
    margin-right: 5vw;
    background-size: cover;
    padding-top: 111px;
    padding-left: 234px;
}

.login_title{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-height: 44px;
    color: var(--theme--word--color);
    font-size: 30px;
    width: 331px;
}


.account_input{
    width: 332px;
    padding: 0 20px;
    margin-top: 20px;
}

.password_input{
    @extend .account_input;
    margin-top: 20px;
}
.remember_password{
    @extend .account_input;
    margin-top: 25px;
    :deep(.el-checkbox__label){
        color: var(--theme--word--color) !important;
    }
    :deep(.el-checkbox__input.is-checked .el-checkbox__inner){
        background-color: var(--theme--word--color)
    }
}
.login_btn{
    @extend .account_input;
    margin-left: 22px;
    margin-top: 25px;
    
}
.login_btn > button {
    width: 250px;
}
</style>