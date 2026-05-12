<!-- components/FixedContent.vue -->
<template>
  <div class="maxBox">
    <!-- 顶部菜单栏 -->
    <oneCn></oneCn>
    <!-- 移动端展开按钮 -->
    <div class="lg:hidden miBtn" @click="showMaskFun()"
      v-show="route.path !== '/contact' && !showMask">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
    <!-- 移动端收起按钮 -->
    <div class="lg:hidden miBtn2" @click="showMaskFun()"
      v-show="route.path !== '/contact' && showMask">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
    <!-- 布局盒子 -->
    <section class="wrap" @scroll="scrollHand" id="indexWrap2">
      <!-- 移动端遮罩 -->
      <div class="mask" v-show="showMask" @click="showMaskFun()"></div>
      <!-- 移动段侧边栏 -->
      <nav class="vertical-nav Mobile" v-show="showMask">
        <template v-for="(category, i) in counter.menuList.list" :key="i">
          <p @click="changeMenuStatu(category)" :style="{ 'position': 'relative', 'margin-top': '0.15rem' }">
            <span :class="[category.router === counter.routerPath ? 'span' : '']"
              style="  white-space: pre-wrap;">{{ category.name }}</span>
            <span :class="[category.router === counter.routerPath ? 'span' : '']" v-if="category.name2">{{ category.name2 }}</span>
            <bor2 :class="['defaBor2']"></bor2>
          </p>
          <nav :class="[category.router === counter.routerPath ? 'nav-show' : 'nav-hidden']">
            <template v-for="subcategory in category.subcategories" :key="subcategory.id">
              <NuxtLink :to="subcategory.url">
                <div style="position: relative;padding: 0.14rem;height: 100%;display: flex;align-items: center;">
                  <div :class="[route.path === subcategory.url ? 'active-nav' : '', 'item']">
                    <span>{{ subcategory.name }}</span>
                  </div>
                  <bor3 class="defaBor3"></bor3>
                </div>
              </NuxtLink>
            </template>
          </nav>
        </template>
      </nav>
      <!-- 顶部标题 -->
      <div class="oneRow" v-if="route.path !== '/contact'">
        <borCopy :style="{ 'left': counter.menuList.leftIndex ? counter.menuList.leftIndex : '' }" :class="[counter.menuList.title[0] === '全生命周期' ?
          'defaBor1' : 'defaBor111']" />
        <div class="left">
          <p v-for="(item, index) in counter.menuList.title" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="right">
          <div class="searchBox" v-if="counter.menuList.isShowBack ">
            <div class="search">
              <SearchPro2 />
            </div>
            <NuxtLink to="/applicationareas">
              <img src="../public/images/products/jiantou.webp" alt="">
              <p>
                返回应用领域
              </p>
            </NuxtLink>
          </div>


        </div>
      </div>
      <!--  -->
      <article>
        <div class="div-container">
          <!-- pc端侧边栏 -->
          <nav class="vertical-nav hidden lg:block" v-show="route.path !== '/contact'">
            <div>
              <!-- 一级选项 -->
              <div v-for="category in counter.menuList.list" :key="category.id">
                <!-- 一级标题 -->
                <p @click="changeMenuStatu(category)" :style="{ 'position': 'relative', 'margin-top': '0.15rem', }">
                  <span :class="[category.router === counter.routerPath ? 'span' : '']"
                    :style="{ 'white-space': 'pre-wrap', 'fontSize': '0.65rem'}">{{
                    category.name
                    }}</span>
                  <span :class="[category.router === counter.routerPath ? 'span' : '']"
                    :style="{ 'fontSize':'0.65rem'}" v-if="category.name2">{{
                    category.name2
                    }}</span>
                  <bor2 :class="['defaBor2']"></bor2>
                </p>
                <!-- 二级标题 -->
                <nav
                  :class="[category.router === counter.routerPath && category.subcategories[[0]] ? 'nav-show' : 'nav-hidden']">
                  <template v-for="subcategory in category.subcategories" :key="subcategory.id">
                    <NuxtLink :to="subcategory.url">
                      <div style="position: relative;padding: 0.14rem;height: 100%;display: flex;align-items: center;">
                        <div :class="[route.path === subcategory.url ? 'active-nav' : '', 'item']">
                          <span>{{ subcategory.name }}</span><br>
                          <span v-if="subcategory.name2">{{ subcategory.name2 }}</span>
                        </div>
                        <bor3 class="defaBor3"></bor3>
                      </div>
                    </NuxtLink>
                  </template>
                </nav>
              </div>
            </div>
            <div class="lastBox">
              <bor2 class="lastBoxBor"></bor2>
            </div>

          </nav>
          
          <!-- 中间快捷菜单 -->
          <div class="vertical-nav2 hidden lg:block">
            <a class="item" v-for="(item, index) in counter.menuList.tips " :key="index" :href="item.url">
              {{ item.name }}
            </a>
          </div>
          <!-- 右侧详情 -->
          <div class="vertical-nav3">
            <slot />
          </div>
        </div>
      </article>
    </section>
    <!-- 底部 -->
    <footCn></footCn>
  </div>
</template>

<script setup>
//导航栏
import { ref, onMounted, computed, watch } from "vue";
import { useNuxtStore } from '~/composables/store.js'
const counter = useNuxtStore()

import { add, add2, add3, add4 } from "~/utils/bor.js";


const showMask = ref(false)

function changeMenuStatu(category) {
  if (category.showSubmenu || !category.name) {
    return
  }
  if (category.subcategories[0]) {
    router.push(category.subcategories[0].url)
  } else {
    router.push(category.router)
  }


}

