<script setup lang="ts">

import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/45.webp',
        wid:'8.12rem',
        hei:'4.22rem'
      },
    ],
    two:{
      title:'过滤单元',
      infos:[
        {
          name:'特点:',
          txt:[
            '箱体冷轧板喷塑或不锈钢板',

          ]
        },
        {
          name:'应用:',
          txt:[
              '龙骨框架上，FFU上面部分为风机模块，下面为过滤器，根据洁净度要求，过滤器可为不同等级的高效(HEPA)或(ULPA)过滤器。'
          ]
        }
      ],
    },
    tip:{
      name:'技术参数:',
      url:'/images/products/46cn.webp'
    }
  },

]
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div>
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img">
            </div>
          </div>
        </div>
        <div class="twoBox">
          <div class="bor" ></div>
          <h1>{{item.two.title}}</h1>
          <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind">
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
          <h2>
            {{item.tip.name}}
          </h2>
          <img :src="item.tip.url" alt="" class="img1">
        </div>
        <div>
        </div>
      </div>
      <div class="botto">
        <bor2 class="DustBor2 DustBor22"></bor2>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
  line-height: 0.5rem;
}
.img{
  width: 100%;
  height: auto;
}
.botto{
  width: 100%;
  height: 2.62rem;
  position: relative;
}
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;
  //border-left: 1px solid white;
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
  width: 4rem;
  height: 4rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
.twoBox{
  margin-top: 0.15rem;
  padding: 0.5rem 0 0.6rem 0.8rem;
  border-left: 1px solid white;
  position: relative;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
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
  width: 10.09rem;
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
  .twoBox .bor{
    display: none;
  }
  .botto{
    display: none;
  }
  .twoBox{
    border: none;
    scale: 1.3;
    margin: 1.1rem 0;
  }
  .twoBox .bor{
    display: none;
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
}


</style>