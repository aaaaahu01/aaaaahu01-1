<template>
    <div class="person">
        <h2>情况一：对ref基本数据类型监视</h2>
        <h2>计算结果：{{ sun }}</h2>
        <button @click="changeSun()">计算</button>

        <h2>情况二：对ref对象类型监视</h2>
        <h2>人：{{ person.name }} {{ person.age }}</h2>
        <button @click="changeName()">修改姓名</button>
        <button @click="changeperson()">修改人</button>

        <h2>情况三：对reactive对象类型监视</h2>
        <h2>汽车：{{ car.brand }} {{ car.price }}</h2>
        <button @click="changebrand()">修改汽车名字</button>
        <button @click="changecar()">修改品牌</button>

        <h2>情况四：监视对象类型的特定属性 基本数据/对象</h2>
        <h2>监视对象的基本数据属性</h2>
        <h2>名字：{{ myson.mysonName }}</h2>
        <button @click="xiumysonName()">修改名字</button>
        <h2>监视对象的对象属性</h2>
        <h2>车库：{{ myson.mysonCar.mysonCar1 }} {{ myson.mysonCar.mysonCar2 }}</h2>
        <button @click="xiumysonCar1()">修改车库</button>
        <button @click="xiumysonCar2()">换第一辆车</button>

        <h2>情况五：监视多个数据/数组</h2>
        <h2>黑色：{{ color.blank }} 蓝色：{{ color.color_blue }}</h2>
        <button @click="changeColor_blank()">修改黑色</button>
        <button @click="changeColor_color_blue()">修改蓝色内部属性</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref,reactive,watch } from 'vue'
//情况一：对ref基本数据类型监视
    let sun = ref(0)
    function changeSun(){
        sun.value += 1
    }
//watch作为函数被调用，第一参数为监视目标（无需.value），第二参数是一个回调函数
//回调函数包含新值，旧值，清理函数三个参数，都可以任意命名，但位置不可变
//回调函数和清理函数都可以简写为箭头函数
//每监视到一次修改就执行一次回调函数，所以if判断才能正常运行
    let stop = watch(sun,(newValue) => {
        console.log(newValue)
//调用stop()会删除监视器
        if(newValue > 5) stop()
    })

//情况二：对ref对象类型监视
    let person = ref({
        name:'zhangsan',
        age:12
    })
    function changeName(){
        person.value.name += 1
    }
    function changeperson(){
        person.value = {
            name:'lisi',
            age:20
        }
    }
//普通监视只能监视对象整体是否改动
//watch第三参数可配置各种参数，配置deep后会监视对象内部属性的改动，包括深层属性
    watch(person,(newValue,oldValue) => {
//第二参数的新值和旧值指向对象，若改动对对象整体没有变化，那么新值的指向不变（和旧值指向相同）
        console.log('被修改','新值',newValue,'旧值',oldValue)
    },{deep:true})

//情况三：对reactive对象类型监视
    let car = reactive({
        brand:'baoma',
        price:100
    })
    function changebrand(){
        car.brand = 'dazhong'
    }
    function changecar(){
//Object.assign()只是批量修改对象的属性，没有换成新对象
        Object.assign(car,{
            brand:'benchi',
            price:200
        })
    }
//默认监视reactive对象内部属性的改动，包括深层属性
    watch(car,(xin,jiu) => {
        console.log('汽车被修改','新值',xin,'旧值',jiu)
    })

//情况四：监视对象类型的特定属性 基本数据/对象
    let myson = reactive({
        mysonName:'里三三',
        mysonCar:{
            mysonCar1:'奔驰',
            mysonCar2:'大众'
        }
    })
    function xiumysonName(){
        myson.mysonName = '绽放威威'
    }
    function xiumysonCar1(){
        //修改指向
        myson.mysonCar = {
            mysonCar1:'雅迪',
            mysonCar2:'劳斯莱斯'
        }
    }
    function xiumysonCar2(){
        //批量修改内部属性
        Object.assign(myson.mysonCar,{mysonCar1:'酷睿'})
    }
//监视对象的基本数据属性
//需要使用函数包裹
    watch(() => myson.mysonName,(xin,jiu) => {
        console.log('mysonName被修改','新值',xin,'旧值',jiu)
    })
//监视对象的对象属性
//监视对象可以不用函数包裹
//推荐使用函数包裹，但函数包裹不会监视深层属性，需要在第三参数配置deep
    watch(() => myson.mysonCar,(xin,jiu) => {
        console.log('mysonCAr被修改','新值',xin,'旧值',jiu)
    },{deep:true})

//情况五：监视多个数据/数组
    let color = ref({
        blank:'blank',
        wihte:1,
        color_blue:{
            blue1:'blue',
            blue2:2
        }
    })
    function changeColor_blank(){
        color.value.blank = 'blank1'
    }
    function changeColor_color_blue(){
        color.value.color_blue.blue2 += 1
    }
//使用数组包裹需要监视的属性
//color-普通对象，color.value-响应式对象，color_blue-普通对象
    watch([() => color.value.blank,() => color.value.color_blue.blue2],(xin,jiu) => {
        console.log('颜色被修改',xin,jiu)
    })
</script>

<style>
.person {
    background-color: skyblue;
}
</style>