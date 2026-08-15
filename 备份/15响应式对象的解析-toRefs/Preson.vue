<template>
    <div class="person">
<!-- 非响应式数据即使内存变化，模板也不会检测到，不会修改页面 -->
        <h2>名字{{ person.name }} 年龄{{ person.age }}</h2>
        <button @click="changeName()">修改名字</button>
        <button @click="changeAge()">修改年龄</button>
    </div>
</template>

<script lang="ts" setup>
    import { reactive,toRefs,toRef } from 'vue'

    let person = reactive({
        name:'张三',
        age:16
    })
//这只是把参数的值赋值给ab
  //let a = person.name
  //let b = person.age
//toRefs遍历reactive对象使用toRef返回一个个ref对象，这些对象绑定对应的响应式数据
//{ name,age }并不是对象，是解构语法，表示将特定参数绑定到toRefs的各个ref
    let { name,age } = toRefs(person)
//绑定特定数据
  //let { name } = toRefs(person)
    let nianling = toRef(person,'age')

    function changeName(){
//由于参数绑定的是ref，所以需要通过.vaiue才能访问响应式数据
        name.value += 1
    }
    function changeAge(){
        nianling.value += 1 
    }

</script>

<style>
.person {
    background-color: skyblue;
}
</style>