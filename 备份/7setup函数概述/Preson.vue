<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showName()">name</button>
        <button @click="showAge()">age</button>
        <button @click="showTel()">tel</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Preson',
//setup优先于data、methods、computed、watch等选项执行
    setup(){
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
//setup()的返回可以是一个函数，这个函数也能渲染页面
        return{
            name,
            age,
            showName,
            showAge,
            showTel
        }
    }
}
</script>

<style>
.person {
    background-color: skyblue;
}
</style>