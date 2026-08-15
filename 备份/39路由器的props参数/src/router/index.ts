
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";

import guanyu from "../vies/guan-yu.vue";
import shouye from "../vies/shou-ye.vue";
import xinwen from "../vies/xin-wen.vue";

import detail from "../vies/detail.vue";

const router = createRouter({

    history:createWebHistory(),

    routes:[
        {

            path:'/guan-yu',
            component:guanyu
        },
        {
            path:'/shou-ye',
            component:shouye
        },
        {

            name:'新闻',
            path:'/xin-wen',
            component:xinwen,

            children:[
                {
                    name:'详情',
                    // ?表示非必需项
                    path:'detail',
                    component:detail,
                    // 写法一（配置props）
                    // 使用params传递参数时，配置props后可以在子组件调用defineProps()直接接收键值对
                    // props:true
                    // 写法二（使用props函数）
                    // 使用query传递参数时，在函数中返回query对象，注意参数是这个路由（toute）
                    // params也可以这样写，但没必要
                    props(route){
                        return route.query
                    }

                }
            ]
        }
    ]
})

export default router