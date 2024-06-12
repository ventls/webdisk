<script setup lang="ts">

</script>

<template>
  <main class="content_bg">
    <div class="container">
        <div class="login_box">
            <div class="login_title">欢迎登录</div>
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
    color: #8bc555;
    font-size: 30px;
    width: 331px;
}
</style>