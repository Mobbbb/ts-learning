<template>
    <div class="home-wrap mobile-wrap">
        <div>{{titleText}}</div>
        <div>{{strLength}}</div>
        <div>{{doubleX}}</div>

<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、类型断言
        let someValue: any = "this is a string"
        let strLength: number = (<string>someValue).length
        let strLength1: number = (someValue as string).length

        // 2、确定赋值断言
        let x!: number
        initX()
        let doubleX: number = x * 2
        function initX() {
            x = 10
        }

        // 3、类型守卫
        // is 谓词类型
        // 特点1: 返回类型谓词，如 s is string
        // 特点2: 包含可以准确确定给定变量类型的逻辑语句，如 typeof s === 'string'
        function isString(s:unknown):s is string{
            return typeof s === 'string'
        }

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            strLength,
            doubleX,
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
        // 1、类型断言
        let someValue: any = "this is a string"
        let strLength: number = (<string>someValue).length
        let strLength1: number = (someValue as string).length

        // 2、确定赋值断言
        let x!: number
        initX()
        let doubleX: number = x * 2
        function initX() {
            x = 10
        }

        // 3、类型守卫
        // is 谓词类型
        // 特点1: 返回类型谓词，如 s is string
        // 特点2: 包含可以准确确定给定变量类型的逻辑语句，如 typeof s === 'string'
        function isString(s:unknown):s is string{
            return typeof s === 'string'
        }

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            strLength,
            doubleX,
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
</style>
