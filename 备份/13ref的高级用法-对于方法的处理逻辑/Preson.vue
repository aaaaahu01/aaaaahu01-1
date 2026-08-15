<template>
    <div class="person">
<!-- ref引入响应式数据不需要.value，直接使用即可，包括对象 -->
        <h2>名字{{ car1.name }} 价格{{ car1.price }}</h2>
        <button @click="jiangjia()">jiangjia</button>

        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="gaiming()">gaiming</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    let car1 = ref({
        name:'奔驰',
        price:1000000
    })
    function jiangjia(){
//ref包裹对象先创建RefImpl函数实例car1封装对象，再调用reactive创建Proxy函数实例car1.value（响应式对象）包裹响应式数据
//car1是外壳，只包含value属性；car1.value才是内壳，真正包含响应式数据
//所以无论基本数据类型还是对象类型，对于ref真正的响应式数据都要通过.value访问
        car1.value.price -= 10000
    }

    let games = ref([
        {id:1, name:'王者荣耀'},
        {id:2, name:'和平精英'},
        {id:3, name:'英雄联盟'},
    ])
    function gaiming(){
        if(games.value[0]) games.value[0].name = '王者荣耀2'
    }

</script>

<style>
.person {
    background-color: skyblue;
}
</style>