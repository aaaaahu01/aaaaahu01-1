<template>
    <div class="person">
        <h2>名字{{ car1.name }} 价格{{ car1.price }}</h2>
        <button @click="jiangjia()">jiangjia</button>
        <button @click="pinpai()">pinpai</button>

        <h2>水果{{ shuiguo.name }} 价格{{ shuiguo.price }}</h2>
        <button @click="changeshuiguo()">shuiguo</button>
    </div>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue'

    let car1 = reactive({
        name:'奔驰',
        price:1000000
    })
    function jiangjia(){
        car1.price -= 10000
    }
    function pinpai(){
//实际vue渲染绑定的是响应式数据本身，也就是ref或reactive包裹的
//这两个修改仅仅只是car1的指向被修改，被绑定的数据没有修改
      // car1 = {
      // name:'宝马',
      // price:1500000
      // }
      
      //car1 = reactive({
      //name:'宝马',
      //price:1500000
      //})
//Object.assign()方法用于将可枚举的属性从一个或多个源对象复制到目标对象(第一个参数)
        Object.assign(car1,{
            name:'宝马',
            price:1500000
        })
    }

    let shuiguo = ref({
        name:'苹果',
        price:5
    })
    function changeshuiguo(){
//Object.assign()方法对ref也可行
      //Object.assign(shuiguo.value,{
      //    name:'香蕉',
      //    price:3
      //})
//更方便的做法是直接替换，因为shuiguo.value本就是一个响应式对象
        shuiguo.value = {
            name:'香蕉',
            price:3
        }
    }
//对于嵌套较多的对象，应当使用reactive
//同时，Object.assign()方法也只能修改第一层的属性，无法修改更深层的属性
</script>

<style>
.person {
    background-color: skyblue;
}
</style>