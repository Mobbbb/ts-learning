import { createRouter, createWebHistory } from "vue-router"
import store from '@/store'

export const homeRoute = {
    path: '/',
    name: '1',
    component: () => import('@/single-page/1.vue')
}

export const movieRoute = {
    path: "/2/",
    name: "2",
    component: () => import('@/single-page/2.vue')
}

export const summaryRoute = {
    path: "/3/",
    name: "3",
    component: () => import('@/single-page/3.vue')
}

export const notFoundRoute = {
    path: "/:pathMatch(.*)",
    meta: {
        level: -1,
    },
    component: () => import('@/single-page/not-found-page/index.vue')
}

export const routes = [
    homeRoute,
    movieRoute,
    summaryRoute,
    notFoundRoute,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from, failure) => {
    const { parent: toParentName } = to.meta
    const { parent: fromParentName } = from.meta
    store.commit('app/updateActiveNavIndex', to.path)
    // 重置搜索态，父子路由的切换无需重置
    if (store.state.app.searchFlag && from.name !== toParentName && to.name !== fromParentName) {
        // 清空输入框，重置搜索状态
        store.commit('app/updateInputValue', '')
        store.commit('app/updateSearchFlag', false)
    }
})

export default router
