<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import HeaderNavComponent from './HeaderNav.vue'


const router = useRouter()

const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
    router.replace({ path: key })
}
</script>


<template>
  <div class="title_box">
    <el-menu :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="var(--theme--word--color)"
        @select="handleSelect">
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/file">文件</el-menu-item>
    <el-menu-item index="/ai">AI</el-menu-item>
    </el-menu>
  </div>
</template>


<style scoped lang="scss">
.title_box {
    display: block ;
    height: 60px;
    min-width: 500px;
    width: 100vw;
    border: 1px solid #000;

    :deep(.el-menu-item.is-active) {
      color: #ffffff !important;
      text-decoration: underline;
      background-color: #64e268b6;
    }

    :deep(.el-menu-item){
      min-width: 150px;
    }
}



</style>