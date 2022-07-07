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
