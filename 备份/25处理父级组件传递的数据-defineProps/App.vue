<template>
    <div class="app">
<!-- 向子级组件传值 -->
<!-- v-bind将属性转化为动态属性 -->
        <Preson a="文本" :list="presonlist"/>
    </div>
</template>

<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue'
    import { reactive } from "vue";
    import { type presons } from "./types"
//对响应式数据使用泛型规范
    let presonlist = reactive<presons>([
        {id:'a1',name:'hu1',age:15},
        {id:'a2',name:'hu2',age:20},
        {id:'a3',name:'hu3',age:55}
    ])
</script>

<style>
.app {
    background-color:aliceblue;
}
</style>