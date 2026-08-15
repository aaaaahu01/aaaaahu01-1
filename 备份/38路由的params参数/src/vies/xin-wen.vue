<template>
    <!-- 导航区 -->
    <div>
        <ul>
            <li v-for="i in newslist" :key="i.id">
                <RouterLink :to="
                    {
                        // params参数只能通过name绑定路由
                        // 并且不能传递数组和对象
                        name:'详情',
                        params:{
                            id:i.id,
                            title:i.title,
                            content:i.content
                        }
                    }
                ">
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