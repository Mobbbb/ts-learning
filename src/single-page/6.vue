<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{Bob}}</div>

<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、对象的形状
        interface person {
            readonly name: string, // 只读
            age: number,
            skill?(x: number, y: number): void, // 可选方法
            [others: string]: any, // 任意属性，键名为string类型
            [others: number]: any, // 任意属性，键名为number类型
        }

        const Bob: person = {
            name: 'Bob',
            age: 12,
            sex: 1,
            1: '66',
            skill: (x: number, b: number) => 1 // 函数的参数名不需要与接口里定义的名字相匹配，也可不指定参数类型
        }

        // Error，键名为number类型的值的类型，必须是键名为string类型的值的类型的子集
        // interface A {
        //     [prop: string]: string,
        //     [index: number]: number,
        // }

        // Error，因为 [prop: string]: string 的存在，规定了其他"所有"的属性类型也必须是 string
        // interface B {
        //     1: number,
        //     [prop: string]: string,
        // }

        // Error，因为 [prop: number]: number 的存在，规定了其他"键名为number类型"的属性类型也必须是 number
        // interface C {
        //     1: string,
        //     [prop: number]: number,
        // }

        interface D { // ok，因为number是string的子集，所以 [prop: number]: number 不会影响到string类型的键名
            'name': string,
            [prop: number]: number,
        }

        // 2、函数签名
        interface setPoint {
            (x: number, y: number): void
        }
        let setFn: setPoint = () => {}

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            Bob,
        }
    },
} 
</script>
`}}</code></pre>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、对象的形状
        interface person {
            readonly name: string, // 只读
            age: number,
            skill?(x: number, y: number): void, // 可选方法
            [others: string]: any, // 任意属性，键名为string类型
            [others: number]: any, // 任意属性，键名为number类型
        }

        const Bob: person = {
            name: 'Bob',
            age: 12,
            sex: 1,
            1: '66',
            skill: (x: number, b: number) => 1 // 函数的参数名不需要与接口里定义的名字相匹配，也可不指定参数类型
        }

        // Error，键名为number类型的值的类型，必须是键名为string类型的值的类型的子集
        // interface A {
        //     [prop: string]: string,
        //     [index: number]: number,
        // }

        // Error，因为 [prop: string]: string 的存在，规定了其他"所有"的属性类型也必须是 string
        // interface B {
        //     1: number,
        //     [prop: string]: string,
        // }

        // Error，因为 [prop: number]: number 的存在，规定了其他"键名为number类型"的属性类型也必须是 number
        // interface C {
        //     1: string,
        //     [prop: number]: number,
        // }

        interface D { // ok，因为number是string的子集，所以 [prop: number]: number 不会影响到string类型的键名
            'name': string,
            [prop: number]: number,
        }

        // 2、函数签名
        interface setPoint {
            (x: number, y: number): void
        }
        let setFn: setPoint = () => {}

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            Bob,
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
