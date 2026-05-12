<template>
  <div style="background: #f7f7f7">
    <div class="top"></div>
    <div class="page-body">
      <backNav></backNav>
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.top{
 background: white;
  height: 8vh;
  box-shadow: 3px 0px 6px 0px rgba(82, 82, 82, 0.14);
}
.page-body {
  display: flex;
  margin-top: 1vh;
  height: calc(100vh - 9vh);
  background: #f7f7f7;
}
.page-body .main{
  width: 92%;
  height: 99%;
  margin: 0 0.2rem 0.2rem 0.2rem;
  background-color: white;
  border-radius: 0.05rem;
  padding: 0.1rem;
  box-shadow: 3px 0px 6px 0px rgba(82, 82, 82, 0.14);
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-y: scroll;
}
</style>
