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
        // 1、基础用法
        // target: 对于静态方法是构造函数，普通方法是原型对象
        // key: 方法名称
        // descriptor: 方法描述
        // descriptor.value: 对于静态方法是构造函数，普通方法是原型对象
        // descriptor.writable: 方法是否可以被重写
        // descriptor.enumerable: 是否可以被枚举
        // descriptor.configurable: 是否可以改变、删除
        function get(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
            console.log('target:', target)
            console.log('key:', key)
            console.log('descriptor:', descriptor)

            const originalMethod = descriptor.value
            descriptor.value = (args: Request) => {
                args.url = 'http://test.com' + args.url
                originalMethod(args)
            }
        }

        interface Request {
            url: string
            header: string
            body: string
        }
        class HttpRequest {
            @get
            getAllData(request: Request) {
                console.log(request)
            }
        }

        let http = new HttpRequest()
        http.getAllData({
            url: '/getAllData',
            header: '请求头',
            body: '请求内容',
        })

        // 2、方法装饰器传参
        const get2: (path: string) => MethodDecorator = (path) => {
            return (
                target: Object,
                propertyKey: string | symbol,
                descriptor: PropertyDescriptor,
            ) => {
                const method = descriptor.value
                (function () {
                    method({ header: '这是请求头header', path: path, body: '请求内容' })
                })()
            }
        }

        interface Request2 {
            header: string
            path: string
            body: string
        }

        class HttpRequest2 {
            @get2("/getAll")
            getAllData(request?: Request2) {
                console.log(request)
            }


            @get2("/getList")
            getList(request?: Request2) {
                console.log(request)
            }
        }

        const http2 = new HttpRequest2()
        http2.getAllData()
        http2.getList()

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
