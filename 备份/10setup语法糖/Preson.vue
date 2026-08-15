<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showName()">name</button>
        <button @click="showAge()">age</button>
        <button @click="showTel()">tel</button>
    </div>
</template>
//setup语法糖，无需return手动暴露，无需components手动注册
<script lang="ts" setup>
    let name = '张三'
    let age = 18
    let tel = '123456789'

    function showName(){
        name = "李四"
       }
    function showAge(){
        age = 15
        console.log(age)
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