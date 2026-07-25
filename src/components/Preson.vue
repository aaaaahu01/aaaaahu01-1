<template>
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="showName()">name</button>
        <button @click="showAge()">age</button>
        <button @click="showTel()">tel</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Preson',
    data(){
        return {
            name:'a',
            age:14,
            tel:'12345678'
        }
    },
    methods:{
        showTel(){
            alert(this.tel)
        },
        showName(){
            this.name='A'
        },
        showAge(){
            this.age += 1
        }
    }
}
</script>

<style>
.person {
    background-color: skyblue;
}
</style>