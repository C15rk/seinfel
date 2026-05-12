export default defineNuxtPlugin(nuxtApp => {
    // 获取 Pinia 实例
    const pinia = nuxtApp.$pinia;
    nuxtApp.$router.beforeEach((to, from, next) => {
             const nuxtStore = useNuxtStore(pinia);
             nuxtStore.changeRouterPath(to.path);
             nuxtStore.showNav()
        next();
    });
});
