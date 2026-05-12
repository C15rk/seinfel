<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="info">
        <div class="top">
          <div class="left">
            YEAR
          </div>
          <div class="right">
            Development events
          </div>
          <borCopy class="seinBor1"></borCopy>
        </div>
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="left">
            {{ item.time }}
          </div>
          <div class="right">
            {{item.info}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

let list=ref([
  {
    time:1993,
    info:'生产出中国第一批吸尘器纸质尘袋'
  },
  {
    time:1996,
    info:' 第一台湿法无纺布机上线，产品得到3M和日本市场的认可'
  },
  {
    time:1998,
    info:'研发了集尘袋自动化生产线'
  },
  {
    time:2003,
    info:'超细玻璃纤维过滤材料项目投产'
  },
  {
    time:2004,
    info:'HEPA过滤器投产'
  },
  {
    time:2009,
    info:'PTFE拉伸膜研发成功'
  },
  {
    time:2012,
    info:'第一个空净滤芯产品的问世，正式开启空气净化领域'
  },{
    time:2013,
    info:'高效低阻可水洗过滤器投产'
  },
  {
    time:2018,
    info:'汽车滤清器研发成功及量产'
  },
  {
    time:2019,
    info:'100%可降解替塑环保包装研发成功并量产'
  },
  {
    time:2020,
    info:'商业及工业过滤器推向市场'
  },
  {
    time:2023,
    info:'新风滤网及高容尘材料开发成功并量产'
  }
])
</script>
<style scoped>
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
}
.aaa{
  flex: 1;
  position: relative;
  border-left: 1px solid white;
  display: flex;
  justify-content: center;
}
.info{
  width: 10.39rem;
  height: 9.74rem;
  color: white;
  margin-top: 1.1rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.info .top{
  height: 1.05rem;
  border-top: 1px solid white;
  font-size: 0.5rem;
  line-height: 0.3rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}
.info .left{
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info .right{
  width: 75%;
  display: flex;

  align-items: center;
}
.info .top .right{
  width: 70%;
}
.info .item{
  padding: 0.15rem 0;
  font-size: 0.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 80px;
  }
}
</style>