<template>
    <div class="app">
        <div class="dao-hang">
            <!-- 哈希路由模式自动前置一个/#/，引用路由需要补上 -->
            <a href="#/shou-ye" class="shou-ye">首页</a><hr>
            <!-- 更推荐RouterLink标签，无需手动补充 -->
            <!-- 字符串写法 -->
            <RouterLink to="/shou-ye">首页</RouterLink><hr>
            <!-- 对象写法 -->
            <!-- 要使用v-bind将“”的内容解析为js表达式 -->
            <RouterLink :to="{name:'新闻'}">新闻</RouterLink><hr>
            <RouterLink :to="{path:'/guan-yu'}">关于</RouterLink>
        </div>
        <div class="nei-rong">
            <!-- 引入<RouterView/>标签加载路由组件 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from "vue-router";

</script>

<style scoped>
.app {
    background-color:aliceblue;
}
</style>