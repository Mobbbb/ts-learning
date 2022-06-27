<template>
    <div class="home-wrap mobile-wrap">
        <div class="title" @click="openModal">三、TypeScript 联合类型、类型别名、交叉类型</div>
        <div>{{value}}</div>
    </div>
</template>

<script lang="ts">

export default {
    setup() {
        // 联合类型
        const combineType = (name: string | undefined) => {}

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
