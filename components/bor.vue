<!-- components/FixedContent.vue -->
<template>
  <div class="container">
    <div class="top">
      <div class="xian"></div>
    </div>
    <div class="bottom">
      <div class="xian"></div>
    </div>
    <div class="right">
      <div class="xian"></div>
    </div>
    <div class="left">
      <div class="xian"></div>
    </div>
  </div>
</template>

<script setup>
// JavaScript for the component (if any)
</script>

<style scoped>
.top{
  bottom:100%;
}
.bottom{
  top:100%;
}
.right{
  left:100%;
}
.left{
  right:100%;
}
</style>