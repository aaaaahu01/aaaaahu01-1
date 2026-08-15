<template>
    <div class="person">
        <h2>number1:{{ number1 }}</h2>
        <h2>number2:{{ number2 }}</h2>
        <button @click="changeNumber1()">修改number1</button>
        <button @click="changeNumber2()">修改number2</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref,watchEffect } from "vue";

    let number1 = ref(1)
    let number2 = ref(20)
    function changeNumber1(){
        number1.value += 1
    }
    function changeNumber2(){
        number2.value += 20
    }
//watchEffect()以被调用的形式出现，参数是包含具体操作的函数（副作用函数）
//watchEffect()追踪使用到的依赖（响应式数据），依赖变化自动执行副作用函数
    watchEffect(() => {
        if(number1.value >= 3 && number2.value >= 60) console.log('都被修改')
    })
</script>
    
<style>
.person {
    background-color: skyblue;
}
</style>