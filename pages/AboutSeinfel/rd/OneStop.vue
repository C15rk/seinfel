<script setup >
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
   <div class="aaa">
     <p>
       我们在生产空气过滤介质和过滤器方面可能已经积累了 110多项专利。通过研发，我们可以设计新产品并改进现有产品，从而为我们和您带来竞争优势。<br>
       在我们的研发团队中，我们在过滤介质、过滤器、过滤系统设计以及生态可持续纸张和包装方面不断开发新一代产品。 创新和产品开发是我们为现有客户和新客户寻找解决方案和竞争优势的重要资产。<br>
     </p>
     <img src="/images/about/18cn.webp" alt="">
   </div>
  </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
  height: calc(100% - 0.15rem);
  display: flex;
}
p{
  text-align: justify;
  line-height: 0.5rem !important;
}
.aaa{
  flex: 1;
  padding: 1.18rem 0 0 0.89rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid white;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.mainBox p{
  margin-bottom: 0.25rem;
  width: 9.75rem;
  margin-right: 0.9rem;;
}
.mainBox img{
  width: 4.47rem;
  object-fit: cover;
  margin-top: 1.16rem;
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;
  }
  .mainBox p{
    width: 80% !important;
    font-size:0.35rem ;
  }


}
</style>