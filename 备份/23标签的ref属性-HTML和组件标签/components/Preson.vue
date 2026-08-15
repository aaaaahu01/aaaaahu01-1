<template>
    <div class="person">
<!-- 不推荐使用原生id属性，因为这个id要求全DOM唯一，不同组件容易产生重复，导致索引错误 -->
        <h2 id="1">北京</h2>
        <h2 ref="id1">重庆</h2>
    </div>
</template>

<script lang="ts" setup>
    import { ref,onMounted } from "vue";
//传统id属性
//调用onMounted()只是因为打印逻辑会在页面渲染前执行，所以调用onMounted()使逻辑滞后处理
    // onMounted(() => {
    //     console.log(document.getElementById('1'))
    // })
//ref实例绑定HTML元素
//创建一个ref实例唯一绑定 当前组件 的元素
//在父级组件创建同样的ref实例，打印观察到包含内容不同
    let id1 = ref()
    let a = 1
    let b = 'one'
    let c = 2
    onMounted(() => {
        console.log(id1.value)
    })
//ref实例绑定组件元素
//vue3定义子级组件对象只能通过defineExpose暴露内部属性
    defineExpose({id1,a,b})
</script>

<style scoped>
/* scoped属性用于定义局部样式，防止污染其他组件 */
.person {
    background-color: skyblue;
}
</style>