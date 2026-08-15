<template>
    <div class="person">
//引入响应式数据不需要.value，直接使用即可
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showName()">name</button>
        <button @click="showAge()">age</button>
        <button @click="showTel()">tel</button>
    </div>
</template>

<script lang="ts" setup>
//引入ref函数实现响应式数据
    import { ref } from 'vue'

    let name = ref('张三')
    let age = ref(18)
    let tel = '123456789'

    function showName(){
//ref响应式数据修改值在script中需要使用.value
//因为ref把基本数据类型，调用存到了RefImpl函数的value属性中，对value的修改则涉及到RefImpl内部方法
        name.value = "李四"
    }
    function showAge(){
        age.value = 15
    }
    function showTel(){
        alert(tel)
    }

</script>

<style>
.person {
    background-color: skyblue;
}
</style>