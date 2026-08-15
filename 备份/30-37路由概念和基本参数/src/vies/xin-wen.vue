<template>
    <!-- 导航区 -->
    <div>
        <ul>
            <li v-for="i in newslist" :key="i.id">
                <!-- 写法一 -->
                <!-- <RouterLink :to="`/xin-wen/detail?id=${i.id}&title=${i.title}&content=${i.content}`">{{ i.title }}</RouterLink> -->
                <!-- 写法二 -->
                <!-- 一定要加v-bind，第一参数是路由目标，第二参数是传递的键值对 -->
                <RouterLink :to="{
                    path:'/xin-wen/detail',
                    // v-bind把内容标记为js表达式然后被解析，所以注释方法也是js的
                    // 或者通过name传递
                    query:{
                        id:i.id,
                        title:i.title,
                        content:i.content
                    }
                }">
                    {{ i.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <!-- 内容区 -->
    <div>
        <RouterView></RouterView>
    </div>
</template>
    
<script lang="ts" setup name="xin-wen">
    import { reactive } from "vue";
    import { RouterView,RouterLink } from "vue-router";

    const newslist = reactive({
        //嵌套对象也要作为一个键的值，构成键值对
        // {id:1,title:'xinwun1',content:'xinwen1内容'}
        news1: { id: 1, title: "xinwun1", content: "xinwen1内容" },
        news2: { id: 2, title: "xinwun2", content: "xinwen2内容" }
    })
</script>