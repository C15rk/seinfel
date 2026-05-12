<script setup lang="ts">
</script>

<template>
 <div class="mainBox">
   <vertical-nav2 :menuList="menuList"></vertical-nav2>
  <div class="aaa">
    <p>
      作为家用、工业、商业和 OEM 过滤领域空气过滤材料和过滤器、过滤系统的领先制造商，我们开发和生产的过滤器应用范围非常广泛，包括暖通空调、汽车、铁路、科研、实验室柜、洁净室、医疗设备、安全柜、吸尘器、空气净化器、工业真空洁净设备、呼吸系统等过滤设备及系统。
    </p>
    <img src="/public/images/about/3cn.webp" alt="">
    <p class="item" >
      为了提供高端的制造服务，我们对所有制造设施的投资都从质量保证开始，我们的设施包括现代化厂房、万级洁净室、日本、欧美等高端制造设备、CNAS实验室检测等。<br>
      我们的制造体系使我们能够控制整个生产流程，包含制模机、自动打褶设备、超声波焊接机、自动垫片切割、激光-垫片印刷设备等。我们的设备不断更新，以匹配高端生产，更重要的是可以减少浪费，履行我们的环保承诺。<br>
      我们的制造能力能满足短期、长期以及其它苛刻的交货要求。我们的厂房面积高达 180,000 平方米，能够满足您目前和未来的过滤需求。
    </p>
  </div>
 </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
display: flex;
   height: 19.21rem;

}
p{
  text-align: justify;
  line-height: 0.5rem !important;
}
.aaa{
  flex: 1;
  margin-bottom: 0.15rem;
  position: relative;
  border-left: 1px solid white;
  overflow: hidden;
  padding: 1.18rem 0 0 0.89rem;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.mainBox p{
  max-width: 8.8rem;
  margin-bottom: 0.4rem;
}
.mainBox img{
  width: 100%;
  height: 5.3rem;
  margin: 0.83rem 0 1.08rem 0;
}
.item{
  margin-bottom: 0.25rem;
}

@media (max-width: 1024px) {
  .aaa{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;
  }
  .mainBox img{
    width: 60%;
    height: auto;
  }
  .mainBox p{
    max-width: 80% !important;
    font-size:0.35rem ;
  }
}
</style>