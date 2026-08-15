import { reactive } from "vue";
import axios from "axios";

export default function(){
    let dogs = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_1912.jpg',
        'https://images.dog.ceo/breeds/pembroke/n02113023_5985.jpg'
    ])
//axios.get()发送网络请求
//async定义函数为异步函数，await是其自带的关键字
//await截停当前函数等待这一步执行完毕，但不会截停其他任意操作
    async function adddog(){
        //try-catch是一个异常捕获器，try包裹可能异常的代码，catch抛出异常
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            //axios.get()将数据存入data内部
            //push是数组自带方法，将可数个元素添加到数组末尾
            dogs.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    //注意被定义的数据只能在当前块级作用域起效，在其他地方引用会报错
    //  dogs.push(result.data.message)
    }

return{dogs,adddog}
}