<script setup lang="ts">

import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/64.webp',
        name:'AFS150_Automatic_Filter Scanning Test System'
      },
      {
        url:'/images/products/65.webp',
        name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
      },
      {
        url:'/images/products/62.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
      {
        url:'/images/products/63.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
    ],
    two:{
      infos:[
        {
          name:'Features:',
          txt:[
              '产品广泛应用于3C电子产品、小家电、化妆品、玩具、汽配装饰件、电动工具、皮革制品、五金、酒类、陶瓷工艺品等的包装。sachets etc. '
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
         <img style="width:9.97rem;height: 8.42rem;margin: 0.5rem 0" src="/images/products/61cn.webp" alt="products">
       </div>
       <div class="list" >
         <div class="listItem" v-for="(item,index) in item.one" :key="index" >
           <bor2 :class="{'active':(index+1) % 4==0,'oneBor2':true}"></bor2>
           <img :src="item.url" alt="products" v-if="item.url" :style="{width:index===2 || index===3?'4.2rem':'',height:index===2 || index===3?'2.8rem':''}">
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
  height: 4.16rem;
  position: relative;
}
.mainBox{

  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;
  //border-left: 1px solid white;

}
.item{

  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}
.list .listItem{
  width: 50%;
  height: 3.76rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
}
.list .listItem img{
  width: 5rem;
  height: 2.4rem;
}
.aaa{
  flex: 1;
}
.twoBox{
  margin-bottom: 0.15rem;
  padding: 1rem 0 1rem 0.8rem;
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
    flex-direction: column;
  }

  .oneBor2 {
    display: none;
  }
  .item{
    scale: 1.5;
    margin: 1rem 0;
  }
  .botto{
    display: none;
  }
}
</style>