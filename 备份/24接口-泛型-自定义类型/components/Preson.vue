<template>
    <div class="person">

    </div>
</template>

<script lang="ts" setup>
//type定义这个被导入的模块是一个类型
    import { type presonInter,type presons } from "../types"
//preson:presonInter（将这个类型用于规范）
    let preson:presonInter = {
        id:'1',
        name:'里斯',
        age:13
    }
//presonInter（对象类型）直接规范presonlist（数组）会出错
//Array在这里用作泛型对非响应式数据进行规范，接收多个类型作为参数共同规范
    let presonlist1:Array<presonInter> = [
        {id:'1',name:'王伟',age:23},
        {id:'2',name:'老刘',age:33},
        {id:'3',name:'张强',age:70}
    ]
//使用自定义类型规范
    let presonlist2:presons = [
        {id:'1',name:'王伟',age:23},
        {id:'2',name:'老刘',age:33},
        {id:'3',name:'张强',age:70}
    ]
</script>

<style scoped>
.person {
    background-color: skyblue;
}
</style>