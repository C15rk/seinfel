<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

let keyWord = ref('')
let result = ref({})
let searchData = ref([
  {
    name: '纸袋,尘袋采用木浆纸制作而成，为单层、双层与多层组合梯度过滤结构；效率高达99.97%以上，具有抗菌、吸附、除臭、加香等等功能；颜色包含白色、本色、黄色、蓝色、绿色等，可根据客户要求定制不同的颜色；家用及商用手持式、桶式、卧式、立式、车载吸尘器，扫地机器人。',
    url: '/PRODUCTS/FloorCare/Paper'
  },
  {
    name: '无纺布袋,多层梯度组合过滤，寿命是普通袋子的2到3倍多层，以达到梯度效率水平，使用寿命长(是普通型的2-3倍)；透气性为20~800L/m.s，具有抗菌、吸附、除臭等功能；按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',
    url: '/PRODUCTS/FloorCare/Woven'
  },
  {
    name: '缝纫布袋,抗菌、吸附、除臭、水洗反复使用等；具有白帆布、绒布、针织复合布、缝边布、空编布、针刺棉、SMS布等品类；白色、灰色、黑色等，可根据客户要求定制不同的颜色；按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',
    url: '/PRODUCTS/FloorCare/Sewn'
  },
  {
    name: '过滤器,抗菌、吸附、除昊、水洗等功能;按客户提供的使用条件(或应用场合) 和提出的技术、功能等方面的要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',
    url: '/PRODUCTS/FloorCare/Filter'
  },
  {
    name: '软胶过滤器,容尘量大、可清洗重复使用，是普通过滤器的3到5倍;海绵、针刺棉、蓬松棉、梯度棉、静电棉、纱网、网眼布等滤材;按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',
    url: '/PRODUCTS/FloorCare/Soft'
  },
  {
    name: '滤片,尘帽有各种形状和尺寸，采用各种介质设计，可在大颗粒物到达后置过滤器之前将其捕获（有些过滤器经过处理，可去除挥发性有机化合物和细菌），从而延长主过滤器的使用寿命，提高过滤性能，减少主过滤器的更换次数。可提供一次性和可清洗过滤器；抗菌，吸附，除臭，水洗，降噪等功能；拥有海绵，喷胶棉，百洁布，针刺棉，纺粘，水刺，热风，梯度棉，静电棉等不同材质；白色，黑色或根据客户要求定制；按客户提供的使用条件 (或应用场合) 和提出的技术、功能等方面的，要求，为客户提供经济、科学、有效的解决方案，且提供全面、先进和具有针对性的技术保障与服务。',
    url: '/PRODUCTS/FloorCare/Pre'
  },
  {
    name: '尘帽',
    url: '/PRODUCTS/FloorCare/Pre'
  },
  {
    name: '除尘滤网',
    url: '/PRODUCTS/AirPuri/Dust'
  },
  {
    name: '除异味滤网',
    url: '/PRODUCTS/AirPuri/Deodorizing'
  },
  {
    name: '健康功能滤网',
    url: '/PRODUCTS/AirPuri/Health'
  },
  {
    name: '加湿滤网',
    url: '/PRODUCTS/AirPuri/Humidification'
  },

  {
    name: '中效过滤器',
    url: '/PRODUCTS/Commercial/Medium'
  },
  {
    name: '高效过滤器',
    url: '/PRODUCTS/Commercial/High'
  },
  {
    name: '过滤单元',
    url: '/PRODUCTS/Commercial/FFU'
  },
  {
    name: '高效送风口',
    url: '/PRODUCTS/Commercial/HEPA'
  },

  {
    name: '产品类别',
    url: '/PRODUCTS/EcoFriendly/ProductCategory'
  },
  {
    name: '环保证书',
    url: '/PRODUCTS/EcoFriendly/Environmental'
  },
  {
    name: '应用领域',
    url: '/PRODUCTS/EcoFriendly/Application'
  },
  {
    name:"环保替塑包装袋 环保包装袋产品采用100%木浆纤维；材料产地拥有FSC森林认证，保证稳定森林经营权；棉线：100%全环保棉线材料；油墨：环保水性油墨（成分为水溶性树脂、有机颜料、溶剂等)；胶水：水溶性环保胶，生物淀粉胶水。材料: 100%木浆纤维(特种纸)克重: 16g 18g 30g 40g 50g 30g+14g 40g+14g等颜色: 本色、白色产品类型: 片材、筒式、袋式",
    url: '/PRODUCTS/EcoFriendly/Product'
  }
])
let searchTitleDate = ref([
  {
    name: '初效滤网, 选用海绵、喷胶棉、百洁布等材质，并可根据客户具体需求进行定制；可作为基材附着活性炭等吸附材料，并对其进行不同类型的催化处理，在满足初效过滤的同时达到去除甲醛、苯、氨气、TVOCs等的效果；可浸渍或者喷淋抗菌剂的功能化后处理方式，能够使材料具备抗菌防霉性能，防止过滤器上细菌的滋生和霉变；可根据客户要求，选材调整为可水洗重复利用。家用、商用空气净化整机，通风系统。',
    url: '/PRODUCTS/AirPuri/Dust#Pre'
  },
  {
    name: '高效滤网 纤维细度在0.1-10μm，过滤效率最高可达99.97%；可进行抗菌防霉等功能性整理，防止细菌滋生；家用、商用空气净化整机，通风系统。',
    url: '/PRODUCTS/AirPuri/Dust#High'
  },
  {
    name: '可水洗过滤网 利用PTFE的疏水特性，产品可清洗。材料清洗60次，效率下降缓慢；稳定的效率，能在特殊环境条件下使用，如：高温，高湿，臭氧环境等等。用于新风及暖通行业，有效去除空气中的PM2.5颗粒；家用空气净化（无油烟环境）。',
    url: '/PRODUCTS/AirPuri/Dust#PTFE'
  },
  {
    name: '触媒过滤网, 甲醛清除专家；冷触媒及光触媒滤网，在具备一定的温度或者光照条件下通过摧化氧化等方式分解有害气体，对甲醛（VOC）具有清除能力，无需任何处理，时间持久，无二次污染；在气温达到5℃以上，湿度达到40％以上的条件下，冷触媒催化分解有害气体的效果就能达到理想状态无需任何处理而长期使用；',
    url: '/PRODUCTS/AirPuri/Deodorizing#Catalyst'
  },
  {
    name: '活性炭过滤网, 采用高比表面积活性炭，通过选用不同改性剂经浸渍改性处理后，赋予活性炭对特定可挥发性有机气体定向吸附；利用蜂窝结构对上述活性炭吸附材料进行填装，提高材料与有害气体接触面积的同时，有效降低风阻',
    url: '/PRODUCTS/AirPuri/Deodorizing#Activated'
  },
  {
    name: '抗菌抗病毒复合滤网, 采用抗菌抗病毒技术处理的材料，通过破坏细菌和病毒的结构，高效抑制和杀灭各类细菌、病毒，包括流感病毒、冠状病毒等，效率可达99.99%以上；过滤空气中的微粒物质，如灰尘、花粉、宠物皮屑等，减少细菌和病毒的传播，使空气保持清新、纯净，提供全面的防护；',
    url: '/PRODUCTS/AirPuri/Health#Antibacterial'
  },
  {
    name: '异味净化复合滤网, 采用高品质活性炭、活性炭纤维或者触媒类材料，持续吸附或分解异味分子，能够有效去除空气中的烟味、霉味、宠物异味；滤除空气中的微粒物质，如灰尘、花粉等，减少过敏源的传播，实现高效、持久的净化功效；',
    url: '/PRODUCTS/AirPuri/Health#Odor'
  },
  {
    name: '加湿滤网, 主要用于制作空气加湿器滤芯医疗呼吸设备滤芯;通过添加纳米银抗菌涤纶短纤与后处理，赋予纸张长效抗菌、防霉性能。抗菌率不低于95.0%, 长霉等级为0 级；采用特殊工艺进行抄造，赋予纸张较好的吸水性能。',
    url: '/PRODUCTS/AirPuri/Humidification'
  },
  {
    name: '板式初效过滤器, 滤料和金属网紧密粘合，增强了滤料褶层的强度，有效减弱额滤料褶层的抖动，从而减少了二次污染。金属框架板式初效过滤器适用于空调系统的初级过滤，主要用于过滤5μm以上尘埃粒子；',
    url: '/PRODUCTS/Commercial/pre#Pleated'
  },
  {
    name: '袋式初效过滤器, V型滤袋，滤料有效利用率达100%，具有良好的过滤效率和非常高的容尘量。一体化的外框和超宽的内框设计，增加了整体的结构强度，同时有效降低了阻力',
    url: '/PRODUCTS/Commercial/pre#Pocket'
  },
  {
    name: '玻纤袋式中效过滤器,V型设计能使每个袋子充分鼓起与相邻的袋子保有适当的间距，清洁的空气大量由前至后排出。玻璃纤维滤袋组装于金属框架内，滤材与金属外框界面均有上胶密封，确保产品性能；可依据客户需求而定制。广泛应用于中央空调通风系统、制药、医院、电子、食品等工业净化中，还可以作为高效空气过滤器的前端过滤。',
    url: '/PRODUCTS/Commercial/Medium#Micro'
  },
  {
    name: '化纤袋式中效过滤器, V型设计能使每个袋子充分鼓起与相邻的袋子保有适当的间距，清洁的空气大量由前至后排出。纤维滤袋组装于金属框架内，滤材与金属外框界面均有上胶密封，确保产品性能；可依据客户需求而定制。广泛应用于中央空调通风系统、制药、医院、电子、食品等工业净化中，还可以作为高效空气过滤器的前端过滤。',
    url: '/PRODUCTS/Commercial/Medium#Chemical'
  },
  {
    name: 'V型过滤器, V型过滤器具有更多的褶纸数量和独特的V型设计，压损较低，且具有较高的容尘量和更长的使用寿命；V型过滤器主要为大风量通风设备设计，主要用于高效、超高效通风系统的前端过滤器。',
    url: '/PRODUCTS/Commercial/Medium#Bank'
  },
  {
    name: '有隔板高效过滤器, 使用超细玻璃纤维滤纸，保证过滤器在其寿命周期内维持良好的过滤效率；具有高强度结构设计，更低阻力，更长使用寿命；根据EN1822标准进行逐个检漏；框架可以提供箱式、单法兰、双法兰；有隔板高效过滤器广泛用于对洁净度要求较高的民用或工业洁净场所的末端过滤。例如：电子、半导体、精密机械、制药、医院、食品等行业。',
    url: '/PRODUCTS/Commercial/High#Deep'
  },
  {
    name: '无隔板高效过滤器, 无隔板过滤器的风量、初始阻力及集尘量效果对比传统的有隔板型HEPA要更好。密褶数设计能延长滤网使用寿命及降低压损，无隔板高效过滤器适用于洁净室、工作站、以及FFU系统中。 高效低阻；根据EN1822标准进行逐个检漏；厚度更小，滤料面积更大；可依据客户需求而定制。无隔板高效过滤器广泛用于对洁净度要求较高的工业洁净场所的末端过滤。例如：电子、半导体、精密机械、制药、医院、食品等行业。',
    url: '/PRODUCTS/Commercial/High#Mini'
  },
  {
    name: '过滤单元,龙骨框架上，FFU上面部分为风机模块，下面为过滤器，根据洁净度要求，过滤器可为不同等级的高效(HEPA)或(ULPA)过滤器。',
    url: '/PRODUCTS/Commercial/FFU'
  },
  {
    name: '高效送风口,箱体冷轧板喷塑或不锈钢板箱体冷轧板喷塑或不锈钢板可配套液槽式或干式与有隔板高效过滤器，散流板 ；接口形式；圆形/方形 侧接/顶接；尺寸多样可定制。广泛用于对洁净度要求较高的工业洁净场所的末端过滤配置，例如：电子、半导体、精密机械、制药，医院、食品等行业。',
    url: '/PRODUCTS/Commercial/HEPA'
  },
  {
    name: '空气滤清器,seinfel空调滤清器过滤空气，深度清洁，保障驾乘人员安全。最大限度过滤空气中的杂质、微小颗粒物等杂质，最大限度避免车内玻璃雾化；',
    url: '/PRODUCTS/Automotive/Product#Cabin'
  },
  {
    name: '空调滤清器, 空气滤清器对于汽车发动机来说是最为重要的滤清器。优秀的空气滤清器可以有效过滤空气中的杂质、沙粒、灰尘等物质，以减少气缸和活塞环等相关部件的磨损，延长发动机的使用寿命；',
    url: '/PRODUCTS/Automotive/Product#Air'
  },
  {
    name: '环保纸芯机油滤,对于这种类型的过滤器，在维护过程中只需要更换滤芯，并且可以回收原来的过滤器外壳，降低安装不兼容的风险。过滤器的某些部件由可回收材料制成，有助于保护环境并降低维护成本；',
    url: '/PRODUCTS/Automotive/Product#Fuel'
  },
  {
    name: '电池空气滤芯, 除了空气滤芯，空调滤芯，环保纸芯机油滤外，我们已经开发了电池空气滤芯。',
    url: '/PRODUCTS/Automotive/Product#Battery'
  },

])

