<script setup>

const counter = useNuxtStore()
import { fa } from 'element-plus/es/locales.mjs';
import { ref, onMounted, onUnmounted } from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();
import {add} from "~/utils/bor.js";
definePageMeta({
  layout: false
})
//导航栏
let isMouseDown = ref(false)
let menuNav = ref(null)
let rightBor1 = ref(null)
let bottomBor1 = ref(null)
let rightBor2 = ref(null)
let bottomBor2 = ref(null)
let bottomBor3 = ref(null)
let rightBor4 = ref(null)
let menuTxtTime = ref(null)
let menuMain = ref(null)
let navbar = ref(null)

//显示详细信息
let itemnv = ref(null)
let dlogBox = ref(null)
let itemnvs = ref([])
let dlogs = ref([])
let index = ref(0)

//显示导航
function showMenu() {
    clearTimeout(menuTxtTime)
    menuNav.value.style.opacity = "1"
    menuNav.value.style.zIndex = "99999"
    menuNav.value.style.pointerEvents = 'auto';
    rightBor1.value.style.animation = "top-bot-top 3s ease forwards"
    bottomBor1.value.style.animation = "top-left-right 3s ease forwards"
    rightBor2.value.style.animation = "top-bot-top 3s ease forwards"
    bottomBor2.value.style.animation = "top-left-right 3s ease forwards"
    bottomBor3.value.style.animation = "top-left-right 3s ease forwards"
    rightBor4.value.style.animation = "top-bot-top 3s ease forwards"
    let bgiTxtArr = menuMain.value.getElementsByClassName('bgiTxt');
    menuTxtTime = setTimeout(() => {
        for (let i = 0; i < bgiTxtArr.length; i++) {
            bgiTxtArr[i].style.opacity = '1'
        }
    }, 1200)
}
//隐藏导航
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
}

function hiddenDlogBox() {

    hiddenDlog()
}

function go(url){
  router.push(url)
}
function showDlog(num) {
    index.value = num
    dlogs[num].style.visibility = "visible"
    dlogBox.value.style.visibility = "visible"
}

