<template>
<!-- 嵌套路由展示详情 -->
    <div>
        <h2>{{ route.query.id }}</h2>
        <h2>{{ route.query.title }}</h2>
        <h2>{{ route.query.content }}</h2>
        <h2>{{ query.content }}</h2>
    </div>
</template>

<script lang="ts" setup name="detail">
import { useRoute } from "vue-router";
import { toRefs } from "vue";
//调用useRoute()获取，键值对保存在query
    let route = useRoute()
    // 也可以使用toRefs解析出内容
    let {query} = toRefs(useRoute())

</script>