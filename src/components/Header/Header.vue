<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import HeaderNavComponent from './HeaderNav.vue'
const activeIndex = ref('/product')

const router = useRouter()

const handleSelect = (key:any) => {
  router.replace({ path: key })
}
</script>


<template>
  <div class="wrapper">

      hello testdsaf
  </div>
</template>


<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 20px;
}

</style>