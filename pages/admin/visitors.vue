<script setup>
definePageMeta({
  layout: "back",
  pageTransition: {
    name: 'home'
  }
})
const tableData = ref([
  {
    "id": 57,
    "ip": "127.0.0.1",
    "country": "未知",
    "regionName": "未知",
    "count": 166
  }
])
let sum=ref('')
let total=ref(50)
let page=ref(1)
let pageSize=ref(10)
function changPage(num){
  page.value=num
  get('/getip',{
    limit:pageSize.value,
    page:num,
  })
      .then((res)=>{
        tableData.value=res.results
        sum.value=res.sum
        total.value=res.total
      })
      .catch((err)=>{
        console.log(err)
        alert('获取数据失败')
      })
}
onMounted(  ()=>{
  get('/getip',{
    limit:pageSize.value,
    page:page.value,
  })
      .then((res)=>{
        tableData.value=res.results
        sum.value=res.sum
        total.value=res.total
      })
      .catch((err)=>{
        console.log(err)
        alert('获取数据失败')
      })

})
</script>

<template>
<div class="wrap">
  <h4 class="sum">网站总浏览量:{{sum}}</h4>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="country" label="国家" width="180" />
    <el-table-column prop="regionName" label="地区" />
    <el-table-column prop="count" label="统计" width="180" />
  </el-table>
  <div class="example-pagination-block">
    <el-pagination layout="prev, pager, next" :total="total" @current-change="changPage" :page-size="pageSize" />
  </div>

</div>
</template>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
}
.sum{
  text-align: right;
  margin: 0.2rem;
}
.example-pagination-block{
  margin: 0.3rem auto;
  display: flex;justify-content: center;
}
</style>