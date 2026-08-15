<template>
    <div class="person">
        <h2>{{ sum }}</h2>
        <button @click="zengjia()">sum+1</button>
    </div>
</template>
    
<script lang="ts" setup>
    import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from "vue";

    let sum = ref(1)

    function zengjia() {
        sum.value += 1
    }
//页面初始渲染：模板 > 虚拟DOM > DOM > 页面
//创建期（创建虚拟DOM）
//setup语法糖自动加载创建期
    console.log('创建之前','+','创建完毕')
//周期函数被调用后，按时机执行回调函数的具体逻辑
//挂载期（创建DOM）
    onBeforeMount(() => {
        console.log('挂载之前')
    })
    onMounted(() => {
        console.log('挂载完毕')
    })
//页面更新渲染：更新整个虚拟DOM > 更新局部DOM > 页面
//更新期（更新整个虚拟DOM，根据新旧虚拟DOM不同而更新局部DOM）
    onBeforeUpdate(() => {
        console.log('更新之前')
    })
    onUpdated(() => {
        console.log('更新完毕')
    })
//页面卸载渲染：删除虚拟DOM > 删除DOM > 页面
//卸载期（卸载不需要的两种DOM）
    onBeforeUnmount(() => {
        console.log('卸载之前')
    })
    onUnmounted(() => {
        console.log('卸载完毕')
    })

</script>

<style scoped>
.person {
    background-color: skyblue;
}
</style>