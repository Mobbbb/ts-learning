<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、泛型语法
        function identity<T>(value: T): T {
            return value
        }
        console.log(identity<number>(66))
        console.log(identity('66')) // 自动推断

        // 2、泛型接口
        interface fn<T> {
            (arg: T): T
        }

        // 3、泛型类
        class GenericNumber<T> {
            zeroValue: T
            constructor(zero: T) {
                this.zeroValue = zero
            }

            add(x: T, y: T): T | number {
                if (typeof x === 'number' && typeof y === 'number') {
                    return x + y
                }
                return x
            }
        }

        const myGenericNumber = new GenericNumber<number>(0)
        console.log(myGenericNumber.add(1, 2))

        // 4、keyof
        interface stringArray {
            [index: string]: string
        }
        type stringArray1 = keyof stringArray // type 'string | number'

        interface stringArray3 {
            [index: number]: string
        }
        type stringArray4 = keyof stringArray // type 'number'

        // 5、in 遍历枚举类型
        type keys = 'a' | 'b' | 'c'
        type obj = {
            [key in keys]: any
        } // -> { a: any, b: any, c: any }

        // 6、条件类型 -> T extends U ? X : Y
        // 接收一个 泛型参数 T，如果 T 是布尔类型则返回 number 类型，不是则返回 undefined 类型
        type ConditionType<T> = T extends boolean ? number : undefined
        type ConditionType1<T extends string | boolean> = T extends boolean ? number : undefined
        type T1 = ConditionType<boolean> // number
        type T2 = ConditionType<string> // undefined
        // type T3 = ConditionType1<number> // Type 'number' does not satisfy the constraint 'string | boolean'

        // 7、ReturnType 获取函数类型返回值类型
        const add = (x: number, y: number) => x + y
        type T5 = ReturnType<typeof add> // number

        // 8、infer 在有条件类型的 extends 子语句中，允许出现 infer 声明，它会引入一个待推断的类型变量。 这个推断的类型变量可以在有条件类型的 true 分支中被引用。
        // 条件语句 -> T extends (...args: any) => infer R, 即如果T是如 (...args: any) => infer R 的函数类型
        // 结果一 -> R 类型, 只能在 true 分支中被引用，因为只有该分支能准确推断出 R 的类型
        // 结果二 -> any 类型
        // ReturnType 的实现：入参的泛型类型为函数类型，当入参满足 (...args: any) => infer R ，即入参为函数类型，则返回推断类型 R
        type ParamsType<T extends (...args: any) => any> = T extends (
            ...args: any[]
        ) => infer R ? R : any
        type T6 = ParamsType<typeof add> // number

        // 8、extends 对泛型的约束
        interface Lengthwise {
            length: number,
        }
        function loggingIdentity<T extends Lengthwise>(arg: T): T {
            console.log(arg.length)
            return arg
        }
        loggingIdentity({ length: 3 })

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
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
