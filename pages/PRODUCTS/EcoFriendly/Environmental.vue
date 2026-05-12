<script setup lang="ts">

import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/53.webp',
        name:'AFS150_Automatic_Filter Scanning Test System'
      },
      {
        url:'/images/products/54.webp',
        name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
      },
      {
        url:'/images/products/55.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
      {
        url:'/images/products/56.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
      {
        url:'/images/products/57.webp',
        name:'AFS150_Automatic_Filter Scanning Test System'
      },
      {
        url:'/images/products/58.webp',
        name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
      },
      {
        url:'/images/products/59.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
      {
        url:'/images/products/60.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
    ],
    two:{
      infos:[
        {
          name:'Features:',
          txt:[
              '按照ISO 14855-1:2012检测标准和EN 13432-2000评价标准，产品已通过堆肥降解测试，还获得了国际FSC森林认证，对环境友好。纸张、棉线和水性环保粘合剂等产品的主料和辅料，均已通过国内外行业标准和环保检测，确保了专业性和安全性。同时，产品还成功通过了ISTA 运输测试，确保运输和储存过程中的安全性。'
          ]
        },
      ],
    },
  },

]
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div class="twoBox" >

          <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind">
            <div class="txt">
              <p v-for="(it,i) in ite.txt" :key="i">
                {{it}}
              </p>
            </div>
          </div>

        </div>
        <div class="list" >
          <div class="listItem" v-for="(item,index) in item.one" :key="index">
            <bor2 :class="{'active':(index+1) % 4==0,'oneBor2':true}"></bor2>
            <img :src="item.url" alt="products" v-if="item.url">
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="botto">
        <bor2 class="DustBor2"></bor2>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
  line-height: 0.5rem;
}
.botto{
  width: 100%;
  height:7rem;
  position: relative;
}
.mainBox{
  width: 100%;
display: flex;
  height: calc(100% - 0.15rem);
  position: relative;
  //border-left: 1px solid white;
}
.aaa{
  flex: 1;
}
.item{

  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  height: 100%;
}
.list .listItem{
  width: 25%;
  height: 4.05rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
}
.list .listItem img{
  width: 2.15rem;
  height: 3.15rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
.twoBox{
margin-bottom: 0.15rem;
  padding: 0.7rem 0 0.7rem 0.8rem;
  border-left: 1px solid white;
  position: relative;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
}

.twoBox h1{
  font-size: 0.4rem;
  text-align: center;
}
.item{
  width: 10.09rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}

.txt{
  font-size: 0.25rem;
  line-height: 0.4rem;
}


@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .twoBox{
    border: none;
  }

  .DustBor1 {
    display: none;
  }
  .list{
    position: static;
  }
}

@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .twoBox{
    display: flex;
    justify-content: center;
    align-items: center;
    scale: 1.5;
    margin: 1.5rem 0;
  }
  .botto{
    display: none;
  }

  .oneBor2 {
    display: none;
  }

}
</style>