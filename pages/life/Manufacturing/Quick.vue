<template>
  <layout-lift>
    <div class="item" style="margin-top: 0;">
      朝晖有完善的快速反应质量控制管理方案应对，作出快速反应和解决。迅速完全地使有关产品/事项得到控制，最大限度地减少或降低对客户造成的不良影响和损失。

    </div>
    <img src="/public/images/life/2cn.webp" alt="picture">
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
        '      拥有从输入-过程管理-输出的全流品质管控',
        '      遵循 ISO9001、ISO14001、ISO45001系统标准，2020年通过德国IATF16949认证',
        '      拥有QRQC--快反质量控制及产品召回、售后服务体系。',

    ]
  },
]

</script>
<style scoped>

.item{
  width: 10.09rem;
  margin-top: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.5rem !important;
}
.item .title{
  margin-bottom: 0.17rem;
}
.item h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}
p{
  font-size: 0.25rem;
  line-height: 0.4rem;
}
img{
  width: 8.9rem;
  height: auto;
  margin-top: 0.7rem;
}
@media (max-width: 1024px) {
  .mainBox img{
    scale: 1.3;
    margin: 1rem;
  }
  .item{
    scale: 1.3;
    margin: 1.5rem;
  }
}
</style>