<script setup>
import {useNuxtStore} from "~/composables/store";
const router = useRouter();
const counter = useNuxtStore()
let go=()=>{

  router.push({ path: '/', query: { new:true}})

}
let goto=async (url)=>{
  await navigateTo(url)
  // window.location.reload()
}
</script>

<template>
  <footer>
    <div class="left">
      <img src="/public/images/logo2x.webp" alt="" class="logo2">
    </div>
    <aside class="right">
      <p>
        <NuxtLink   class="nav" @click="goto('/AboutSeinfel/Introduction')">ABOUT SEINFEL</NuxtLink>
        <NuxtLink  class="nav" @click="goto('/PRODUCTS/FloorCare/Paper')">PRODUCT</NuxtLink>
        <NuxtLink   class="nav" @click="goto('/applicationareas')">SERVICE AREAS</NuxtLink>
        <NuxtLink  class="nav" @click="goto('/life/Planning')">FULL LIFE CYCLE SOLUTION</NuxtLink>
        <NuxtLink style="cursor: pointer"  @click="go()" class="nav">COMPANY NEWS</NuxtLink>
        <NuxtLink   class="nav" @click="goto('/contact')">CONTACT</NuxtLink>
      </p>
      <p>
        <a href="" class="icon">
          <img src="/public/images/icon1.webp" alt="">
        </a>
        <a href="" class="icon">
          <img src="/public/images/icon2.webp" alt="">
        </a>
        <a href="" class="icon">
          <img src="/public/images/icon3.webp" alt="">
        </a>
        <a href="" class="icon">
          <img src="/public/images/icon4.webp" alt="">
        </a>
        <a href="" class="icon">
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

}

footer .right p .icon {
  margin-bottom: 0.1rem;
}

footer .right p img {
  width: 0.45rem;
  object-fit: cover;
}
</style>