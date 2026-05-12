<script setup >

import {ref} from 'vue'
let info=ref([
  {
    name:[
      '特点:'
    ],
    txt:[
      '滤片，尘帽有各种形状和尺寸，采用各种介质设计，可在大颗粒物到达后置过滤器之前将其捕获（有些过滤器经过处理，可去除挥发性有机化合物和细菌），从而延长主过滤器的使用寿命，提高过滤性能，减少主过滤器的更换次数。可提供一次性和可清洗过滤器；',
      '抗菌，吸附，除臭，水洗，降噪等功能；',
      '拥有海绵，喷胶棉，百洁布，针刺棉，纺粘，水刺，热风，梯度棉，静电棉等不同材质；',
      '白色，黑色或根据客户要求定制；',
      '按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',

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
       <img src="/public/images/products/7.webp" alt="products">
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
  width: 85%;
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
  width: 10.12rem;
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
    margin-top: 2.4rem;
  }
}
</style>