<script setup lang="ts">
import {scrollToElement} from "~/utils/1";

import {ref} from 'vue'
let menuList=[
  {name:'空气滤清器',url:'#Cabin',id:'Cabin'},
  {name:'空调滤清器',url:'#Air',id:'Air'},
  {name:'环保纸芯机油滤',url:'#Fuel',id:'Fuel'},
  {name:'电池空气滤芯',url:'#Battery',id:'Battery'},
]
let obj=[
  {
    one:[
      {
        url:'/images/products/66.webp',
        wid:'10.14rem',
        hei:'6.75rem',
        id:'Cabin',
      },
    ],
    two:{
      title:'空气滤清器',

      infos:[
        {
          name:'',
          txt:[
              'seinfel空调滤清器过滤空气，深度清洁，保障驾乘人员安全。最大限度过滤空气中的杂质、微小颗粒物等杂质，最大限度避免车内玻璃雾化；',
            "可根据客户需求定制。",
          ]
        },
      ],
    },
  },
  {
    one:[
      {
        url:'/images/products/67.webp',
        wid:'8.67rem',
        hei:'5rem',
        id:'Air',
      },
    ],
    two:{
      title:'空调滤清器',

      infos:[
        {
          name:'',
          txt:[
              '空气滤清器对于汽车发动机来说是最为重要的滤清器。优秀的空气滤清器可以有效过滤空气中的杂质、沙粒、灰尘等物质，以减少气缸和活塞环等相关部件的磨损，延长发动机的使用寿命；',
            "可依据客户需求而定制。",
          ]
        },
      ],
    },
  },
  {
    one:[
      {
        url:'/images/products/68.webp',
        wid:'7.18rem',
        hei:'4.34rem',
        id:'Fuel',
      },
    ],
    two:{
      title:'环保纸芯机油滤',

      infos:[
        {
          name:'',
          txt:[
              '对于这种类型的过滤器，在维护过程中只需要更换滤芯，并且可以回收原来的过滤器外壳，降低安装不兼容的风险。过滤器的某些部件由可回收材料制成，有助于保护环境并降低维护成本；',
              "可依据客户需求而定制。"
          ]
        },
      ],
    },
  },
  {
    one:[
      {
        url:'/images/products/69.webp',
        wid:'3.88rem',
        hei:'4.35rem',
        id:'Battery',
      },
    ],
    two:{
      title:'电池空气滤芯',

      infos:[
        {
          name:'',
          txt:[
              "除了空气滤芯，空调滤芯，环保纸芯机油滤外，我们已经开发了电池空气滤芯。",

          ]
        },
      ],
    },
  },
]
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
              <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :style="{width:ite.wid,height:ite.hei}" :id="ite.id">
            </div>
          </div>
        </div>
        <div class="twoBox" :id="item.two.id">
          <div class="bor" ></div>
          <h1>{{item.two.title}}</h1>
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
  //border-left: 1px solid white;
  flex: 1;
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