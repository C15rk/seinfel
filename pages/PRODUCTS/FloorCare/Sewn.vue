<script setup >

import {ref} from 'vue'
let info=ref([
  {
    name:[
      '特点:'
    ],
    txt:[
      '抗菌、吸附、除臭、水洗反复使用等；',
      '具有白帆布、绒布、针织复合布、缝边布、空编布、针刺棉、SMS布等品类；',
      '白色、灰色、黑色等，可根据客户要求定制不同的颜色；',
      '按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。 ',
    ]
  },
  {
    name:[
      '应用:'
    ],
    txt:[
      '家用及商用手持式、桶式、卧式、立式、车载吸尘器，扫地机器人。'
    ]
  },
])
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
   <div class="aaa">
     <div class="box">
       <img src="/public/images/products/4.webp" alt="products">
       <bor class="paperOne"></bor>
     </div>
     <div class="bott">
       <div class="item" v-for="(item,index) in info" :key="index">
         <div class="title" v-for="(tit,id) in item.name" :key="id">
           <h2>
             {{tit}}
           </h2>
         </div>
         <div class="txt">
           <p v-for="(txt,i) in item.txt" :key="i">
             {{txt}}
           </p>
         </div>
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
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
  display: flex;
}
.aaa{
  flex: 1;
}
.box{
  height: 6.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.box img{
  width: 100%;
  height: auto;
}
.paperOne{

  left: -0.15rem;
  bottom: -0.3rem;
}
.bott{
  padding: 0.5rem 0 0 0.8rem;
  height: 11.5rem;
}
.item{
  width: 10.09rem;
  margin-top: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
.item h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}
.txt{
  font-size: 0.25rem;
  line-height: 0.4rem;
}
@media (max-width: 1024px){
  .box{
    border: none;
  }
  .bott{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box img{
    width: 50%;
  }
  .box img{
    width: 70%;
    margin-top: 2rem;
  }
  .item{
    scale: 1.5;
    margin-top: 1.6rem;
  }
}
</style>