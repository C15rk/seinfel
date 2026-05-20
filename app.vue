<script setup>
import 'public/js/rem.js';
import { Analytics } from '@vercel/analytics/nuxt';
import { useRoute } from 'vue-router'
import { provide,ref,onMounted } from 'vue';
let navbarVisible = ref(true);
import { useNuxtStore } from '~/composables/store.js'
import { computed } from 'vue'

const route = useRoute()
const counter = useNuxtStore()

const handleScroll = (position) => {
  if (position && navbarVisible.value) {
    navbarVisible.value=false
    counter.hiddenNav()
  } else if (!position && !navbarVisible.value) {
    navbarVisible.value=true
    counter.showNav()
  }
};
const layoutKey = computed(() => route.meta.layout || 'default')
const pageKey = computed(() => route.fullPath)

provide('handleScroll', handleScroll);
onMounted(async ()=>{
  await get('/saveip')

  if(window.screen.width<768){
    counter.changeApp(true)
  }
})
</script>

<template>
  <Analytics />
  <NuxtLayout :key="layoutKey">
    <NuxtPage :key="pageKey" />
  </NuxtLayout>
</template>
<style>

</style>


