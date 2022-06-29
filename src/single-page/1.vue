<template>
    <div class="home-wrap mobile-wrap">
        <div class="title" @click="voidFn">一、TypeScript 基础类型</div>
        <div>{{value}}</div>
        <div>{{value5}}</div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        // 1、Number 类型
        const value: number = 0
        // 2、Boolean 类型
        const value1: boolean = true
        // 3、Stirng 类型
        const value2: string = ''
        // 4、Array 类型
        const value3: number[] = [1, 2, 3]
        const value4: Array<number> = [4, 5, 6]
        let [x, y, z] = value4 // 数组解构

        // 5、枚举, 默认0开始递增，可以是字符串或异构枚举
        enum Direction {
            A,
            B,
            C,
            D = 'D',
        }
        const value5: Direction = Direction.A

        // 6、any类型
        let value6: any = 666
        value6 = 'string'
        // value6.foo.bar // running error

        // 7、Unknown 类型
        let value7: unknown
        value7 = true
        value7 = 42
        value6 = value7
        // const valueNumber: number = value7 // compile error
        // value7.foo.bar // compile error

        // 8、Tuple 类型
        const tupleType: [string, number] = ['', 0]
        // const tupleType1: [string, number] = [0, ''] // compile error
        // const tupleType2: [string, number] = [''] // compile error

        // 9、Void 类型
        function voidFn(): void {
            console.log('click')
        }

        // 10、Never 类型
        type Foo = string | number
        function controlFlowAnalysisWithNever(foo: Foo) {
            if (typeof foo === "string") {
                // 这里 foo 被收窄为 string 类型
            } else if (typeof foo === "number") {
                // 这里 foo 被收窄为 number 类型
            } else {
                // check 用于检查foo是否为never，确保Foo类型的准确性
                const check: never = foo
                throw new Error(check)
            }
        }
        controlFlowAnalysisWithNever('1')

        return {
            value,
            value5,
            voidFn,
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