function hiddenDlog(num) {
    dlogs[index.value].style.visibility = "hidden"
    dlogBox.value.style.visibility = "hidden"
}
onMounted(() => {
  add()
    itemnvs = itemnv.value.getElementsByClassName('itemnv')
    dlogs = dlogBox.value.getElementsByClassName('dlog')
    for (let i = 0; i < itemnvs.length; i++) {
        itemnvs[i].onclick = function () {
            showDlog(i)
        }
    }
    for (let i = 0; i < dlogs.length; i++) {
        dlogs[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }


})
</script>

<template>
    <div>
      <oneCn></oneCn>
        <main>
            <div class="top">
              <div class="oneRow">
                <bor class="appBor1" />
                <div class="left">
                  <p>
                    应用领域
                  </p>

                </div>
                <div class="right">

                </div>
              </div>
            </div>
            <div class="bottom" ref="itemnv">
                <div class="one item itemnv" >
                    <p>
                      家电领域
                    </p>
                    <div class="zhezhao"></div>
                </div>
                <div class="two item itemnv">
                    <p>
                      建筑通风
                    </p>
                    <div class="zhezhao"></div>
                </div>
                <div class="three item itemnv" >
                    <p>
                      洁净室<br>过滤
                    </p>
                    <div class="zhezhao"></div>
                </div>
                <div class="four item itemnv" >
                    <p>
                      汽车过滤
                    </p>
                    <div class="zhezhao"></div>
                </div>
                <div class="five item itemnv">
                    <p>
                      100%替塑内<br>包装
                    </p>
                    <div class="zhezhao"></div>
                </div>

            </div>
            <div class="dlogBox" ref="dlogBox" @click="hiddenDlogBox()">
                <div id="one" class="dlog">
                    <div class="txt item">
                        <p>
                          朝晖是全球范围内最大的家电配件供应商之一。我们生产的空气过滤、加湿、集尘及内包装产品适用于吸尘器、扫地机器人、空气净化器、加湿器等多种家电。我们与众多

                        </p>
                    </div>
                    <div class="two item" @click="go('/PRODUCTS/FloorCare/Paper')">
                        <div class="tip">
                            <p>地面清洁</p>
                            <img  src="/public/images/jiantou.webp" alt="arrows" class="jiantou">
                        </div>
                        <img src="/public/images/application/6.webp" alt="application" class="pic">
                    </div>
                    <div class="three item"  @click="go('/PRODUCTS/AirPuri/Dust')">
                        <div class="tip">
                            <p>空气净化</p>
                            <img  src="/public/images/jiantou.webp" alt="arrows" class="jiantou">
                        </div>
                        <img src="/public/images/application/7.webp" alt="application" class="pic">
                    </div>
                </div>
                <div id="two" class="dlog">
                    <div class="txt item one" >
                      我们研发并制造初效过滤器、袋式过滤器、V-bank过滤器、HEPA过滤器、FFU、HEPA BOX等产品，这些产品广泛应用于家庭、商业、工业等建筑空间的通风系统中。
                    </div>
                    <div class="two item" @click="go('/PRODUCTS/Commercial/pre')">
                        <div class="tip">
                            <p>商业和工业空气过滤

                            </p>
                          <img src="/public/images/jiantou.webp" alt="" class="jiantou" style="margin-top: 0.3rem">
                        </div>
                        <img src="/public/images/application/8.webp" alt="application" class="pic">
                    </div>
                    <div class="three item" @click="go('/PRODUCTS/AirPuri/Dust')">
                        <div class="tip">
                            <p>空气净化</p>
                            <img src="/public/images/jiantou.webp" alt="arrows" class="jiantou">
                        </div>
                        <img src="/public/images/application/7.webp" alt="application" class="pic">
                    </div>
                </div>
                <div id="three" class="dlog">
                    <div class="txt item one">
                      我们生产的初效过滤器、Pocket filter、V-bank过滤器、HEPA过滤器、FFU、HEPA BOX等产品，适用于不同过滤等级的洁净室需求。这些产品能有效控制室内环境中的微粒子浓度，确保达到预设的洁净度水平，满足特定需求的各类领域。
                    </div>
                    <div class="two item" style="cursor: default">
                        <div class="tip" style="cursor: pointer" @click="go('/PRODUCTS/Commercial/pre')">
                            <p>商业和工业空气过滤

                            </p>
                          <img src="/public/images/jiantou.webp" alt="arrows" class="jiantou" style="margin-top: 0.3rem">
                        </div>

                    </div>
                    <div class="three item">

                        <img src="/public/images/application/9.webp" alt="application" class="pic">
                    </div>
                </div>
                <div id="four" class="dlog">
                    <div class="one item" @click="go('/PRODUCTS/Automotive/Product')">
                        <div class="tip">
                            <p>汽车过滤</p>
                            <img src="/public/images/jiantou.webp" alt="arrows" class="jiantou">
                        </div>
                        <img src="/public/images/application/10.webp" alt="application" class="pic">
                    </div>
                    <div class="txt item">
                        <p>
                          车内空气质量和发动机的使用寿命与过滤器的性能密切相关。我们研发并制造的空气滤清器、空调滤清器、环保纸芯机油滤等产品已销往美国、英国、意大利、韩国、日本、法国等全球各地。

                        </p>
                    </div>
                </div>
                <div id="five" class="dlog">
                    <div class="txt item one">
                      Seinfel环保包装袋采用100%可降解木浆纤维制成，经过压光等特殊工艺处理，<br>可作为不同产品内包装的塑料替代品，适用于3C电子、小家电、五金工具、<br>服饰等。
                    </div>
                    <div class="box" @click="go('/PRODUCTS/EcoFriendly/Product')">
                        <div class="two item" >
                            <div class="tip">
                                <p>环保替塑包装袋
                                </p>
                                <img src="/public/images/jiantou.webp" alt="arrows" class="jiantou">
                            </div>

                        </div>
                        <div class="three item">

                            <img src="/public/images/application/11.webp" alt="application" class="pic">
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style scoped>
p,.txt{
  text-align: justify;
}
.appBor1 {
 left: 50%;
}
main {
    background-color: var(--backColor);
    background-image: url("/public/images/index/banner7.webp");
    background-size: cover;
    padding-top: 1.13rem;
    min-height: 100vh !important;
    overflow: hidden;
}

main .top {
    width: 100%;
    height: 2rem;
    position: relative;
}

main .top .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

main .top h1 {
    font-family: AlibabaPuHuiTi2-45-Light;
    font-size: 1rem;
    color: white;
    position: absolute;
    bottom: 0.14rem;
    left: 25%;
    transform: translateX(-50%);
}

main .bottom {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem;
    margin-top: 0.2rem;
}

main .bottom .item {

    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    overflow: hidden;
    cursor: pointer;
    position: relative;
}

main .bottom .item .zhezhao {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255);
    opacity: 0;
    transition: all 0.3s;

}

main .bottom .item p {
    font-size: 0.5rem;
    font-family: AlibabaPuHuiTi2;
    color: white;
    position: absolute;
    z-index: 10;
    transition: all 0.3s;
}

main .bottom .item:hover p {
    color: #0e47e3;
}

