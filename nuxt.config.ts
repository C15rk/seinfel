// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true},
  ssr: true, // 确保服务器端渲染是开启的
  generate: {
    // 配置生成的静态文件的路由
    routes: [
      '/', // 配置需要预渲染的路由
    ],
    // 配置静态文件生成的文件名
    fallback: true, // 在404情况下是否回退到首页
    dir: 'dist' // 配置生成的静态文件目录
  },
  css: [
    '~/assets/css/main.css', // 路径根据你的项目结构调整
    '~/assets/css/animation.css', 
    '~/assets/css/bor.css',
    'element-plus/dist/index.css'
  ],
  plugins: [
      '~/plugins/router-guard.js',
    '~/plugins/element-plus.js'
  ],
  modules: [
     '@pinia/nuxt',
  ],
  serverMiddleware: [
    { path: "/", handler: "~/server/middleware/get-ip.js" },

  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '歆弗过滤',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' } // 设置网站图标
      ]
    }
  },
  devServer: {
    port: 3001,
  },

})
