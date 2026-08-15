<template>
    <div class="app">
        <h2 ref="id1">上海</h2>
        <h2>南京</h2>
        <Preson ref="id2"/>
    </div>
</template>

<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue'
    import { ref,onMounted } from "vue";
//ref实例绑定HTML元素（绑定DOM对象）
    let id1 = ref()
    onMounted(() => {
        console.log(id1.value)
    })
//ref实例绑定组件元素（绑定组件对象），这个对象只包含子级组件暴露的属性
//父级组件只能查看子级组件暴露的属性
    let id2 = ref()
    onMounted(() => {
        console.log(id2.value)
    })
</script>

<style>
.app {
    background-color:aliceblue;
}
</style>