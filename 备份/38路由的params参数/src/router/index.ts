
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
                    // 使用params必须在path占位
                    path:'detail/:id/:title/:content?',
                    component:detail
                }
            ]
        }
    ]
})

export default router