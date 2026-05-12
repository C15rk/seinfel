<script setup >
defineProps({
  menuList: Array,
  wid:Boolean
});
</script>

<template>
  <div class="vertical-nav2">
    <a class="itemm" v-for="(item,index) in menuList " :key="index" :href="item.url" :style="{whiteSpace:wid?'pre':''}">
      {{item.name}}

    </a>
  </div>
</template>

<style scoped>
.vertical-nav2 {
  width: 15.7%;
  padding: 0.33rem 0.19rem;

}
.vertical-nav2 .itemm{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  color: white;
  margin-bottom: 0.31rem;
  display: block;

}
@media (max-width: 1024px) {
  .vertical-nav2{
    display: none;
  }
}
</style>