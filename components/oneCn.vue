<!-- components/FixedContent.vue -->
<template>
  <div v-if="counter.isShowNav" style="overflow: hidden">
    <div class="header" id="nav">
      <div class="item">
     
          <img class="logo" src="/public/images/logo.webp" alt="" @click="refreshPage">

      </div>
      <div class="menu item" id="btnMenu" @click="showMenu">
        菜单
      </div>
      <div class="lanu item">
        <div></div>
        <div class="change" @click="changeLanu()">
          <a class="en" >
            EN
          </a>
          <a class="cn" >
            CN
          </a>
        </div>

      </div>
    </div>
    <header class="menuNav" id="menuNav" ref="menuNav">
      <div class="header">
        <div class="item">
          <NuxtLink to="">
            <img class="logo" src="/public/images/logo.webp" alt="">
          </NuxtLink>
        </div>
        <div class="menu item" id="hiddenMenu" @click="hiddenMenu">
          返回
        </div>
        <div class="lanu item">
          <div></div>
          <div class="change">
            <a href="/" class="en" >
              EN
            </a>
            <a href="" class="cn" >
              CN
            </a>
          </div>

        </div>
      </div>
      <div class="main" ref="menuMain">

        <div class="top">
            <NuxtLink @click="navigate('/AboutSeinfel/Introduction')" class="about item">
              <div class="rightBor">
                <div class="borr" ref="rightBor1"></div>
              </div>
              <div class="bottomBor">
                <div class="borr" ref="bottomBor1"></div>
              </div>
              <div class="bgi">
                <p class="bgiTxt">
                  关于歆弗
                </p>
                <img src="/public/images/index/menu1.webp" alt="">
              </div>

            </NuxtLink>
          <NuxtLink @click="go()" class="product item">
            <div class="rightBor">
              <div class="borr" ref="rightBor2"></div>
            </div>
            <div class="bottomBor">
              <div class="borr" ref="bottomBor2"></div>
            </div>
            <div class="bgi">
              <p class="bgiTxt">
                产品
              </p>
              <img src="/public/images/index/menu2.webp" alt="">
            </div>
          </NuxtLink>
          <NuxtLink @click="navigate('/applicationareas')" class="applicationareas item">
            <div class="bottomBor">
              <div class="borr" ref="bottomBor3"></div>
            </div>
            <div class="bgi">
              <p class="bgiTxt">
                应用领域
              </p>
              <img src="/public/images/index/menu3.webp" alt="">
            </div>
          </NuxtLink>
        </div>
        <div class="bottom item">
          <NuxtLink @click="navigate('/life/Planning')" class="FullLifecycle item">
            <div class="rightBor">
              <div class="borr" ref="rightBor4"></div>
            </div>
            <div class="bgi">
              <p class="bgiTxt">
                全生命周期<br>解决方案
              </p>
              <img src="/public/images/index/menu4.webp" alt="">
            </div>
          </NuxtLink>
          <NuxtLink  @click="navigate('/contact')"  class="Contact item">
            <div class="bgi">
              <p class="bgiTxt">
                联系我们
              </p>
              <img src="/public/images/index/menu4.webp" alt="">
            </div>
          </NuxtLink>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
//导航栏
import { ref } from "vue";
import { useNuxtStore } from '~/composables/store.js'
const counter = useNuxtStore()
const route = useRoute();
const router = useRouter();

let menuNav = ref(null)
let rightBor1 = ref(null)
let bottomBor1 = ref(null)
let rightBor2 = ref(null)
let bottomBor2 = ref(null)
let bottomBor3 = ref(null)
let rightBor4 = ref(null)
let menuTxtTime = ref(null)
let menuMain = ref(null)


function showMenu() {
  clearTimeout(menuTxtTime)
  menuNav.value.style.opacity = "1"
  menuNav.value.style.zIndex = "99999"
  menuNav.value.style.pointerEvents = 'auto';
  rightBor1.value.style.animation = "top-bot-top 1.8s ease forwards"
  bottomBor1.value.style.animation = "top-left-right 1.8s ease forwards"
  rightBor2.value.style.animation = "top-bot-top 1.8s ease forwards"
  bottomBor2.value.style.animation = "top-left-right 1.8s ease forwards"
  bottomBor3.value.style.animation = "top-left-right 1.8s ease forwards"
  rightBor4.value.style.animation = "top-bot-top 1.8s ease forwards"
  let bgiTxtArr = menuMain.value.getElementsByClassName('bgiTxt');
  menuTxtTime = setTimeout(() => {
    for (let i = 0; i < bgiTxtArr.length; i++) {
      bgiTxtArr[i].style.opacity = '1'
    }
  }, 1500)
  document.body.style.overflow = 'hidden';
}

