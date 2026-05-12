<script setup lang="ts">

</script>

<template>
<div class="mainBox">
  <vertical-nav2 :menuList="menuList"></vertical-nav2>
  <div class="aaa">
    <div class="item">
      <div class="top">
        <h4>
          APPLOCAZIONE
        </h4>
        <img src="/public/images/products/70.webp" alt="products">
      </div>
      <div class="bot">
        <NuxtLink to="/" class="box">
          <h4>
            Air Filter
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            Cabin Filter
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            Modello
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
      </div>
    </div>
    <div class="item">
      <div class="top">
        <h4>
          SEARCH SEINFEL
        </h4>

      </div>
      <div class="two">
        <input type="text">
        <img src="/public/images/products/search.webp" alt="products">
      </div>
    </div>
    <div class="item">
      <div class="top">
        <h4>
          CROSS OEM
        </h4>

      </div>
      <div class="two">
        <input type="text">
        <img src="/public/images/products/search.webp" alt="products">
      </div>
    </div>
    <div class="item">
      <div class="top">
        <h4>
          KIT FILTRAZIONE
        </h4>

      </div>
      <div class="bot threeBot">
        <NuxtLink to="/" class="box">
          <h4>
            AIR FILTERORE
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            CABIN FILTER
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            ENVIRONMENTALLY
            FRIENDLY PAPER CORE
            OLE FILTER
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            Modello
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
      </div>
    </div>
    <div class="item">
      <div class="top">
        <h4>
          YEAR
        </h4>
      </div>
      <div class="bot">
        <NuxtLink to="/" class="box">
          <h4>
            2024
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            2023
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
        <NuxtLink to="/" class="box">
          <h4>
            2022
          </h4>
          <img src="/public/images/products/jiantou2.webp" alt="search">
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
p{
  line-height: 0.5rem;
}
.mainBox{
  width: 100%;

  height: calc(100% - 0.15rem);
  position: relative;
 display: flex;
}
.aaa{
  flex: 1;
  height: 100%;
  border-left: 1px solid white;
  padding: 1.2rem 0 0 0.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item{
  width: 10.2rem;
  padding: 0.38rem 0.58rem;
  background: var(--backColor2);
  border-radius: 0.1rem;
  color: white;
margin-bottom: 0.5rem;
}
.item .top{
  font-size: 0.4rem;
  font-family: AlibabaPuHuiTi2-45-Light !important;
  width: 100%;
  display: flex;
  align-items: center;
}
.item .top h4{
  margin-right: 0.5rem;
}
.item .top img{
  width: 2.33rem;
  height: 0.3rem;
}
.bot{
  width: 100%;
  margin-top: 0.17rem;
  display: flex;
  justify-content: space-between;
}
.threeBot .box{
  width: 2.09rem !important;
}
.threeBot .box:nth-child(3){
  font-size: 0.15rem !important;
  line-height: 0.15rem;

}
.bot .box{
  width: 2.86rem;
  height: 0.5rem;
  background-color: #fff;
  border-radius: 0.1rem ;
  display: flex;
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.2rem !important;
  padding: 0.05rem 0.1rem;
  color: var(--backColor2);
  justify-content: space-between;
  align-items: center;

}
.bot .box img{
  width: 0.28rem;
  height: 0.28rem;

}
.two{
  width: 100%;
  display: flex;
  justify-content: right;
  position: relative;
  margin-top: 0.17rem;
}
.two img{
  width: 0.91rem;
  height: 0.28rem;
  position: absolute;
  top: 50%;
  right: 0.2rem;
  transform: translateY(-50%);
  cursor: pointer;
}
.two input{
  width: 5.79rem;
  height: 0.51rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
  font-size: 0.2rem;
  padding: 0 1.3rem 0 0.15rem;
}
@media (max-width:1024px) {
  .item{
    width: 90% !important;
  }
  .bot .box{
    flex: 1;
    margin: 0 5px;
  }
  .threeBot{
    display: block;
  }
  .threeBot .box{
    width: 80% !important;
    margin-bottom: 5px;
 
  }
  .aaa{
    border: none;
  }
  .threeBot .box[data-v-bb369443]:nth-child(3){
    font-size: 0.2rem !important;
    line-height: 0.5rem;
  }
}
</style>