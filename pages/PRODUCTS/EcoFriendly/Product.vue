<script setup lang="ts">

import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/49.webp',
        wid:'7rem',
        hei:'4.71rem'
      },
    ],
    two:{
      infos:[
        {
          name:'Features:',
          txt:[
            '环保包装袋产品采用100%木浆纤维；',
            "材料产地拥有FSC森林认证，保证稳定森林经营权；",
              "棉线：100%全环保棉线材料；",
              "油墨：环保水性油墨（成分为水溶性树脂、有机颜料、溶剂等)；",
              "胶水：水溶性环保胶，生物淀粉胶水。"
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
        <div style="position: relative;height: 5.3rem;width: 100%;">

          <div class="list" >
            <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">

              <img :src="ite.url" alt="products" v-if="ite.url" class="img" :style="{width:ite.wid,height:ite.hei,marginLeft:'1.3rem'}">
            </div>
          </div>
        </div>
        <div class="twoBox" >
          <div class="bor" ></div>
          <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind">

            <div class="txt">
              <p v-for="(it,i) in ite.txt" :key="i">
                {{it}}
              </p>
            </div>
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
.img{
  width: 100%;
  height: auto;
}
.botto{
  width: 100%;
  height: 10rem;
  position: relative;
  margin-top: 0.15rem;
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
  position: absolute;
  top: -0.15rem;
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
  padding: 0.5rem 0 0.3rem 0.8rem;
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
.DustBor1{
  top: 0.15rem;
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
    scale: 1.5;
    margin: 1rem 0;
    padding-left: 0;
  }
  .DustBor1 {
    display: none;
  }
  .list{
    position: static;
  }
  .botto{
     display: none;
  }
  .ma{
    margin-bottom: 50px;

  }
  .twoBox .bor{
    display: none;
  }
}


</style>