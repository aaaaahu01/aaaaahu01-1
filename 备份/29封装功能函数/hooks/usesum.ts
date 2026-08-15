import { ref,computed,onBeforeMount } from "vue";
//export default将函数默认暴露
export default function(){
    let sum = ref(0)
    function add(){
        sum.value += 1
    }

//可以使用属性计算和生命周期函数
    let bigsum = computed(() => {
        return sum.value * 10
    })

    onBeforeMount(() => {
        sum.value += 1
    })
    

    //函数需要有返回，此处用对象封装
    return{sum,add,bigsum}
}