main .bottom .item:hover .zhezhao {
    opacity: 0.5;
}

main .bottom .one {
    width:30%;
    height: 2.49rem;
    background-image: url("/public/images/application/1.webp");
    background-size: cover;
}

main .bottom .one p {
    right: 0.2rem;
    top: 0.1rem;
    text-align: right;
}

main .bottom .two {
    width: 69.6%;
    height: 2.49rem;
    background-image: url("/public/images/application/2.webp");
    background-size: cover;
}

main .bottom .two p {
    left: 0.2rem;
    bottom: 0.1rem;
    text-align: left;
}

main .bottom .three {
  width: 21%;
    height: 4.06rem;
    background-image: url("/public/images/application/3.webp");
    background-size: cover;
}

main .bottom .three p {
    right: 0.2rem;
    bottom: 0.1rem;
    text-align: right;
    line-height: 0.55rem;
}

main .bottom .four {
  width: 48%;
    height: 4.06rem;
    background-image: url("/public/images/application/4.webp");
    background-size: cover;
}

main .bottom .four p {
    right: 0.2rem;
    top: 0.1rem;
    text-align: left;
}

main .bottom .five {
  width: 30%;
    height: 4.06rem;
    background-image: url("/public/images/application/5.webp");
    background-size: cover;
}

main .bottom .five p {
    left: 0.2rem;
    bottom: 0.1rem;
    text-align: left;
  line-height: 0.55rem;
}

main .dlogBox {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(36, 72, 171, 0.5);
    z-index: 100;
    visibility: hidden;
    z-index: 20000;
}

main .dlogBox .dlog {
    width: 18.6rem;
    height: 6.4rem;
    background-color: var(--backColor2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    border-radius: 0.15rem;
    padding: 0.15rem;
    visibility: hidden;

}

main .dlogBox .dlog .item {
    border-radius: 0.1rem;
}

main .dlogBox .txt {

    background: var(--backColor);
    padding: 0.2rem;
    font-family: AlibabaPuHuiTi2-45-Light;
    font-size: 0.25rem;
    color: white;
    line-height: 0.4rem;
}

main .dlogBox #one .txt {
    width: 6rem;
    height: 5.22rem;
}

main .dlogBox #one .two {
    width: 5.42rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

main .dlogBox #one .two .pic {
    width: 100%;
    display: block;
    height: 5.21rem;
}

main .dlogBox #one .three {
    width: 6.58rem;
    height: 4.34rem;
    margin-top: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

main .dlogBox .tip {
    width: 100%;
    border-radius: 0.1rem;
    background: var(--backColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.28rem;
  height: 0.73rem;
}

main .dlogBox .tip p {
    font-family: AlibabaPuHuiTi2;
    font-size: 0.5rem;
    color: white;
}

main .dlogBox .jiantou {
    width: 0.5rem;
    height: 0.41rem;
}

main .dlogBox #one .three .pic {

    width: 100%;
    display: block;
    height: 3.46rem;

}

main .dlogBox #two .one {
    width: 5.5rem !important;
    height: 4.34rem;
    margin-top: 1.71rem;
}

main .dlogBox #two .two {
    width: 5.92rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}
main .dlogBox #two .two .tip{
  height: 1.61rem;
  align-items: start;
}
main .dlogBox #two .two .tip p {

    padding: 0.2rem 0;
    display: block;
}

main .dlogBox #two .two .tip .jiantou {

    margin-left: 0.2rem;
}

main .dlogBox #two .two .pic {
    width: 100%;
    height: 4.34rem;
    display: block;
}

main .dlogBox #two .three {
    margin-top: 0.87rem;
    width: 6.56rem;
    height: 4.34rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

main .dlogBox #two .three .pic {
    width: 100%;
    height: 3.46rem;
}

main .dlogBox #three .one {
    width: 5.5rem;
    height: 4.34rem;
    margin-top: 1.71rem;
    font-size: 0.25rem !important;
}

main .dlogBox #three .two {
    width: 5.92rem;
    height: 100%;
    cursor: pointer;
}
main .dlogBox #three .two .tip{
  height: 1.61rem;
  align-items: start;
}
main .dlogBox #three .two .tip p {
    font-size: 0.46rem !important;
    padding: 0.2rem 0;
    display: block;
}

main .dlogBox #three .two .tip .jiantou {
    margin-left: 0.2rem;
}

main .dlogBox #three .three {
    width: 6.58rem;
    height: 4.34rem;
    margin-top: 1.71rem !important;
}

main .dlogBox #three .three img {
    width: 100%;
    height: 100%;
}

main .dlogBox #four .one {
    width: 9.41rem;
    height: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

