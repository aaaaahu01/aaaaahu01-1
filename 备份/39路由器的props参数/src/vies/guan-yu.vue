<template>
    <div>
        <h2>感谢使用</h2>
    </div>
</template>

<script lang="ts" setup name="guan-yu">
    import { onMounted,onUnmounted } from "vue";
//通过路由使用的组件，不渲染时会直接卸载，需要时重新挂载，而不是不展示
    onMounted(() => {
        console.log('组件挂载')
    })
    onUnmounted(() => {
        console.log('组件卸载')
    })


</script>