const route = useRoute();
const router = useRouter();

function showMaskFun() {
  document.body.style.overflow = showMask.value ? '' : 'hidden'
  showMask.value = !showMask.value
}
onMounted(() => {
  add()
  add2()
  add3()
  add4()
})
</script>

<style scoped>
.maxBox {
  background-image: url("../public/images/index/banner7.webp");
  background-size: 100vw 100vh;
  /* 使用视口的宽度和高度 */
  background-attachment: fixed;
  /* 图片固定在视口中 */
  min-height: 100vh;
  overflow: hidden;
}

.miBtn {
  position: absolute;
  left: 0.2rem;
  top: 50%;
  width: 30px;
  height: 30px;
  z-index: 1000;
  color: white;
  cursor: pointer;
}

.miBtn2 {
  position: absolute;
  left: 8rem;
  top: 50%;
  width: 30px;
  height: 30px;
  z-index: 20001;
  color: white;
  cursor: pointer;
  transform: rotate(180deg);
}

.itemNav {
  height: auto;
}

.wrap {
  width: 100%;
  padding-top: 1.13rem;

  height: calc(100% - 5rem);
}

.wrap .oneRow {

  width: 100%;
  position: relative;
  border-top: 1px solid white;
  display: flex;
}

.wrap .oneRow .left {

  width: 7.4rem;
  position: relative;
  padding: 0.8rem 0 0.25rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
}


.wrap .oneRow .left p {
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 1.05rem;
  line-height: 1.05rem;
  color: white;
  text-align: left;
}

.wrap .oneRow .right {
  flex: 1;
  position: relative;
  padding: 0 0.82rem 0.26rem 0;
  font-size: 0.35rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}

.wrap .oneRow .right a {
  display: flex;
  color: white;
  align-items: center;
  margin-top: 0.95rem;
}

.wrap .oneRow .right img {
  width: 0.65rem;
  height: 0.65rem;
  margin-right: 0.2rem;

}


.div-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.span {
  color: white !important;
}

.vertical-nav {
  min-width: 5.2rem !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
}

.vertical-nav .lastBox {
  width: 100%;
  min-height: 2.27rem;
  height: auto;
  position: relative;

  flex: 1;
}

.vertical-nav2 {
  width: 2.2rem;
  padding: 0.33rem 0.19rem;
  display: none;
}

.vertical-nav2 .item {
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  color: white;
  margin-bottom: 0.31rem;
  display: block;
}

.vertical-nav3 {
  flex: 1;
  margin-top: 0.15rem;

}

.vertical-nav nav {
  display: flex;
  flex-direction: column;
}

.vertical-nav p {
  min-height: 2.3rem;
  font-family: AlibabaPuHuiTi2-45-Light;

  font-size: 0.5rem !important;
  color: #888787 !important;
  cursor: pointer;
  text-align: left !important;
  padding-bottom: 0.2rem;
}

.vertical-nav p span {
  vertical-align: bottom;
  display: inline-block;
  /* 或者其他的布局方式，比如 block 或 flex */
  line-height: 0.75rem;
  //margin: 0.91rem 0 0.1rem 0.8rem;
  text-align: left;

  max-width: 3.5rem;
  white-space: pre-wrap;
  position: absolute;
  left: 0.8rem;
  bottom: 0.2rem;
}

.vertical-nav nav a {
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  min-height: 0.7rem;
  color: white;

}

.vertical-nav nav a:hover .item {
  width: 100%;
  border-radius: 6px;
  background: var(--backColor2);
  color: #fff;
}

.active-nav {
  width: 100%;
  border-radius: 6px;
  background: var(--backColor2);
  color: #fff;
  font-weight: bold;
}

.searchBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.searchBox .search {
  width: 72%;
  height: 100%;
  position: relative;
}

.vertical-nav nav a span {
  margin: 0.91rem 0 0.1rem 0.8rem;
  text-align: left;
}

.nav-hidden {
  height: 0px;
  /* 设置容器的高度 */
  overflow: hidden;
}

.nav-show {
  height: auto;
  transition: all 0.5s;
  /* 设置容器的高度 */
  overflow: hidden;

}

@media (min-width: 1024px) {
  .lg\:hidden {
    display: none;
  }

  .icon-size {
    width: 0.40rem;
    height: 0.40rem;
  }

}



@media (min-width: 1024px) {
  .lg\:block {
    //display: block !important;
  }
}

.Mobile {
  position: fixed;
  left: 0px;
  z-index: 99999;
  background-color: #001880;
  height: 100%;
  width: 35% !important;
  top: 0;
}

.Mobile nav a[data-v-433a9abd] {
  line-height: 20px !important;
  padding: 5px;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明遮罩 */
  z-index: 20000;
  /* 确保遮罩层在其他内容之上 */
}

@media (max-width: 768px) {
  .wrap {
    padding-top: 50px !important;
  }
}

@media (max-width: 1024px) {
  .vertical-nav3 {
    width: 100% !important;
  }

  .bot .right {
    width: 20%;
  }

  .hidden {
    display: none;
  }

  .Mobile {
    display: block;
  }

  .vertical-nav nav a span {
    font-size: 0.5rem;
    display: block;
    margin: 0rem 0 0.1rem 0.8rem;
  }

  .Mobile nav a {
    padding: 0 !important;
  }

  .Mobile {
    width: 40% !important;
    overflow-y: scroll;
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
  }

  .vertical-nav p span {
    max-width: 100%;
  }

  .vertical-nav p {
    min-height: 3rem;
    font-size: 0.7rem !important;
  }
}
</style>