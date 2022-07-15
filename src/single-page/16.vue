<template>
    <div class="home-wrap mobile-wrap">
        <div class="title">{{titleText}}</div>
        <div>{{value}}</div>
        <div>{{book}}</div>
        <div>{{bookA}}</div>
        <div>{{greeting}}</div>
        <div>{{greetingUppercased}}</div>
        
<pre><code class="language-js">{{`// 代码示例
<script lang="ts">
import { defineComponent, PropType } from 'vue'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $titleArr: string[] // 为 globalproperties 扩充类型
    }
}

interface Book {
    title: string
    year: number
    author: string
}

export default defineComponent({
    props: {
        name: String,
        id: [Number, String],
        success: { type: String },
        callback: {
            type: <PropType<() => void>>Function,
        },
        bookA: {
            type: <PropType<Book>>Object,
            required: false,
            default: () => ({
                title: 'Arrow Function Expression',
            }),
            validator: (book: Book) => !!book.title
        },
        metadata: {
            type: null // metadata 的类型是 any
        },
    },
    emits: {
        addBook(payload: { bookName: string }) {
            // perform runtime 验证
            return payload.bookName.length > 0
        },
    },
    data() {
        return {
            value: 'hello world', // 自动推断类型
            book: <Book>{
                title: 'Ts-learning',
                year: 2022,
                author: 'Mob',
            },
        }
    },
    computed: {
        // 需要注解返回类型
        greeting(): string {
            return this.value + '!'
        },
        titleText(): string {
            return this.$titleArr[Number(this.$route.name)]
        },
        greetingUppercased: {
            get(): string {
                return this.greeting.toUpperCase()
            },
            set(newValue: string) {
                this.value = newValue.toUpperCase()
            },
        },
    },
    methods: {
        onSubmit() {
            this.$emit('addBook', {
                bookName: 'Learning TS',
            })
            // this.$emit('addBook', {
            //     bookName: 123 // 类型错误！
            // })
            // this.$emit('non-declared-event') // 类型错误！
        },
    },
    mounted() {
        
    },
})
</script>
`}}</code></pre>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $titleArr: string[] // 为 globalproperties 扩充类型
    }
}

interface Book {
    title: string
    year: number
    author: string
}

export default defineComponent({
    props: {
        name: String,
        id: [Number, String],
        success: { type: String },
        callback: {
            type: <PropType<() => void>>Function,
        },
        bookA: {
            type: <PropType<Book>>Object,
            required: false,
            default: () => ({
                title: 'Arrow Function Expression',
            }),
            validator: (book: Book) => !!book.title
        },
        metadata: {
            type: null // metadata 的类型是 any
        },
    },
    emits: {
        addBook(payload: { bookName: string }) {
            // perform runtime 验证
            return payload.bookName.length > 0
        },
    },
    data() {
        return {
            value: 'hello world', // 自动推断类型
            book: <Book>{
                title: 'Ts-learning',
                year: 2022,
                author: 'Mob',
            },
        }
    },
    computed: {
        // 需要注解返回类型
        greeting(): string {
            return this.value + '!'
        },
        titleText(): string {
            return this.$titleArr[Number(this.$route.name)]
        },
        greetingUppercased: {
            get(): string {
                return this.greeting.toUpperCase()
            },
            set(newValue: string) {
                this.value = newValue.toUpperCase()
            },
        },
    },
    methods: {
        onSubmit() {
            this.$emit('addBook', {
                bookName: 'Learning TS',
            })
            // this.$emit('addBook', {
            //     bookName: 123 // 类型错误！
            // })
            // this.$emit('non-declared-event') // 类型错误！
        },
    },
    mounted() {
        
    },
})
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
