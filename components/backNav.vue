<template>
  <div class="navv" >
    <ul>
      <li v-for="(item,index) in NavList" :class="['nav-item',{'isclick':ind===index}]" @click="clickNav(index)">
          <NuxtLink :to="item.url">{{item.title}}</NuxtLink>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
let NavList = reactive([
  {
    title: "数据统计",
    url: "/admin/visitors",
  },
  {
    title: "关键词排名",
    url: "/admin/keyword",

  },

])
let ind=ref(0)
function clickNav(i){
  ind.value=i
}
</script>

<style scoped>
ul{
  width: 100%;
  height: 100%;
  background: #FFFFFF;
}
li {
  list-style-type: none;
  width: 100%;
}

a {
  text-decoration: none;
  color: #39475A;
  width: 100%;
  height: 100%;
  display: block;
  padding: 0 0.2rem;
}

.navv {
  width: 120px;
  border-radius: 0.05rem;
  height: 100%;
  box-shadow: 3px 0px 6px 0px rgba(82, 82, 82, 0.14);
}
.nav-item {

  height: 46px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #39475A;
  letter-spacing: 0;
  line-height: 46px;
  font-weight: 500;
}

.nav-item div {
  margin-left: 17px;
  height: 46px;
  line-height: 46px;
}

.nav-item div img {
  width: 20px;
  height: 20px;
}

.isclick {
  background: #e9feff;
  color: #0bbfbc;
}

.nav-img-box img {
  width: 200px;
  height: 416px;
}
</style>

