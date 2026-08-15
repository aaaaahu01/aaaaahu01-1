<template>
    <div class="person">
<!-- {{  }}文本插值不能用到html标签内部，标签内部动态绑定只能用 v-bind: ，简写 : -->
<!-- v-bind:是单向绑定，页面修改不影响数据 -->
        姓（只读）:<input type="text" v-bind:value="xing"><hr>
<!-- v-model:是双向绑定，页面修改同步修改数据 -->
        姓（双向）:<input type="text" v-model="xing"><hr>
        名:<input type="text" v-model="ming"><hr>
        <span>{{ fullName }}</span>
        <span>{{ fullName }}</span>
        <span>{{ fullName }}</span>
        <span>{{ fullName2() }}</span>
        <span>{{ fullName2() }}</span>
        <span>{{ fullName2() }}</span><hr>
        <button @click="changefullName1()">通过fullName1修改属性的值</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref,computed } from 'vue'

    let xing = ref('zhang')
    let ming = ref('san')
//computed用于属性计算，由于具有缓存，所以模板重复调用只需要计算一次
//此处computed()是函数调用，它的参数是一个函数，由于运算逻辑千奇百怪，所以用箭头函数包裹具体逻辑，computed()作为统一调用
//使用函数参数只可读，相当于get读取
    let fullName = computed(() => {
        console.log(1)
        return xing.value.slice(0,1).toUpperCase() + xing.value.slice(1) + ming.value
    })
//此处computed()的参数是一个对象,使用包含get，set的方法可读可写
    let fullName1 = computed({
//外部通过get读取属性计算结果
        get(){
            return xing.value.slice(0,1).toUpperCase() + xing.value.slice(1) + ming.value
        },
//外部通过set写入依赖属性的新值，形参val获取写入内容
        set(val){
            let [a1,a2] = val.split('-')
            if(a1) xing.value = a1
            if(a2) ming.value = a2
        }
    })
    function changefullName1(){
        fullName1.value = 'li-si'
    }
//computed不会像普通函数重复计算
    function fullName2(){
        console.log(2)
        return xing.value.slice(0,1).toUpperCase() + xing.value.slice(1) + ming.value
    }

</script>

<style>
.person {
    background-color: skyblue;
}
</style>