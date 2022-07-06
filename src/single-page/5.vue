<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{array}}</div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、参数类型和返回类型
        // 函数类型为自动推断
        const createUserId = function(name: string, id: number): string {
            return name + id
        }

        // 2、函数类型
        // 显式声明函数类型
        const createUserId1: (name: string, id: number) => string = function(name: string, id: number): string {
            return name + id
        }

        // 3、可选参数
        // 可选参数需放在普通参数的后面
        function createUserId2(name: string, id: number, age?: number): string {
            return name + id
        }

        // 4、剩余参数
        function push(array: any[], ...items: any[]) {
            items.forEach(item => {
                array.push(item)
            })
        }
        const array: any[] = []
        push(array, 1, 2, 3, 'string', true)

        // 5、函数重载
        // 定义多个函数类型
        function add(a: number, b: number): number
        function add(a: string, b: string): string
        // 重载实现
        function add(a: string | number, b: string | number) {
            if (typeof a === 'string' || typeof b === 'string') {
                return a.toString() + b.toString()
            }
            return a + b
        }
        // add(1, '2') // Error
        add(1, 1) // ok
        add('1', '1') // ok

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            array,
        }
    },
} 
</script>

<style scoped>
.home-wrap {
    background: #fff;
    padding: 0 20px;
    position: relative;
    border-top: 8px solid #fff;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
}
.title {
    cursor: pointer;
}
</style>
