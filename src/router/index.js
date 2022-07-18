import { createRouter, createWebHistory } from "vue-router"
import { nextTick } from "vue"
import store from '@/store'
import Prism from 'prismjs'

export const notFoundRoute = {
    path: "/:pathMatch(.*)",
    meta: {
        level: -1,
    },
    component: () => import('@/single-page/not-found-page/index.vue')
}

export const titleArr = [
    '一、TypeScript 基础类型',
    '二、TypeScript 断言与守卫',
    '三、TypeScript 联合类型',
    '四、交叉类型',
    '五、TypeScript 函数',
    '六、TypeScript 接口',
    '七、接口与类型别名的区别',
    '八、TypeScript 类',
    '九、TypeScript 泛型',
    '十、泛型工具类型',
    '十一、TypeScript 类装饰器',
    '十二、TypeScript 属性装饰器',
    '十三、TypeScript 方法装饰器',
    '十四、TypeScript 参数装饰器',
    '十五、与Vue组合式API一起使用',
    '十六、与Vue Options API一起使用',
]
const array = Array.from(Array(titleArr.length).keys(), (item, key) => {
    return {
        path: `/${key + 1}`,
        name: key + 1,
        component: () => import(`@/single-page/${key + 1}.vue`),
        meta: {
            title: titleArr[key]
        },
    }
})

export const routes = [
    ...array,
    notFoundRoute,
    {
        path: '/',
        redirect: '/1',
    },
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
    nextTick(() => {
        Prism.highlightAll() 
    })
})

export default router
