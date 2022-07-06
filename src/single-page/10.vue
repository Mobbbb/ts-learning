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
        // 1、Partial<T> 将某个类型里的属性全部变为可选项 ?
        interface Todo {
            title: string
            desc: string
        }
        const todo: Partial<Todo> = {
            title: 'TS',
        }
        // Partial<Todo>的类型如下：
        // {
        //     title?: string | undefined;+
        //     description?: string | undefined;
        // }

        // 2、Record<K, T>  K: 'string | number | symbol' (对象属性名), T: 对像属性
        interface Person {
            name: string
        }
        const p1: Record<'x', Person> = {
            x: {
                name: 'Bob',
            }
        }

        // 3、Readonly<T> 传入的类型变为只读状态
        const p2: Readonly<Person> = {
            name: 'Mob',
        }
        // p2.name is readonly

        // 4、Required<T> 把传入的类型变为必填状态
        interface Person2 {
            name: string
            age?: number
        }
        const p3: Required<Person2> = {
            name: 'Jarry',
            age: 21, // 必填项
        }

        // 5、Pick<T, K> 选取传入类型的指定属性名
        interface IPerson {
            name: string
            age: number
        }
        const p4: Pick<IPerson, 'name'> = {
            name: '张三',
        }

        // 6、Omit<T, K> 在 T 中删除对应的 K
        const p5: Omit<IPerson, 'age'> = {
            name: '李四',
        }

        // 7、Exclude<T, U> 类型过滤
        type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // type T1 = 'c'
        type type1 = { type1: number, type2: number, type3: number }
        type type2 = { type1: number, type2: number }
        type T3 = Exclude<type2, type1> // type T3 = { type1: number, type2: number }
        type T4 = Exclude<type1, type2> // type T4 = never

        // 8、Extract<T, U> 从类型 T 中获取所有可以赋值给类型 U 的类型
        type T5 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // type T5 = 'a'

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
