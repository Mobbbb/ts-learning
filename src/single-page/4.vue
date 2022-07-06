<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{point}}</div>
        <div>{{abc}}</div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、& 属性的合并
        type PartialPointX = { x: number }
        type Point = PartialPointX & { y: number }
        const point: Point = {
            x: 0,
            y: 0,
        }

        // 2、同名基础类型属性的合并
        interface X {
            a: string,
            b: number,
        }
        interface Y {
            a: number,
            c: number,
        }
        type XY = X & Y
        // const xy: XY = { a: '?', b: 1, c: 2 } // a的类型为never

        // 3、同名非基础类型属性的合并
        interface D {
            d: boolean
        }
        interface E {
            e: string
        }
        interface F {
            f: number
        }
        interface _F {
            f: string
        }

        interface A {
            x: D
        }
        interface B {
            x: E
        }
        interface C {
            x: F
        }
        interface _C {
            x: _F
        }
        const abc: A & B & C = {
            x: {
                d: true,
                e: '1',
                f: 1,
            }
        }
        /*const _abc: A & C & _C = {
            x: {
                d: true,
                f: '', // f的类型为never
            }
        }*/

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            point,
            abc,
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
