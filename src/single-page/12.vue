<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{obj}}</div>

<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        // 1、基础用法
        function logProperty(target: any, key: string) {
            delete target[key]

            const backingField = '_' + key

            Object.defineProperty(target, backingField, {
                writable: true,
                enumerable: true,
                configurable: true,
            })

            // property getter
            const getter = function(this: any) {
                const currVal = this[backingField]
                console.log(\`Get: \${key} => \${currVal}\`)
                return currVal
            }

            // property setter
            const setter = function(this: any, newVal: any) {
                console.log(\`Set: \${key} => \${newVal}\`)
                this[backingField] = newVal
            }

            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true,
            })
        }

        class Person {
            @logProperty
            public name: string

            constructor(name: string) {
                this.name = name
            }
        }

        const p = new Person('Mob')
        p.name = 'Bob'

        // 2、属性装饰器传参
        interface ObjJson {
            [index: string]: string | number
        }
        const obj: ObjJson = {}
        
        const modelToJsonKey: (jsonKey: string) => Function = (jsonKey) => {
            return (target: Object, key: string) => {
                Object.defineProperty(target, key, {
                    set: (value) => {
                        obj[jsonKey] = value
                    }
                })
            }
        }

        class Person2 {
            @modelToJsonKey('name')
            name: string
            @modelToJsonKey('age')
            age: number

            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
        }

        const p2 = new Person2('寒冰', 18)

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            obj,
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
        // 1、基础用法
        function logProperty(target: any, key: string) {
            delete target[key]

            const backingField = '_' + key

            Object.defineProperty(target, backingField, {
                writable: true,
                enumerable: true,
                configurable: true,
            })

            // property getter
            const getter = function(this: any) {
                const currVal = this[backingField]
                console.log(`Get: ${key} => ${currVal}`)
                return currVal
            }

            // property setter
            const setter = function(this: any, newVal: any) {
                console.log(`Set: ${key} => ${newVal}`)
                this[backingField] = newVal
            }

            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true,
            })
        }

        class Person {
            @logProperty
            public name: string

            constructor(name: string) {
                this.name = name
            }
        }

        const p = new Person('Mob')
        p.name = 'Bob'

        // 2、属性装饰器传参
        interface ObjJson {
            [index: string]: string | number
        }
        const obj: ObjJson = {}
        
        const modelToJsonKey: (jsonKey: string) => Function = (jsonKey) => {
            return (target: Object, key: string) => {
                Object.defineProperty(target, key, {
                    set: (value) => {
                        obj[jsonKey] = value
                    }
                })
            }
        }

        class Person2 {
            @modelToJsonKey('name')
            name: string
            @modelToJsonKey('age')
            age: number

            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }
        }

        const p2 = new Person2('寒冰', 18)

        const route = useRoute()
        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            obj,
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
