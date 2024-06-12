<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from '@/components/Header/Header.vue'
import { reactive,onMounted ,watchEffect } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const state = reactive({ path: route.path })


//自动追踪路由数据变化
watchEffect(() => {state.path = route.path})


//全局修改elementUI样式配置
onMounted(() => {
    state.path = route.path
    document.body.style.setProperty('--el-bg-color', '#eee');
})

console.log(state.path)
</script>

<template>
    <header v-if="state.path !== '/login'">
        <HeaderComponent/>     
    </header>
    <br v-if="state.path !== '/login'"/>
    <div class="main_content">  
        <RouterView />
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
