<script setup>
import { useNuxtStore } from "~/composables/store";
const router = useRouter();
const route = useRoute();
const counter = useNuxtStore()
let go = async () => {
  if (route.path === '/') {
    return
  }
  // router.push({ path: '/', query: { new:true}})
  await navigateTo({
    path: '/',
    query: {
      new: true,
      companynews: true
    }
  })
}
let goto = (url) => {
  // navigateTo(url)
  router.push(url)
}
</script>

<template>
  <footer>
    <div class="left">
      <img src="/public/images/logo2x.webp" alt="" class="logo2">
      <p>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
          浙ICP备2021013262号
        </a>
      </p>

    </div>
    <aside class="right">
      <p>
        <NuxtLink @click="goto('/AboutSeinfel/Introduction')" class="nav">关于歆弗</NuxtLink>
        <NuxtLink @click="goto('/PRODUCTS/FloorCare/Paper')" class="nav">产品</NuxtLink>
        <NuxtLink @click="goto('/applicationareas')" class="nav">应用领域</NuxtLink>
        <NuxtLink @click="goto('/life/Planning')" class="nav">全生命周期解决方案</NuxtLink>
        <NuxtLink style="cursor: pointer" @click="go()" class="nav">公司新闻</NuxtLink>
        <NuxtLink @click="goto('/contact')" class="nav">联系我们</NuxtLink>
      </p>
      <p>
        <a href="https://www.linkedin.com/company/71661373/admin/dashboard/" class="icon">
          <img src="/public/images/icon5.webp" alt="">
        </a>
      </p>
    </aside>
  </footer>
</template>

<style scoped>
footer {
  height: 5rem;
  width: 100%;
  border-top: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0.85rem;

}

footer .left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  color: white;
}

footer .left .logo2 {
  width: 3.8rem;
  object-fit: cover;
}

footer .right {
  width: 4rem;
  display: flex;
  justify-content: space-between;
}

footer .right p {
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
}

footer .right p a {
  display: block;
}

footer .right p .nav {
  display: block;
  margin-bottom: 0.2rem;
  cursor: pointer;
}

footer .right p .icon {
  margin-bottom: 0.1rem;
}

footer .right p img {
  width: 0.45rem;
  object-fit: cover;
}
</style>