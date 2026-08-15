<template>
    <div class="app">
        <button @click="showApp()">卸载Preson</button>
        <Preson v-if="q" />
    </div>
</template>

<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue'

    import { ref,onMounted } from "vue"
    let q = ref(true)
    function showApp(){
        q.value = false
    }
//父组件的前周期函数先于子组件执行，后周期函数则相反
//因为DOM树的生成算法是深度优先
    onMounted(() => {
        console.log('父组件挂载完毕')
    })
</script>

<style scoped>
.app {
    background-color:aliceblue;
}
</style>