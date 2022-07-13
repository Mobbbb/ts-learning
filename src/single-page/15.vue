<template>
    <div class="home-wrap mobile-wrap">
        <div class="title" @click="openModal">{{titleText}}</div>
        <div>{{value}}</div>
        <div>{{year}}</div>
        <my-modal ref="modal"></my-modal>
        <input type="text" @change="handleChange">
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

const MyModal = defineComponent({
    template: '<div v-show="isContentShown">show</div>',
    setup() {
        const isContentShown = ref(false)
        const changeStatus = () => (isContentShown.value = !isContentShown.value)
        return {
            isContentShown,
            changeStatus,
        }
    },
})

interface Book {
    title: string,
    year?: number,
}

export default {
    components: {
        MyModal,
    },
    setup() {
        const route = useRoute()

        // ref 类型声明
        const value = ref(0) // 根据初始值推断类型
        // 声明复杂类型
        let year = ref<string | number>('2020')
        year.value = 2022 // ok

        // reactive 类型声明
        const book = reactive<Book>({ title: 'Learning', year: 2022 })
        const book1: Book = reactive({ title: 'Learning', year: 2022 })
        const book2 = reactive({ title: 'Learning', year: 2022 }) as Book

        // computed 类型声明
        const doubleCount = computed(() => value.value * 2) // 根据返回值自动推断类型
        // const result = doubleCount.value.split('') // Error

        // 为模板引用添加类型
        const modal = ref<InstanceType<typeof MyModal>>()
        const openModal = () => {
            // modal.value.changeStatus() // Error
            modal.value?.changeStatus()
        }

        // 为事件处理添加类型
        const handleChange = (e: Event) => {
            console.log((<HTMLInputElement>e.target).value)
        }

        const routeIndex: number = Number(route.name)
        const titleText = getCurrentInstance()?.appContext.config.globalProperties.$titleArr[routeIndex - 1]
        return {
            titleText,
            modal,
            value,
            year,
            openModal,
            handleChange,
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
