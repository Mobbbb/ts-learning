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
        function Log(target: Function, key: string, parameterIndex: number) {
            const functionLogged = key || target.prototype.constructor.name
            console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`)
        }

        class Greeter {
            greeting: string
            constructor(@Log phrase: string) {
                this.greeting = phrase
            }
        }

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
