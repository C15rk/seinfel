<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="title">
        <img src="/images/about/1.webp" alt="" class="img1">
      </div>
      <div class="bot">
        <borCopy class="intro1"></borCopy>
        <div class="left">
          <p>
            Seinfel过滤技术30多年来一直致力于为空气过滤和净化行业开发和生产过滤材料和产品，作为朝晖股份的一部分，我们的拥有丰富的过滤行业经验。我们的材料和产品范围涵盖家用、商业和工业空气净化、地面清洁过滤、汽车过滤和环保包装产品。我们有100多名专业研发工程师组成的团队，为客户提供广泛的过滤应用定制解决方案。<br>
          </p>
          <img src="/images/about/2.webp" alt="" class="icon">
        </div>
        <div class="right">
          <Bor2 class="int3"></Bor2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
</script>

<style scoped>
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;

}
p{
  text-align: justify;
  line-height: 0.5rem !important;
}
.aaa{
  flex: 1;
  border-left: 1px solid white;
}
.mainBox .title{
  width: 100%;
  height: 2.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainBox .title img{
  width: 10.13rem;
}
.bot{
  height: 80.8%;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;

}
.bot .left{
  width: 7.76rem;
  padding: 0.9rem;
}
.bot .left .icon{
  width: 3.17rem;
  height: 1.5rem;
}
.bot .left p{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  line-height: 0.4rem;
  margin-bottom: 100px;
}
.bot .right{
  flex: 1;
  height: 100%;
  position: relative;
}

@media (max-width: 1024px) {
  .aaa{
    border: none;
  
  }
  .bot{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .bot .left{
    margin-top: 20px;
  }
  .bot .left .icon{
    width: 7rem;
    height: auto;
  }
}
</style>