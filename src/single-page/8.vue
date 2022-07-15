<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <button @click="clickHandle">change</button>
        <div>{{name}}</div>
        <div>{{employee}}</div>
        <div>{{distance}}</div>

<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        let name = ref('mob')
        let distance = ref('')

        // 1、私有字段
        // 私有字段以 # 字符开头，有时我们称之为私有名称
        // 每个私有字段名称都唯一地限定于其包含的类
        // 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）
        // 私有字段不能在包含的类之外访问，甚至不能被检测到
        class Person {
            #name: string // 真正的私有属性

            constructor(name: string) {
                this.#name = name
            }

            greet() {
                return \`My name is \${this.#name}!\`
            }
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

        const employee = new Employee()
        employee.fullName = 'Cat'

        // 3、继承
        class Father {
            name: string
            private secret: string // 表面的私有属性，子类不继承
            protected money: number // 子类可继承

            constructor(_name: string) {
                this.name = _name
                this.secret = '不能说的秘密'
                this.money = 1000000
                Father.reverseName('Mob') // 构造函数中调用静态方法
            }

            move(distance: number = 0) {
                return \`\${this.name} moved \${distance}m.\`
            }

            // 静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数，例如创建或克隆对象的功能。
            static reverseName(name: string) { // 可继承
                return name.split('').reverse().join('')
            }

            static getReverseName(name: string) {
                return this.reverseName(name) // 静态方法调用同一个类中的其他静态方法，可使用this关键字
            }
        }

        class Son extends Father {
            constructor(name: string) {
                super(name)
                console.log(this.money) // ok
                // console.log(this.secret) // Error
            }
        }

        // 4、抽象类
        abstract class Human {
            name: string
            constructor(name: string) {
                this.name = name
            }

            abstract say(words: string) :void
        }
        class Man extends Human {
            constructor(name: string) {
                super(name)
            }

            say(words: string): void {
                console.log(\`\${this.name} says \${words}\`)
            }
        }

        const Adam = new Man('Adam')
        Adam.say('hi')

        // 5、重载
        // 感觉更像是一种抽象
        class ProductService {
            getProducts(): void
            getProducts(id: number, type: string): void
            getProducts(id?: number, type?: string) {
                if(typeof id === 'number') {
                    console.log(\`获取id为 \${id} 的产品信息\`);
                } else {
                    console.log(\`获取所有的产品信息\`);
                }  
            }
        }

        const clickHandle = () => {
            const mob = new Person(\`Mob${Math.random()}\`)
            name.value = mob.greet()
            // console.log(mob.#name) // Error 私有字段不能在包含的类之外访问

            const son = new Son('Bob')
            distance.value = son.move(Number(Math.random().toFixed(2)) * 100)
        }

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            name,
            employee,
            distance,
            clickHandle,
        }
    },
} 
</script>
`}}</code></pre>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        let name = ref('mob')
        let distance = ref('')

        // 1、私有字段
        // 私有字段以 # 字符开头，有时我们称之为私有名称
        // 每个私有字段名称都唯一地限定于其包含的类
        // 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）
        // 私有字段不能在包含的类之外访问，甚至不能被检测到
        class Person {
            #name: string // 真正的私有属性

            constructor(name: string) {
                this.#name = name
            }

            greet() {
                return `My name is ${this.#name}!`
            }
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

        const employee = new Employee()
        employee.fullName = 'Cat'

        // 3、继承
        class Father {
            name: string
            private secret: string // 表面的私有属性，子类不继承
            protected money: number // 子类可继承

            constructor(_name: string) {
                this.name = _name
                this.secret = '不能说的秘密'
                this.money = 1000000
                Father.reverseName('Mob') // 构造函数中调用静态方法
            }

            move(distance: number = 0) {
                return `${this.name} moved ${distance}m.`
            }

            // 静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数，例如创建或克隆对象的功能。
            static reverseName(name: string) { // 可继承
                return name.split('').reverse().join('')
            }

            static getReverseName(name: string) {
                return this.reverseName(name) // 静态方法调用同一个类中的其他静态方法，可使用this关键字
            }
        }

        class Son extends Father {
            constructor(name: string) {
                super(name)
                console.log(this.money) // ok
                // console.log(this.secret) // Error
            }
        }

        // 4、抽象类
        abstract class Human {
            name: string
            constructor(name: string) {
                this.name = name
            }

            abstract say(words: string) :void
        }
        class Man extends Human {
            constructor(name: string) {
                super(name)
            }

            say(words: string): void {
                console.log(`${this.name} says ${words}`)
            }
        }

        const Adam = new Man('Adam')
        Adam.say('hi')

        // 5、重载
        // 感觉更像是一种抽象
        class ProductService {
            getProducts(): void
            getProducts(id: number, type: string): void
            getProducts(id?: number, type?: string) {
                if(typeof id === 'number') {
                    console.log(`获取id为 ${id} 的产品信息`);
                } else {
                    console.log(`获取所有的产品信息`);
                }  
            }
        }

        const clickHandle = () => {
            const mob = new Person(`Mob${Math.random()}`)
            name.value = mob.greet()
            // console.log(mob.#name) // Error 私有字段不能在包含的类之外访问

            const son = new Son('Bob')
            distance.value = son.move(Number(Math.random().toFixed(2)) * 100)
        }

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            name,
            employee,
            distance,
            clickHandle,
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
