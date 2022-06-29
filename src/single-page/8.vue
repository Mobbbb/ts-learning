<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">八、TypeScript 类</div>
        <button @click="getName">changeName</button>
        <div>{{name}}</div>
        <div>{{employee}}</div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    setup() {
        let name = ref('mob')

        // 1、私有字段
        class Person {
            #name: string

            constructor(name: string) {
                this.#name = name
            }

            greet() {
                return `My name is ${this.#name}!`
            }
        }
        const getName = () => {
            const mob = new Person(`Mob${Math.random()}`)
            name.value = mob.greet()
            console.log('#name' in mob) // 无法被检测
            // console.log(mob.#name) // Error 私有字段不能在包含的类之外访问
        }

        // 2、访问器
        class Employee {
            private _fullName!: string

            get fullName(): string {
                return this._fullName
            }

            set fullName(newName: string) {
                if (newName.indexOf('C') > -1) {
                    this._fullName = newName
                }
            }
        }

        let employee = new Employee()
        employee.fullName = 'Cat'

        return {
            name,
            employee,
            getName,
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
