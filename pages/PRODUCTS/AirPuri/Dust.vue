<script setup >
import {scrollToElement} from "~/utils/1.js";

import {ref} from 'vue'
let menuList=[
    {name:'初效滤网',url:'#Pre',id:'Pre'},
  {name:'高效滤网',url:'#High',id:'High'},
  {name:'可水洗过滤网',url:'#PTFE',id:'PTFE'}
]
let obj=ref([
  {
    one:[
      {
        url:'/images/products/15.webp',
        wid:'2.94rem',
        hei:'3.94rem',
        id:'Pre'
      },
      {
        url:'/images/products/16.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },
      {
        url:'/images/products/17.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },
    ],
    two:{
      title:'初效滤网',
      infos:[
        {
          name:'特点:',
          txt:[
            '选用海绵、喷胶棉、百洁布等材质，并可根据客户具体需求进行定制；',
            '可作为基材附着活性炭等吸附材料，并对其进行不同类型的催化处理，在满足初效过滤的同时达到去除甲醛、苯、氨气、TVOCs等的效果；',
            '可浸渍或者喷淋抗菌剂的功能化后处理方式，能够使材料具备抗菌防霉性能，防止过滤器上细菌的滋生和霉变；',
            "可根据客户要求，选材调整为可水洗重复利用。",
          ]
        },
        {
          name:'应用:',
          txt:[
            '家用、商用空气净化整机，通风系统。'
          ]
        }
      ],
    },

  },
  {
    one:[
      {
        url:'/images/products/18.webp',
        wid:'2.94rem',
        hei:'3.94rem',
        id:'High',
      },
      {
        url:'/images/products/19.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },

    ],
    two:{
      title:'高效滤网',

      infos:[
        {
          name:'特点:',
          txt:[
            '纤维细度在0.1-10μm，过滤效率最高可达99.97%；',
            '可进行抗菌防霉等功能性整理，防止细菌滋生；',
            '可根据客户具体需求定制。',

          ]
        },
        {
          name:'应用:',
          txt:[
            '家用、商用空气净化整机，通风系统。'
          ]
        }
      ],
    },

  },
  {
    one:[
      {
        url:'/images/products/20.webp',
        wid:'5.56rem',
        hei:'4.8rem',
        id:'PTFE',
      },
    ],
    two:{
      title:'可水洗过滤网',

      infos:[
        {
          name:'特点:',
          txt:[
            '利用PTFE的疏水特性，产品可清洗。材料清洗60次，效率下降缓慢；',
            '稳定的效率，能在特殊环境条件下使用，如：高温，高湿，臭氧环境等等。',
          ]
        },
        {
          name:'应用:',
          txt:[
            '用于新风及暖通行业，有效去除空气中的PM2.5颗粒；',
            '家用空气净化（无油烟环境）。'
          ]
        }
      ],
    },

  },
])
let route=useRoute()
onMounted(()=>{
  scrollToElement(route)
})
</script>

<template>
  <div class="mainBox">
   <vertical-nav2 :menuList="menuList"></vertical-nav2>
  <div class="aaa">
    <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
      <div style="position: relative;height: 5.3rem;width: 100%;">
        <div class="list" >
          <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
            <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
            <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :id="ite.id">
          </div>
        </div>
      </div>
      <div class="twoBox" >
        <div class="bor" ></div>
        <h1 :id="item.two.id">{{item.two.title}}</h1>
        <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind" :style="{marginBottom:ind===item.two.infos.length-1?'0':''}">
          <div class="title">
            <h2>
              {{ite.name}}
            </h2>
          </div>
          <div class="txt">
            <p v-for="(it,i) in ite.txt" :key="i">
              {{it}}
            </p>
          </div>
        </div>
        <h2 v-if="item.tip">
          {{item.tip.name}}
        </h2>
        <img :src="item.tip.url" alt="" class="img1" v-if="item.tip">
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
.vertical-nav2 {
  width: 2.2rem;
  padding: 0.33rem 0.19rem;
}
.vertical-nav2 .itemm{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  color: white;
  margin-bottom: 0.31rem;
  display: block;
}
.img{
  width: 100%;
  height: auto;
}
.botto{
  width: 100%;
  height: 2.3rem;
  position: relative;
}
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;

  flex: 1;
  justify-content: space-between;
}
.mainBox div:last-child{
  flex: 1;
}

.ma{
  margin-bottom: 0.15rem;
}
.item{
  margin-bottom: 0.5rem;
  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;

  left: 0;
  height: 100%;
}
.list .listItem{
  flex: 1;
  height: 100%;
  font-size: 0.2rem;
   display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
}
.list .listItem img{
  width: 3rem;
  height: 3rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
.twoBox{

  padding: 0.5rem 0 0.6rem 0.8rem;
 border-left: 1px solid white;
position: relative;
 font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
  margin-top: 0.15rem;
}
.twoBox .bor{
  bottom: -0.15rem;
  right: -0.15rem;
  width: calc(100%);
  height: 1px;
  background: white;
  position: absolute;
}
.twoBox h1{
  font-size: 0.4rem;
  text-align: center;
}
.item{
  width: 10.2rem;
  margin-top: 0.2rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}
.img1{
  width: 10rem;
  object-fit: cover;
  margin-top: 0.23rem;
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
  .ma{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vertical-nav2{
    display: none;
  }
  .botto{
    display: none;
  }
  .aaa{
    margin-bottom: 50px;
    width: 80%;
  }
  .twoBox{
    border: none;
    scale: 1.3;
    margin-bottom: 0.5rem;
  }
}


</style>