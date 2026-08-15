<template>

    <div>
        <h2>{{ route.query.id }}</h2>
        <h2>{{ title }}</h2>
        <h2>{{ content }}</h2>
    </div>
</template>

<script lang="ts" setup name="detail">
    import { useRoute } from "vue-router";
    let route = useRoute()
//调用defineProps()直接使用参数
    defineProps(['id','title','content'])
</script>