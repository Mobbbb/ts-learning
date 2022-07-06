<template>
    <div class="nav-wrap">
        <div class="page-nav-wrap" :style="pageNavWrapStyle">
            <div class="el-menu-nav">
                <div v-for="item in navMenu" 
                    :class="activeNavIndex === item.path ? 'active-menu' : ''" 
                    :key="item.path" 
                    @click="clickItem(item.name)">
                    {{item.meta.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { routes } from '@/router'

export default {
    name: 'nav-menu',
    data() {
        return {
            routes,
        }
    },
    computed: {
        ...mapState('app', [
            'activeNavIndex',
            'mainWidth',
            'navHeight',
        ]),
        pageNavWrapStyle() {
            return {
                width: `${this.mainWidth.width * 100}%`,
                height: `${this.navHeight}px`,
            }
        },
        navMenu() {
            return this.routes.filter(item => item.name)
        },
    },
    methods: {
        clickItem(name) {
            this.$router.push({
                name,
            })
        },
    },
}
</script>

<style scoped>
.nav-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 2px 8px 1px rgba(100, 100, 100, 0.1);
}
.page-nav-wrap {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}
.el-menu-nav {
    display: flex;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
}
.el-menu-nav > div {
    height: 100%;
    line-height: 60px;
    padding: 0 12px;
    cursor: pointer;
    box-sizing: border-box;
    color: #909399;
    flex-shrink: 0;
}
.el-menu-nav > .active-menu {
    border-bottom: 2px solid #409eff;
    color: #303133;
}
</style>
