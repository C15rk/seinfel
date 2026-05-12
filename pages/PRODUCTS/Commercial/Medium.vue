<script setup >
import {scrollToElement} from "~/utils/1.js";

import {ref} from 'vue'
let menuList=[
  {name:'玻纤袋式\n中效过滤器',url:'#Micro',id:'Micro'},
  {name:'化纤袋式\n中效过滤器',url:'#Chemical',id:'Chemical'},
  {name:'V型过滤器',url:'#Bank',id:'Bank'},
]
let obj=[
  {
    one:[
      {
        url:'/images/products/1333.webp',
        wid:'4.5rem',
        hei:'3.63rem',
        id:'Micro'
      },
      {
        url:'/images/products/1222.webp',
        wid:'4.77rem',
        hei:'3.5rem'
      },

    ],
    two:{
      title:'玻纤袋式中效过滤器',
      id:'Micro',
      infos:[
        {
          name:'特点:',
          txt:[
              'V型设计能使每个袋子充分鼓起与相邻的袋子保有适当的间距，清洁的空气大量由前至后排出。玻璃纤维滤袋组装于金属框架内，滤材与金属外框界面均有上胶密封，确保产品性能；',
            "可依据客户需求而定制。",

          ]
        },
        {
          name:'应用:',
          txt:[
              '广泛应用于中央空调通风系统、制药、医院、电子、食品等工业净化中，还可以作为高效空气过滤器的前端过滤。'
          ]
        }
      ],
    },
    tip:{
      name:'技术参数:',
      url:'/images/products/29cn.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/30.webp',
        wid:'3.46rem',
        hei:'4rem',
        id:'Chemical'
      },
      {
        url:'/images/products/31.webp',
        wid:'4.7rem',
        hei:'3.61rem'
      },

    ],
    two:{
      title:'化纤袋式中效过滤器',

      infos:[
        {
          name:'特点:',
          txt:[
            "V型设计能使每个袋子充分鼓起与相邻的袋子保有适当的间距，清洁的空气大量由前至后排出。纤维滤袋组装于金属框架内，滤材与金属外框界面均有上胶密封，确保产品性能；",
            '可依据客户需求而定制。'
          ]
        },
        {
          name:'应用:',
          txt:[
              '广泛应用于中央空调通风系统、制药、医院、电子、食品等工业净化中，还可以作为高效空气过滤器的前端过滤。'
          ]
        }
      ],
    },
    tip:{
      name:'技术参数:',
      url:'/images/products/32cn.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/33.webp',
        wid:'4.61rem',
        hei:'4.63rem',
        id:'Bank',
      },
      {
        url:'/images/products/34.webp',
        wid:'3.86rem',
        hei:'4.04rem'
      },

    ],
    two:{
      title:'V型过滤器',

      infos:[
        {
          name:'特点:',
          txt:[
              'V型过滤器具有更多的褶纸数量和独特的V型设计，压损较低，且具有较高的容尘量和更长的使用寿命；',
            "可依据客户需求而定制。",

          ]
        },
        {
          name:'应用:',
          txt:[
              'V型过滤器主要为大风量通风设备设计，主要用于高效、超高效通风系统的前端过滤器。'
          ]
        }
      ],
    },
    tip:{
      name:'技术参数:',
      url:'/images/products/35cn.webp'
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
  .ma>div{
    margin-top: 0.7rem;
  }
  .twoBox h1{
    margin-top: 0.5rem;
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
    margin-top: 0.5rem;
  }

}


</style>