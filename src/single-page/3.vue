<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{type}}</div>

<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、联合类型
        const combineType = (name: string | undefined) => console.log(name)
        let type: 1 | 2 | 3 = 1 // 字面量联合类型

        // 2、可辨识联合————①.可辨识、②.联合类型、③.类型守卫
        // ①.可辨识————要求联合类型中的每个元素都含有一个单例类型属性
        interface interfaceA {
            name: string, // 可辨识属性
            age: number,
        }
        interface interfaceB {
            name: string, // 可辨识属性
            phone: number,
        }
        const arr1: Array<interfaceA> = [{ name: 'Bob', age: 18 }, { name: 'Mob', age: 12 }]
        const arr2: Array<interfaceB> = [{ name: 'Bob', phone: 1888 }, { name: 'Mob', phone: 1383829 }]
        // ②.联合类型
        const arr3 = [...arr1, ...arr2]
        // ③.类型守卫
        // console.log(arr3[0].age) Error
        // 方法一，类型断言
        console.log('方法一: ', (<interfaceA>arr3[0]).age)
        // 方法二，in 类型守卫
        if ('age' in arr3[0]) {
            console.log('方法二: ', arr3[0].age)
        }
        // 方法三，is 类型守卫
        type interfaceAB = interfaceA | interfaceB
        const isInterfaceA = (item: interfaceAB): item is interfaceA => {
            return (<interfaceA>item).age !== undefined
        }
        if (isInterfaceA(arr3[0])) {
            console.log('方法三: ', arr3[0].age)
        }
        // 方法三通用型
        function isOfType<T>(
            target: unknown,
            prop: keyof T,
        ): target is T {
            return (<T>target)[prop] !== undefined
        }
        if (isOfType<interfaceA>(arr3[0], 'age')) {
            console.log('方法三通用型: ', arr3[0].age)
        }
        
        // 3、type 类型别名
        // 给已有类型取别名 和 定义一个新的类型 ( 搭配联合类型使用 )
        type str = string // 取别名
        type newType = string | number // 联合类型
        type eventNames = 'click' | 'scroll' | 'mouseout' // 字面量联合类型
        type othersType1 = { name: string } // 其他类型
        type othersType2 = [string, number] // 其他类型
        type othersType3 = () => void // 其他类型

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            type,
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
        // 1、联合类型
        const combineType = (name: string | undefined) => console.log(name)
        let type: 1 | 2 | 3 = 1 // 字面量联合类型

        // 2、可辨识联合————①.可辨识、②.联合类型、③.类型守卫
        // ①.可辨识————要求联合类型中的每个元素都含有一个单例类型属性
        interface interfaceA {
            name: string, // 可辨识属性
            age: number,
        }
        interface interfaceB {
            name: string, // 可辨识属性
            phone: number,
        }
        const arr1: Array<interfaceA> = [{ name: 'Bob', age: 18 }, { name: 'Mob', age: 12 }]
        const arr2: Array<interfaceB> = [{ name: 'Bob', phone: 1888 }, { name: 'Mob', phone: 1383829 }]
        // ②.联合类型
        const arr3 = [...arr1, ...arr2]
        // ③.类型守卫
        // console.log(arr3[0].age) Error
        // 方法一，类型断言
        console.log('方法一: ', (<interfaceA>arr3[0]).age)
        // 方法二，in 类型守卫
        if ('age' in arr3[0]) {
            console.log('方法二: ', arr3[0].age)
        }
        // 方法三，is 类型守卫
        type interfaceAB = interfaceA | interfaceB
        const isInterfaceA = (item: interfaceAB): item is interfaceA => {
            return (<interfaceA>item).age !== undefined
        }
        if (isInterfaceA(arr3[0])) {
            console.log('方法三: ', arr3[0].age)
        }
        // 方法三通用型
        function isOfType<T>(
            target: unknown,
            prop: keyof T,
        ): target is T {
            return (<T>target)[prop] !== undefined
        }
        if (isOfType<interfaceA>(arr3[0], 'age')) {
            console.log('方法三通用型: ', arr3[0].age)
        }
        
        // 3、type 类型别名
        // 给已有类型取别名 和 定义一个新的类型 ( 搭配联合类型使用 )
        type str = string // 取别名
        type newType = string | number // 联合类型
        type eventNames = 'click' | 'scroll' | 'mouseout' // 字面量联合类型
        type othersType1 = { name: string } // 其他类型
        type othersType2 = [string, number] // 其他类型
        type othersType3 = () => void // 其他类型

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            type,
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
