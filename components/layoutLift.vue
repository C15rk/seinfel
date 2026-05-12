<script setup>
defineProps({
  // 定义一个名为 'userData' 的 prop
  menuList: Array,
});
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
  display: flex;
  height:calc(100% - 0.15rem);
}
.aaa{
  flex: 1;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid white;
  padding-top: 1.21rem;
  padding-bottom: 2.28rem;
  height: 100%;
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
  }
}
</style>