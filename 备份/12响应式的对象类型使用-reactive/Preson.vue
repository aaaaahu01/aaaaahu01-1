<template>
    <div class="person">
        <h2>名字{{ car.name }} 价格{{ car.price }}</h2>
<!-- 按钮确实修改了内存，但是因为car对象不是响应式数据，页面不会重新渲染模板 -->
        <button @click="zhangjia()">zhangjia</button>

        <h2>名字{{ car1.name }} 价格{{ car1.price }}</h2>
        <button @click="jiangjia()">jiangjia</button>

        <ul>
<!-- games是数组对象，不包含内部定义的属性；game从数组中取出每个元素的实例对象（原对象），实例对象包含定义的各种属性 -->
<!-- v-for将数组内容高效渲染到虚拟DOM（模板语法 -> vue虚拟DOM -> 浏览器DOM -> 页面效果） -->
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="gaiming()">gaiming</button>
    </div>
</template>

<script lang="ts" setup>
    import { reactive} from 'vue'

    let car = {
        name:'宝马',
        price:1000000
    }
    function zhangjia(){
        car.price += 10000
    }
//car1对象被proxy代理，变成响应式数据
    let car1 = reactive({
        name:'奔驰',
        price:1000000
    })
    function jiangjia(){

        car1.price -= 10000
    }
//reactive包裹对象会调用reactive方法返回响应式对象，响应式对象不需要通过.value访问
    let games = reactive([
        {id:1, name:'王者荣耀'},
        {id:2, name:'和平精英'},
        {id:3, name:'英雄联盟'},
    ])
    function gaiming(){
        if(games[0]) games[0].name = '王者荣耀2'
    }
//ref包裹对象会调用reactive方法返回响应式对象，响应式对象需要通过.value访问
    let a = reactive({
        b:{
            c:1
        }
    })

</script>

<style>
.person {
    background-color: skyblue;
}
</style>