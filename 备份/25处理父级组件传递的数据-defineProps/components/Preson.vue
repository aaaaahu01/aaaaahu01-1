<template>
    <div class="person">
        <h2>{{ list }}</h2>
        <ul>
<!-- li是形参，用于获取list的各个元素 -->
<!-- key必须使用v-bind动态绑定数据 -->
<!-- key不能绑定x.list.id，因为list没有id属性，这个属性是数组元素的内部属性 -->
            <li v-for="li in list" :key="li.id">{{ li }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { type presons } from "../types";
//1，调用defineProps()获取父级组件通过标签传来的键值对
//参数是包含一个个字符串的数组，这些字符串和标签属性需要保持一致
//由于每个setup只能出现一个defineProps()，所以注释简单的使用
    // defineProps(['a'])
//2，通过函数返回值获取键值对
//函数的返回值是包含键值对的对象
    // let x = defineProps(['a','list'])
//3，使用泛型限制类型
//泛型限制和函数参数限制只能写一种，推荐泛型，限制更严格
    // defineProps(['list'])
    // defineProps<{list:presons}>()
//4，传参的必要性
//添加一个问号
    // defineProps<{list?:presons}>()
//5，默认值
//调用withDefaults()，并在第二参数设置默认值
//如果默认值是非基本数据类型，必须使用工厂函数包裹
//工厂函数指用函数返回一个新对象或函数
//箭头函数是简写方式，工厂函数是设计理念
    withDefaults(defineProps<{list?:presons}>(),{
        list:() => [{id:'a1',name:'hu1',age:15}]
    })
</script>

<style scoped>
.person {
    background-color: skyblue;
}
</style>