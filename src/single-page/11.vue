<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">十一、TypeScript 类装饰器</div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        // 1、基础用法 
        // 它是一个表达式
        // 该表达式被执行后，返回一个函数
        // 函数的入参分别为 target、name 和 descriptor
        // 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
        function Greeter(target: Function): void {
            target.prototype.greet = function(): void {
                console.log('Hello Mob!')
            }
        }
        @Greeter
        class Greeting {
            greet() {}
        }

        const myGreeting: Greeting = new Greeting()
        myGreeting.greet()

        // 2、类装饰器传参
        function MaleDecorator(sex: string) {
            return (constructor: Function) => {
                constructor.prototype.sex = sex
                constructor.prototype.greet = function(): void {
                    console.log(`A ${constructor.prototype.sex} says Hello!`)
                };
            }
        }

        @MaleDecorator('man')
        class Person {
            name: string
            constructor(name: string) {
                this.name = name
            }
            greet() {}
        }
        const man = new Person('Mob')
        man.greet()

        // 3、类装饰器重载构造函数
        function MyDecorator(target: any) {
            return class extends target {
                name = 'hello word'
                age = 2022
                showName() {
                    console.log('重载p2 showName方法')
                }
                showAge() {
                    console.log('重载p2 showAge方法')
                }
            }
        }

        @MyDecorator
        class Person2 {
            name: string
            age: number
            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
            showName() {
                console.log(this.name)
            }
            showAge() {
                console.log(this.age)
            }
        }

        const p = new Person2('诸葛亮', 20)
        console.log(p.name + ': ' + p.age)
        p.showName()

        // 4、类装饰器重载指定方法和属性
        function MyDecorator1<T extends new (...args: any[]) => any>(constructor: T) {
            return class extends constructor {
                name = 'hello world'
                showName() {
                    console.log('重载p3 showName方法')
                }
            }
        }

        @MyDecorator1
        class Person3 {
            name: string
            age: number
            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
            showName() {
                console.log(this.name)
            }
            showAge() {
                console.log(this.name + ': ' + this.age)
            }
        }

        const p1 = new Person3('司马懿', 22)
        p1.showName()
        p1.showAge()

        return {
            
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
