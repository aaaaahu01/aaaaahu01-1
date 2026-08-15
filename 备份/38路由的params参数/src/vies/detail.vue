<template>
<!-- 嵌套路由展示详情 -->
    <div>
        <h2>{{ route.params.id }}</h2>
        <h2>{{ route.params.title }}</h2>
        <h2>{{ route.params.content }}</h2>
    </div>
</template>

<script lang="ts" setup name="detail">
import { useRoute } from "vue-router";

    let route = useRoute()

</script>