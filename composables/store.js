import { ref } from "vue";

//使用 layouts 布局，页面默认展示信息 由 menuList 控制；<slot> 插槽显示路由对应页面
//路由变化前，获取跳转路径动态匹配list页面信息列表，改变 menuList 信息，实现页面根据路由展示不同信息
export const useNuxtStore = defineStore("nuxtStore", () => {
  let isShowMenu = ref(false);
  let isShowNav = ref(true);
  let routerPath = ref("/");
  let isAdd = ref(false);
  let news = ref(false);
  let isApp = ref(false);
  let isCn = ref(false);
  let list = ref([
    [
      {
        id: 1,
        name: "概述",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Introduction",
        title: ["关于歆弗"],
      },
      {
        id: 2,
        name: "发展历程",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Seinfel",
      },
      {
        id: 3,
        name: "制造能力",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Manu",
      },
      {
        id: 4,
        name: "研发能力",
        showSubmenu: false,
        subcategories: [
          { id: 41, name: "一站式", name2: "过滤行业解决方案", url: "/AboutSeinfel/rd/OneStop", top: "", Side: "" },
          { id: 42, name: "检测评估设备（部分)", url: "/AboutSeinfel/rd/TestCenter", top: "", Side: "" },
        ],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/rd",
      },
      {
        id: 5,
        name: "相关证书",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Related",
      },
    ],
    [
      {
        id: 1,
        name: `规划与设计`,
        name2: "",
        showSubmenu: false,
        subcategories: [],
        path: "/life",
        router: "/life/Planning",
        title: ["全生命周期", "解决方案"],
        leftIndex: "9.24rem",
      },
      {
        id: 2,
        name: `制造与评估`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 21, name: "总览", name2: "", url: "/life/Manufacturing/overview", top: "", Side: "" },
          { id: 22, name: "快反质量控制", name2: "", url: "/life/Manufacturing/Quick", top: "", Side: "" },
          { id: 23, name: "进货检验流程图", name2: "", url: "/life/Manufacturing/Incoming", top: "", Side: "" },
          { id: 24, name: "工作流程图", name2: "", url: "/life/Manufacturing/Workflow", top: "", Side: "" },
          { id: 25, name: "过程检验流程图", name2: "", url: "/life/Manufacturing/Process", top: "", Side: "" },
          { id: 26, name: "产品召回管理", name2: "", url: "/life/Manufacturing/Product", top: "", Side: "" },
        ],
        path: "/life",
        router: "/life/Manufacturing",
      },
      {
        id: 3,
        name: `交付与售后`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 31, name: "运输方案", name2: "", url: "/life/Delivery/Transportation", top: "", Side: "" },
          { id: 32, name: "仓储方案", name2: "", url: "/life/Delivery/Warehousing", top: "", Side: "" },
          { id: 33, name: "追溯方案", name2: "", url: "/life/Delivery/Traceability", top: "", Side: "" },
        ],
        path: "/life",
        router: "/life/Delivery",
      },
    ],
    [
      {
        id: 1,
        name: `地面清洁`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 11, name: "纸袋", name2: "", url: "/PRODUCTS/FloorCare/Paper", top: "", Side: "" },
          { id: 12, name: "无纺布袋", name2: "", url: "/PRODUCTS/FloorCare/Woven", top: "", Side: "" },
          { id: 13, name: "缝纫布袋", name2: "", url: "/PRODUCTS/FloorCare/Sewn", top: "", Side: "" },
          { id: 14, name: "过滤器", name2: "", url: "/PRODUCTS/FloorCare/Filter", top: "", Side: "" },
          { id: 15, name: "软胶过滤器", name2: "", url: "/PRODUCTS/FloorCare/Soft", top: "", Side: "" },
          { id: 16, name: "滤片，尘帽", name2: "", url: "/PRODUCTS/FloorCare/Pre", top: "", Side: "" },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/FloorCare",
        title: ["产品"],
        isShowBack: true,
      },
      {
        id: 2,
        name: `空气净化`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          {
            id: 21,
            name: "除尘滤网",
            name2: "",
            url: "/PRODUCTS/AirPuri/Dust",
            top: "",
            Side: [
              { name: "Pre-filter", url: "#Pre" },
              { name: "High Efficiency Filter", url: "#High" },
              { name: "PTFE-Washable Filter", url: "#PTFE" },
            ],
          },
          {
            id: 22,
            name: "除异味滤网",
            name2: "",
            url: "/PRODUCTS/AirPuri/Deodorizing",
            top: "",
            Side: [
              { name: "Catalyst Filter", url: "" },
              { name: "Activated Carbon Filter", url: "" },
            ],
          },
          {
            id: 23,
            name: "健康功能滤网",
            name2: "",
            url: "/PRODUCTS/AirPuri/Health",
            top: "",
            Side: [
              { name: "Antibacterial & Antiviral Coated Filt", url: "" },
              { name: "Odor Purification Composite Filter", url: "" },
            ],
          },
          {
            id: 24,
            name: "加湿滤网",
            name2: "",
            url: "/PRODUCTS/AirPuri/Humidification",
            top: "",
            Side: [
              { name: "Pre-filter", url: "" },
              { name: "High Efficiency Filter", url: "" },
              { name: "PTFE-Washable Filter", url: "" },
            ],
          },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/AirPuri",
        title: ["产品"],
        isShowBack: true,
      },
      {
        id: 3,
        name: `商用及工业通风过滤`,
        showSubmenu: false,
        subcategories: [
          { id: 31, name: "初效过滤器", name2: "", url: "/PRODUCTS/Commercial/pre", top: "", Side: ["Pleated        Pre-Filter\n", "Pocket          Pre-Filter"] },
          { id: 32, name: "中效过滤器", name2: "", url: "/PRODUCTS/Commercial/Medium", top: "", Side: ["Micro Fiber Glass Pocket Filters", "Chemical Fiber Bag Filter", "V-Bank Filter V"] },
          { id: 33, name: "高效过滤器", name2: "", url: "/PRODUCTS/Commercial/High", top: "", Side: ["Deep Pleated HEPA Filter", "Mini-Pleated HEPA Filter"] },
          { id: 34, name: "过滤单元", name2: "", url: "/PRODUCTS/Commercial/FFU", top: "", Side: [] },
          { id: 34, name: "高效送风口", name2: "", url: "/PRODUCTS/Commercial/HEPA", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/Commercial",
        title: ["产品"],
        isShowBack: true,
      },
      {
        id: 4,
        name: `环保替塑包装袋`,
        showSubmenu: false,
        subcategories: [
          { id: 41, name: "产品介绍", name2: "", url: "/PRODUCTS/EcoFriendly/Product", top: "", Side: [] },
          { id: 42, name: "产品类别", name2: "", url: "/PRODUCTS/EcoFriendly/ProductCategory", top: "", Side: [] },
          { id: 43, name: "环保证书", name2: "", url: "/PRODUCTS/EcoFriendly/Environmental", top: "", Side: [] },
          { id: 44, name: "应用领域", name2: "", url: "/PRODUCTS/EcoFriendly/Application", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/EcoFriendly",
        title: ["产品"],
        isShowBack: true,
      },
      {
        id: 5,
        name: `汽车过滤`,
        showSubmenu: false,
        subcategories: [
          {
            id: 51,
            name: "产品类别",
            name2: "",
            url: "/PRODUCTS/Automotive/Product",
            top: "",
            Side: [
              { name: "Cabin Filter", url: "" },
              { name: "Air Filter", url: "" },
              { name: "Fuel Filter Element", url: "" },
              { name: "Battery Air Filter Element", url: "" },
            ],
          },
          { id: 52, name: "在线产品目录", name2: "", url: "/PRODUCTS/Automotive/Catalogo", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/Automotive",
        isShowBack: true,
      },
    ],
  ]);
  let menuList = ref({
    title: [],
    list: [],
    leftIndex: "",
    isShowBack: false,
    tips: [],
  });
  const hiddenMenu = () => {
    isShowMenu.value = false;
  };
  const showMenu = () => {
    isShowMenu.value = true;
  };
  const hiddenNav = () => {
    isShowNav.value = false;
  };
  const showNav = () => {
    isShowNav.value = true;
  };

  //获取根路径，用户匹配一级路由
  let test = (path) => {
    if (path.match(/^\/[^/]+/)) {
      // return  path.match(/(\/[^\/]+){2}/)[0]
      return path.match(/^\/[^/]+/)[0];
    }
  };
   //获取二级路径，用于匹配以及对应一级选项卡匹配高亮
  let test2 = (path) => {
    if (path.match(/^\/[^/]+/)) {
      if (path.match(/(\/[^\/]+){2}/)) {
        return path.match(/(\/[^\/]+){2}/)[0];
      }
    }
  };
  const changeRouterPath = (path) => {
    let lists = list.value;

    //如果是首页，applicationareas和联系我们页面，不返回路径
    if (path == "/" || path == "/applicationareas" || path == "/contact") {
      return;
    }

    routerPath.value = test2(path);

    for (let item of lists) {
      if (item[0].path === test(path)) {
        menuList.value.list = item;
        menuList.value.title = item[0].title;
        menuList.value.leftIndex = item[0].leftIndex;
        menuList.value.isShowBack = !!item[0].isShowBack;
        menuList.value.tips = [];
        for (const e of item) {
          if (e.router === routerPath.value || e.router.slice(3) === routerPath.value) {
            for (const eElement of e.subcategories) {
              if (eElement.url === path) {
                menuList.value.tips = eElement.Side;
                return;
              }
            }
          }
        }
      }
    }
  };

  let changeCn = (bol) => {
    if (bol === isCn) {
      return;
    }
    isCn.value = !!bol;
  };
  let changeApp = (bol) => {
    isApp.value = bol;
  };
  let changeNews = () => {
    news.value = !news.value;
  };
  return {
    isShowMenu,
    isShowNav,
    hiddenNav,
    showNav,
    hiddenMenu,
    showMenu,
    routerPath,
    changeRouterPath,
    list,
    menuList,
    isAdd,
    news,
    changeNews,
    changeCn,
    isCn,
    changeApp,
    isApp,
  };
});
