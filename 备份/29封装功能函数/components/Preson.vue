<template>
    <div class="person">
<!-- vue更新的最小单位是组件 -->
        <h2>普通值{{ sum }}</h2>
        <h2>大值{{ bigsum }}</h2>
<!-- 点击按钮后不是只更新sum而是更新整个组件，所有bigsum也会更新 -->
        <button @click="add()">sum+1</button>

        <img v-for="dog in dogs" :key="dog" :src="dog">
        <button @click="adddog()">再来一张dog</button>
    </div>
</template>
    
<script lang="ts" setup>
//hooks的概念就是把功能封装进函数，其他组件需要时再把函数导入并结构出来
//函数导入
    import usedog from "../hooks/usedog";
    import usesum from "../hooks/usesum";
//解构
    const {dogs,adddog} = usedog()
    const {sum,add,bigsum} = usesum()

</script>

<style scoped>
.person {
    background-color: skyblue;
}
img {
    width: 100px;
}
</style>