<script setup >
import {ref} from 'vue'
let list=ref([
  {
    url:'/images/about/19.webp',
    name:'AFS150_Automatic_Filter Scanning Test System'
  },
  {
    url:'/images/about/20.webp',
    name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
  },
  {
    url:'/images/about/21.webp',
    name:'CADR Test Chamber -30m ³ Test Warehouse'
  },
  {
    url:'/images/about/22.webp',
    name:'CADR Test Chamber -3m ³ Test Warehouse'
  },
  {
    url:'/images/about/23.webp',
    name:'ISO11155 Test Bench'
  },
  {
    url:'/images/about/24.webp',
    name:'Ventilation Filter Resistance Efficiency Test Bench'
  },
  {
    url:'/images/about/25.webp',
    name:'Mpps Efficiency Test Bench'
  },
  {
    url:'/images/about/26.webp',
    name:'Dust Dispersion Experimental Platform'
  },
  {
    url:'/images/about/27.webp',
    name:'Electro-dynamic Shaker'
  },
  {
    url:'/images/about/28.webp',
    name:'Electrodynamic Vibration Shaker'
  },
  {
    url:'/images/about/29.webp',
    name:'Smoothness Tester'
  },

  {
    url:'',
    name:''
  },
])
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="box">
        <p class="item">
          公司一直秉承市场源自诚信，质量决定生存的经营理。为充分保障全球客户对品质、环境、安全的要求，公司先后通过了SMETA全球供应链验厂、IATF16969认证、CANS实验室、ISO/IEC 17025:2017认可的实验室判定标准、FSC森林认证、IS09001质量管理体系、ISO14001环境管理体系、ISO45001职业健康安全管理体系等证书。
        </p>
        <p  class="item">
          这些认证是对我们公司在质量管理、生产流程、实验室能力以及道德合规等方面的最高认可。将继续鞭策我们保持对质量、创新和道德的高度重视，不断优化和完善我们的管理体系，为全球客户提供更优质的产品和服务。
        </p>
      </div>
      <div class="list" >
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <bor2 class="oneBor1" :class="{'active':(index+1) % 4==0}"></bor2>
          <img :src="item.url" alt="" v-if="item.url">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
  text-align: justify;
  line-height: 0.5rem !important;
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
  height: 5.4rem;
  border-left: 1px solid white;
  padding: 1.18rem 0 0 0.89rem;
}
.item{
  margin-bottom: 0.25rem;
  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.15rem;
}
.list .listItem{
  width: 2.9rem;
  height: 4rem;
  padding: 0.4rem;
  font-size: 0.2rem;

  position: relative;
}
.list .listItem img{
  width: 2.15rem;
  height: 3.05rem;
  display: block;
}

@media (max-width: 1024px) {
  .aaa{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box{
    border: none;

  }
  .list{
    padding-left: 2.5rem;
  }
  .oneBor1 {
    display: none;
  }
}
@media (max-width: 1024px) {
  .mainBox{
    border: none;
    margin-bottom: 50px;
  }
  .item{
    scale: 1.5;
    margin-bottom:1.2rem;

  }
  .list{
    margin-top: 1rem;
  }

}
</style>