function search() {
  if (!keyWord) {
    return;
  }

  // 将用户的搜索查询转换为小写
  let lowerCaseQuery = keyWord.value.toLowerCase();

  // 在 searchData 数组中寻找模糊匹配的项，使用 includes 进行模糊匹配
  result.value = searchData.value.find(item => item.name.toLowerCase().includes(lowerCaseQuery));

  // 如果在 searchData 中没有找到，继续在 searchTitleDate 数组中寻找模糊匹配的项
  if (!result.value) {
    result.value = searchTitleDate.value.find(item => item.name.toLowerCase().includes(lowerCaseQuery));
  }

  // 如果找到结果，跳转到对应的 URL，否则提示用户没有找到
  if (result.value) {
    router.push(result.value.url);
    get('/saveKeyWord', { keyWord: lowerCaseQuery });
  } else {
    alert('未查到，请输入完整名称或部分名称');
  }
}

function handleEnter() {
  search()
}
</script>

<template>

        <img alt="search" src="/public/images/index/search.webp" class="search">
        <img alt="search" src="/public/images/index/search.webp" class="search">
        <input placeholder="产品搜索" v-model="keyWord" @keydown.enter="handleEnter">
        <button id="btn" @click="search()"></button>

</template>

<style scoped>

.search {
    /* width: 11.21rem; */
    width: 97%;
    height: 0.8rem;
    left: 0.13rem;
    top: 1.02rem;
    position: absolute;
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
}

input {
    position: absolute;
    width: 9.8rem;
    height: 0.8rem;
    left: 1.43rem;
    top: 1.02rem;
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 0.3rem;
    font-family: AlibabaPuHuiTi2;
    color: white;
}

#btn {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 0.42rem;
    top: 1.15rem;
    cursor: pointer;
    opacity: 0;
}
</style>