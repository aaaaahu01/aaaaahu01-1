<template>
    <div class="app">
        <div class="dao-hang">

            <a href="#/shou-ye" class="shou-ye">首页</a><hr>
<!-- replace设置这个访问不会留下历史记录 -->
            <RouterLink replace to="/shou-ye">首页</RouterLink><hr>
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