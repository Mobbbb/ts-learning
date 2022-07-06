<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{s1}}</div>
        <div>{{s2}}</div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、相同点————都可以用来描述对象的形状或函数签名
        // 接口
        interface point {
            x: number,
            y: number,
        }
        interface setPoint {
            (x: number, y: number): void,
        }

        // 类型别名
        type point1 = {
            x: number,
            y: number,
        }
        type setPoint1 = (x: number, y: number) => void

        // 2、相同点————属性合并(扩展、继承)
        // 接口
        interface partialPointX { x: number }
        interface point3 extends partialPointX { y: number }

        // 类型别名
        type partialPointX1 = { x: number }
        type point4 = partialPointX1 & { y: number }

        // 使用类型别名中扩展接口
        interface point5 extends partialPointX1 { y: number }
        // 使用接口扩展类型别名
        type point6 = partialPointX & { y: number }

        // 3、相同点————类可以实现接口或类型别名
        class SomePoint implements point {
            x = 1
            y = 1
        }
        class SomePoint2 implements point1 {
            x = 2
            y = 2
        }
        const s1 = new SomePoint()
        const s2 = new SomePoint2()

        // 4、不同点————类型别名可以用于一些其他类型
        type str = string // 取别名
        type newType = string | number // 联合类型
        type eventNames = 'click' | 'scroll' | 'mouseout' // 字面量联合类型
        type othersType2 = [string, number] // 元组

        // 5、不同点————接口别名可多次定义，并会被自动合并
        interface point7 { x: number }
        interface point7 { y: number }
        const point: point7 = { x: 1, y: 1 }

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            s1,
            s2,
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