let go= async ()=>{
  hiddenMenu()
//  router.push({ path: '/', query: { new:true}})
  await navigateTo({
    path: '/',
    query: {
      new:true
    }
  })
  if(route.path === '/'){
    window.location.reload()
  }
}

function hiddenMenu() {
  clearTimeout(menuTxtTime)
  menuNav.value.style.opacity = "0"
  menuNav.value.style.zIndex = "-100"
  menuNav.value.style.pointerEvents = 'none';
  rightBor1.value.style.animation = ""
  bottomBor1.value.style.animation = ""
  rightBor2.value.style.animation = ""
  bottomBor2.value.style.animation = ""
  bottomBor3.value.style.animation = ""
  rightBor4.value.style.animation = ""
  let bgiTxtArr = menuMain.value.getElementsByClassName('bgiTxt');
  for (let i = 0; i < bgiTxtArr.length; i++) {
    bgiTxtArr[i].style.opacity = '0'
  }
  document.body.style.overflow = '';
}
function navigate(path){
  hiddenMenu()
  router.push({ path})  
}

let refreshPage=function () {
  window.location.href='/'
}

let changeLanu = async function () {
  window.location.href = 'https://www.seinfel.com';
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.285rem 0.85rem;
  align-items: center;
  color: white;
  z-index: 10000;
  font-family: AlibabaPuHuiTi2-45-Light;
  height: 1.13rem;

}

.header .item {
  width: 1.63rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.header .logo {
  display: block;
  width: 100%;
  height: 100%;

}

.header .item .logo {
  width: 100%;
  display: block;
  object-fit: cover;
}

.header .menu {
  font-size: 0.26rem;
}

.header .lanu {
  font-size: 0.15rem;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.header .lanu div {
  width: 20%;
  text-align: right;
  position: relative;
  height: 100%;
  line-height: 1;
  padding-top: 12%;
}

.header .lanu .change {
  position: relative;
}

.menuNav {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--backColor);
  opacity: 0;
  transition: all 0.3s;
  pointer-events: none;
  padding-top: 1.13rem;

}

.menuNav .main {
  width: 100%;
  height: 80vh;
  position: absolute;
  left: 0;
  top: 1.2rem;

}

.menuNav .main .top {
  border-top: 1px solid #ffffff;
}

.menuNav .main .bottom {
  border-bottom: 1px solid #ffffff;
}

.menuNav .main .top,
.menuNav .main .bottom {
  display: flex;
}

.menuNav .main .top .item,
.menuNav .main .bottom .item {
  position: relative;
  padding: 15px;
  overflow: hidden;
  display: block;
}


.menuNav .main .top .item .bgi,
.menuNav .main .bottom .item .bgi {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;

  position: relative;
}

.menuNav .main .top .item .bgi img,
.menuNav .main .bottom .item .bgi img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: all 0.5s;
}

.menuNav .main .top .item .bgi:hover img,
.menuNav .main .bottom .item .bgi:hover img {
  opacity: 1;
}

.menuNav .main .top .item .bgi:hover p,
.menuNav .main .bottom .item .bgi:hover p {
  opacity: 0 !important;

}

.menuNav .main .top .item p,
.menuNav .main .bottom .item p {
  position: absolute;
  color: white;
  z-index: 10;
  font-size: 0.8rem;
  font-family: AlibabaPuHuiTi2;
  opacity: 0;
  transition: all 0.5s;
  line-height: 0.9rem;
}

.menuNav .main .about p {
  top: 0;
  right: 0;
  text-align: right;
}

.menuNav .main .about .bottomBor {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 1px;
  width: 96%;
  overflow: hidden;
}

