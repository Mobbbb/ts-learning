<template>
    <div class="home-wrap mobile-wrap">
        <div @click="voidFn">一、TypeScript 断言与守卫</div>
        <div>{{strLength}}</div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    setup() {
        // 1、断言
        let someValue: any = "this is a string"
        let strLength: number = (<string>someValue).length

        return {
            strLength,
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
.home-content {
    padding: 20px 0 0 20px;
    position: relative;
}
.home-content::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
}
</style>
