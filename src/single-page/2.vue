<template>
    <div class="home-wrap mobile-wrap">
        <div @click="voidFn">二、TypeScript 断言与守卫</div>
        <div>{{strLength}}</div>
        <div>{{doubleX}}</div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        // 1、类型断言
        let someValue: any = "this is a string"
        let strLength: number = (<string>someValue).length
        let strLength1: number = (someValue as string).length

        // 确定赋值断言
        let x!: number
        initX()
        let doubleX: number = x * 2
        function initX() {
            x = 10
        }

        // is 谓词类型
        // 特点1: 返回类型谓词，如 s is string
        // 特点2: 包含可以准确确定给定变量类型的逻辑语句，如 typeof s === 'string'
        function isString(s:unknown):s is string{
            return typeof s === 'string'
        }

        interface interfaceA {
            name: string,
            age: number,
        }
        interface interfaceB {
            name: string,
            phone: number,
        }
        const arr1: Array<interfaceA> = [{ name: 'Bob', age: 18 }, { name: 'Mob', age: 12 }]
        const arr2: Array<interfaceB> = [{ name: 'Bob', phone: 1888 }, { name: 'Mob', phone: 1383829 }]
        const arr3 = [...arr1, ...arr2]
        // console.log(arr3[0].age) Error
        // 方法一
        console.log('方法一: ', (<interfaceA>arr3[0]).age)
        // 方法二
        if ('age' in arr3[0]) {
            console.log('方法二: ', arr3[0].age)
        }
        // 方法三
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

        return {
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