main .dlogBox #four .one .pic {
    width: 100%;
    height: 2.52rem;
}

main .dlogBox #four .txt {
    width: 8.74rem;
    height: 2.51rem;
    margin-top: 3.6rem;
}

main .dlogBox #five {
    flex-direction: column !important;
}

main .dlogBox #five .txt {
    width: 9.30rem;
    height: 2.32rem;
}

main .dlogBox #five .box {
    display: flex;
    width: 12.77rem;
    height: 3.62rem;
    margin-left: 5.64rem;
    justify-content: space-between;
    cursor: pointer;
}

main .dlogBox #five .box .two {
    width: 5.42rem;
    height: 1.61rem;
}

main .dlogBox #five .box .two .tip {
    width: 100% !important;
    height: 100% !important;
    align-items: flex-start;
    padding-top: 0.1rem;
}

main .dlogBox #five .box .two .tip .jiantou {
    margin-top: 0.15rem;
}

main .dlogBox #five .box .three {
    width: 7.2rem;
    height: 3.62rem;
}

main .dlogBox #five .box .three img {
    width: 100%;
    height: 100%;
}
.oneRow {
  height: 2.2rem;
  width: 100%;
  position: relative;
  border-top: 1px solid white;
  display: flex;
}

.oneRow .left {
  width: 9.6rem;
  position: relative;
}
.oneRow .left p{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 1.05rem;
  line-height: 1.26rem;
  color: white;
  margin: 0.75rem  0 0.1rem 0.7rem;
  text-align: left;
}

.oneRow .right {
 flex: 1;
}


@media (max-width: 768px) {

  main .bottom{
    padding: 15px;
  }
    main .bottom .one,
    main .bottom .two,
    main .bottom .four,
    main .bottom .three {
        width: 48%;
        height: 150px;
        margin-bottom: 15px;

    }

    main .bottom .five {
        width: 100%;
        height: 150px;
        margin-bottom: 15px;

    }

    main .bottom .one p,
    main .bottom .two p,
    main .bottom .four p,
    main .bottom .three p,
    main .bottom .five p {
        font-size: 0.8rem !important;
    }

    main {
        padding-top: 60px;
    }

    main .bottom {
        padding-top: 0.3rem;
    }


  main .dlogBox .dlog{
    flex-direction: column;
    align-items: center;
    height: auto;


    padding: 0.4rem;
  }
  main .dlogBox #one,  main .dlogBox #two{
    display: block;
  }
  main .dlogBox #one .txt {
    width: 8.5rem !important;
    font-size: 0.3rem;
    line-height: 0.45rem;
  }

  main .dlogBox #one .two {
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
  }
  main .dlogBox #one .two .tip {
    width: 8.5rem;
  }
  main .dlogBox #one .two .pic{
    width: 49%;
    height: auto;
  }

  main .dlogBox #one .three{
    display: block;
    width: 100%;
    margin: 0;
  }
  main .dlogBox #one .three .tip{
    float: right;
    width: 49%;
  }
  main .dlogBox #one .three .pic{
    float: left;
    width: 8.5rem;
    height: auto;
  }

  main .dlogBox .txt {
    height: auto !important;
    margin: 0 !important;
  }
  main .dlogBox #two .one{
    width: 8.5rem !important;
    font-size: 0.3rem;
    line-height: 0.45rem;
  }

  main .dlogBox #two .three{
    display: block;
    width: 100%;
    margin: 0;
  }
  main .dlogBox #two .three .tip{
    float: right;
    width: 49%;
  }
  main .dlogBox #two .three .pic{
    float: left;
    width: 8.5rem;
    height: auto;
  }
  main .dlogBox #two .two .tip .jiantou{
    float: right;

  }
  main .dlogBox #two .two {
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
  }
  main .dlogBox #two .two .tip {
    width: 8.5rem;
  }
  main .dlogBox #two .two .pic{
    width: 49%;
    height: auto;
  }

  main .dlogBox #three .one{
    width: 7.5rem !important;
    font-size: 0.3rem !important;
    line-height: 0.45rem;
  }
  main .dlogBox #three .three{
    margin-top: 0 !important;
  }
  main .dlogBox #three .two{
    margin: 0.5rem 0 0.2rem 0;
    width: 6.58rem !important;
  }
  main .dlogBox #four .txt{
    width: 9.41rem !important;
    font-size: 0.3rem !important;
    line-height: 0.45rem;
    margin-top: 0.5rem !important;
  }
  main .dlogBox #five .txt {
    width: auto !important;
    font-size: 0.3rem !important;
    line-height: 0.45rem;
    margin-bottom: 0.5rem !important;
  }
}
</style>