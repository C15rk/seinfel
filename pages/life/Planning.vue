<template>
       <layout-lift>
         <img src="/public/images/life/1.webp" alt="picture">
         <div class="item" v-for="(item,index) in info" :key="index">
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
        'Seinfel可以实现从客户需求分析、方案设计、定制化样品+性能评估的规划与设计阶段，同时提供不同的阶梯价格方案、多样化的包装及品质方案。'
    ]
  },
  {
    name:[
    '客户需求分析:'
    ],
    txt:[
        '我们分析客户的产品性能、质量、所遵循的标准、使用场景、服务等各方面的需求，并将这些要素进行综合评估推理，得出客户的需求模型。'
    ]
  },
  {
    name:[
    '方案设计:'
    ],
    txt:[
      '快速RFQ：在设计阶段，提供快速RFQ报价，根据不同产品，1-3个工作日完成报价；',
      '场景推荐：根据不同的应用场景和使用条件，比如家用、商用、工业用等环境，推荐合适的产品及系统方案；',
        '驻场同步开发：可派开发工程师驻场客户端，共同进行项目开发，加快项目完成进度。'
    ]
  },
  {
    name:[
    '定制化样品及性能评估',

    ],
    txt:[
        '产品性能、产品结构、产品外观均可定制化。同时拥有专业的性能评估体系，包含产品测试评估、整机测试评估、系统测试评估于一体的测试中心（CNAS），为产品开发提供保障。'
    ]
  },
  {
    name:[
    '多样化价格方案:',
    ],
    txt:[
       '根据实际的需求，提供不同的阶梯价格方案、低成本方案及高品质方案。'
    ]
  },
  {
    name:[
    '多种包装方案:',
    ],
    txt:[
        '拥有定制化的包装方案，根据距离长短、不同的彩印需求及客户需求提供定制化的设计生产服务。同时拥有半成品异地组装方案。'
    ]
  },
  {
    name:[
    '不同的品质方案: ',
    ],
    txt:[
       '可根据用户需求，定制化产品使用期限及标识。'
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