.menuNav .main .about .bottomBor .borr {
  /* -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-left-right 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  right: 0;
  height: 100%;
}

.menuNav .main .about .rightBor {
  position: absolute;
  content: "";
  right: 0;
  top: 17px;
  height: 92%;
  width: 1px;
  overflow: hidden;

}

.menuNav .main .about .rightBor .borr {
  /* -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-bot-top 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.menuNav .main .about {
  width: 4.45rem;
  height: 4.3rem;

}

.menuNav .main .product {
  width: 7.97rem;
  height: 4.3rem;

}

.menuNav .main .product p {
  left: 0;
  bottom: 0;
}

.menuNav .main .product .bottomBor {
  position: absolute;
  content: "";
  left: 0.15rem;
  bottom: 0;
  height: 1px;
  width: 96%;
  overflow: hidden;
}

.menuNav .main .product .bottomBor .borr {
  /* -webkit-mask-image: linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-left-right 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  left: 0;
  height: 100%;
}

.menuNav .main .product .rightBor {
  position: absolute;
  content: "";
  right: 0;
  top: 17px;
  height: 92%;
  width: 1px;
  overflow: hidden;

}

.menuNav .main .product .rightBor .borr {
  /* -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-bot-top 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.menuNav .main .applicationareas {
  width: 6.78rem;
  height: 4.3rem;

}

.menuNav .main .applicationareas p {
  top: 0;
  left: 0;
  text-align: left;
}

.menuNav .main .applicationareas .bottomBor {
  position: absolute;
  content: "";
  left: 0.17rem;
  bottom: 0;
  height: 1px;
  width: 100%;

  overflow: hidden;
}

.menuNav .main .applicationareas .bottomBor .borr {
  /* -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-left-right 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  right: 0;
  height: 100%;
}

.menuNav .main .FullLifecycle {
  width: 11rem;
  height: 2.7rem;

}

.menuNav .main .FullLifecycle p {
  bottom: -0.1rem;
  right: 0;
  text-align: right;

}

.menuNav .main .FullLifecycle .rightBor {
  position: absolute;
  content: "";
  right: 0;
  top: 17px;
  height: 86%;
  width: 1px;
  overflow: hidden;
}

.menuNav .main .FullLifecycle .rightBor .borr {
  /* -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  mask-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%); */
  /*animation: top-bot-top 8s ease forwards;*/
  background: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.menuNav .main .Contact {
  width: 8.20rem;
  height: 2.7rem;

}

.menuNav .main .Contact p {
  right: 0;
  top: -0.1rem;
  text-align: right;
  margin-right: 0.5rem;
}

.menuNav .main .navMenuBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 768px) {

  .menuNav .main .top .item,
  .menuNav .main .bottom .item {
    padding: 0 15px;
  }

  .menuNav .main {
    overflow-y: scroll;
  }

  .header {
    padding-top: 0.3rem;
    height: auto;
  }

  .header .item {
    width: 80px;
  }

  .header .item .logo {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .header .menu {
    font-size: 15px;
  }

  .menuNav .main {

    top: 80px;
  }

  .header .lanu a {
    font-size: 12px;
  }

  .menuNav .main .top,
  .menuNav .main .bottom {
    flex-wrap: wrap;

    border: none;
  }

  .menuNav .main .top div,
  .menuNav .main .bottom div {
    margin: 1px 0;
    padding: 2px;
  }

  .menuNav .main .about {
    width: 100%;
    height: 180px;

  }

  .menuNav .main .product {
    width: 100%;
    height: 180px;
    margin: 10px 0;
  }

  .menuNav .main .applicationareas {
    width: calc(100% - 6px);
    height: 180px;

  }

  .menuNav .main .FullLifecycle {
    width: calc(100% - 6px);
    height: 180px;
    margin: 10px 0;
  }

  .menuNav .main .Contact {
    width: calc(100% - 6px);
    height: 180px;

  }

  .menuNav .main .about .rightBor,
  .menuNav .main .product .rightBor,
  .menuNav .main .FullLifecycle .rightBor {
    display: none;
  }

  .menuNav .main .about .bottomBor,
  .menuNav .main .product .bottomBor,
  .menuNav .main .applicationareas .bottomBor {
    display: none;
  }

  .menuNav .main .top .item .bgi img,
  .menuNav .main .bottom .item .bgi img {
    opacity: 1;
  }

  .menuNav .main .top .item .bgi p,
  .menuNav .main .bottom .item .bgi p {
    text-align: center;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 10, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    opacity: 1;
  }
}

@media (min-width: 1920px) {
  .menuNav .main .about {
    height: 4.3rem;
  }

  .menuNav .main .product {
    height: 4.3rem;
  }

  .menuNav .main .applicationareas {
    height: 4.3rem;
  }

  .menuNav .main .FullLifecycle {
    height: 2.72rem;
  }

  .menuNav .main .Contact {
    height: 2.72rem;
  }

}
</style>