<script setup lang="ts">
import {ref} from 'vue'
import {scrollToElement} from "~/utils/1";

let menuList=[
  {name:'有隔板\n高效过滤器',url:'#Deep',id:'Deep'},
  {name:'无隔板\n高效过滤器',url:'#Mini',id:'Mini'},

]
let obj=[
  {
    one:[
      {
        url:'/images/products/37.webp',
        wid:'4.58rem',
        hei:'4.31rem',
        id:'Deep',
      },
      {
        url:'/images/products/36.webp',
        wid:'4.61rem',
        hei:'4.61rem'
      },
    ],
    two:{
      title:'有隔板高效过滤器',

      infos:[
        {
          name:'特点:',
          txt:[
              '使用超细玻璃纤维滤纸，保证过滤器在其寿命周期内维持良好的过滤效率；',
            '具有高强度结构设计，更低阻力，更长使用寿命；',
              '根据EN1822标准进行逐个检漏；',
              '框架可以提供箱式、单法兰、双法兰；',
              '可依据客户需求而定制。',
          ]
        },
        {
          name:'应用:',
          txt:[
            '有隔板高效过滤器广泛用于对洁净度要求较高的民用或工业洁净场所的末端过滤。例如：电子、半导体、精密机械、制药、医院、食品等行业。',
          ]
        }
      ],
    },
    tip:{
      name:'技术参数:',
      url:'/images/products/38.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/42.webp',
        wid:'4.2rem',
        hei:'4.2rem',
        id:'Mini',
      },
      {
        url:'/images/products/43.webp',
        wid:'5.4rem',
        hei:'4.05rem'
      },

    ],
    two:{
      title:'无隔板高效过滤器',

      infos:[
        {
          name:'特点:',
          txt:[
              '无隔板过滤器的风量、初始阻力及集尘量效果对比传统的有隔板型HEPA要更好。密褶数设计能延长滤网使用寿命及降低压损，无隔板高效过滤器适用于洁净室、工作站、以及FFU系统中。\n' +
              '高效低阻；根据EN1822标准进行逐个检漏；厚度更小，滤料面积更大；',
              '可依据客户需求而定制。',
          ]
        },
        {
          name:'应用:',
          txt:[
              '无隔板高效过滤器广泛用于对洁净度要求较高的工业洁净场所的末端过滤。例如：电子、半导体、精密机械、制药、医院、食品等行业。'
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/44cn.webp'
    }
  },

]
let route=useRoute()
onMounted(()=>{
  scrollToElement(route)
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList" :wid="true"></vertical-nav2>
    <div class="aaa">
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img  :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :style="{width:ite.wid,height:ite.hei}" :id="ite.id">
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
          <h2 v-if="item.tip" style="margin-top: 0.5rem">
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
  .ma>div{
    margin-top: 0.7rem;
  }
  .twoBox h1{
    margin-top: 0.8rem;
  }
  .twoBox .bor{
    display: none;
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
    margin-bottom: 1.2rem;
    margin-top: 0.8rem;
  }
}


</style>