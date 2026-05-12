<template>
  <layout-lift>
    <div class="item" v-for="(item,index) in info" :key="index" :style="{' marginTop':index===0?'0':''}">
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
  </layout-lift>
</template>

<script setup>
let info=[
  {
    txt:[
      'Seinfel拥有全球化制造基地、多层次评估方案及标准化的品质管控系统。'
    ]
  },
  {
    name:[
      '全球制造基地: '
    ],
    txt:[
        '我们在柬埔寨柴桢、中国浙江、中国广东、中国安徽、马来西亚新山市（规划中）设有制造基地。占地面积18万平方米以上，员工2000人以上。基地拥有专业的技术人员、管理人员、检测人员、制造人员及各类专业的设备，可满足不同国家和地区的制造及交付需求。'
    ]
  },
  {
    name:[
      '多层次评估方案: '
    ],
    txt:[
        '公司拥有从产品检测到整机测试、系统评估的全方位测试评估体系。 可以从滤材微观结构、物理特性、过滤性能检测每一个过滤器。快速匹配整机性能，提升客户整机开发质量与速度，并结合应用场景，模拟使用环境，量化系统指标，是客户优化系统方案设计的重要参考依据之一。'
    ]
  },
  {
    name:[
      '品质管控: ',
    ],
    txt:[
        '品质线如同生命线，seinfel建立了QRQC--快反质量控制及完善的产品召回管理制度，保障客户权益。'
    ]
  },
]

</script>
<style scoped>
p{
  line-height: 0.5rem;
}
.mainBox img{
  width: 10.09rem;
  height: 4.5rem;
}
.item{
  width: 10.09rem;
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
@media (max-width: 1024px) {
  .mainBox img{
    scale: 1.3;
    margin-bottom: 1rem;
  }
  .item{
    scale: 1.3;
    margin-bottom: 1.5rem;
  }
}
</style>