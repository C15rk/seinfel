<script setup >
import {ref,onMounted} from 'vue'
import {add, add2, add3, add4} from "~/utils/bor.js";

let list=ref([
  {
    url:'/images/about/4.webp',
    name:'AFS150 高效过滤器自动扫描台'
  },
  {
    url:'/images/about/5.webp',
    name:'PAF112 汽车空调滤测试系统'
  },
  {
    url:'/images/about/6.webp',
    name:'CADR 测试舱-30m³测试仓'
  },
  {
    url:'/images/about/7.webp',
    name:'CADR 测试舱-3m³测试仓'
  },
  {
    url:'/images/about/8.webp',
    name:'ISO11155 试验台'
  },
  {
    url:'/images/about/9.webp',
    name:'通风类过滤器阻力效率试验台'
  },
  {
    url:'/images/about/10.webp',
    name:'效率试验台'
  },
  {
    url:'/images/about/11.webp',
    name:'尘散实验台'
  },
  {
    url:'/images/about/12.webp',
    name:'随机频率振动台'
  },
  {
    url:'/images/about/13.webp',
    name:'固定频率振动台'
  },
  {
    url:'/images/about/14.webp',
    name:'平滑度测试仪'
  },
  {
    url:'/images/about/15.webp',
    name:'滤芯结构完整性试验台'
  },
  {
    url:'/images/about/16.webp',
    name:'机油滤综合性试验台'
  },
  {
    url:'/images/about/17.webp',
    name:'盐雾试验台'
  },
  {
    url:'',
    name:''
  },
])
onMounted(()=>{
  // add()
  // add2()
  // add3()
  // add4()
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="box">
        <p class="item">
          公司不仅有出色的生产能力，更打造了独特的前、后期检测系统：<br>
          拥有CNAN检测实验室，从前期原材料性能的监测直至成品的测试，都有国内乃至国际一流的测试流程相随，确保每个环节的制成品质，为制造杰出的产品保驾护航！这兴许是我们在业内独特之处，也是能与诸多世界500强合作的重要原因。专业的测试与评估团队，配备专业的膜材料研究的测试与评估仪器、精密的分析仪器以及中式实验设备，为用户提供详细可靠的解决方案和全面的技术支持服务。
        </p>
      </div>
      <div class="list" >
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <bor2 :class="{'active':(index+1) % 3==0,'oneBor1':true}"></bor2>
          <img :src="item.url" alt="" v-if="item.url">
          <p>
            {{item.name}}
          </p>
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
 display: flex;
}
.aaa{
  flex: 1;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.box{
  height: 4.71rem;
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
  width: 3.85rem;
  height: 4rem;
  padding: 0.575rem 0.34rem 0 0.34rem;
  font-size: 0.2rem;

  position: relative;
}
.list .listItem img{
  width: 3.24rem;
  height: 2.01rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box{
    border: none;

  }
  .list{
    padding-left: 2rem;
  }
  .oneBor1 {
    display: none;
  }
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item{
    scale: 1.5;
    margin-bottom:1.2rem;
  }
  .list .listItem p{
    font-size: 0.3rem;
    line-height: 0.3rem;
  }
}
</style>