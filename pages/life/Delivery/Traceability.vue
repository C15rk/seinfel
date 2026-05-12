<template>
  <layout-lift>
    <img src="/public/images/life/10cn.webp" alt="picture" class="one">
    <div class="item">
      自原材料入库至成品销售至客户，全程条码管理；<br>
      在原材料&在制品&成品价值转换过程中，条码同步转换，形成可追溯链条；<br>
      客户手里的每一件货，都能有效追踪到原材料的批次&制造&品质人员；<br>
      整个供应链中的物流和信息流同步纠缠，确保了追溯的科学性；<br>
      PLM系统保障了内部的运营连贯性、可追溯性。
    </div>
    <img src="/public/images/life/77cn.webp" alt="picture" class="two">
  </layout-lift>
</template>

<script setup>

</script>
<style scoped>
.item{
  width: 10.09rem;
  margin-top: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.5rem;
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
  line-height: 0.5rem;
}
.one{
  width: 10.27rem;
  height:auto;

}
.two{
  width: 10rem;
  height: 4.49rem;
  margin-top: 0.7rem;
}
@media (max-width: 1024px) {

  .item{
    scale: 1.5;
    margin:1.5rem;
    width: auto;
  }

}
</style>