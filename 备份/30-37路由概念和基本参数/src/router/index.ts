//引入路由器和路由模式
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
//引入组件
import guanyu from "../vies/guan-yu.vue";
import shouye from "../vies/shou-ye.vue";
import xinwen from "../vies/xin-wen.vue";
//引入子组件
import detail from "../vies/detail.vue";
//引用createRouter()创建路由器
const router = createRouter({
//配置路由模式
    //Hash模式适合管理端（兼容好，搜索差）
    // history:createWebHashHistory(),
    //History模式适合客户端（搜索好，兼容差）
    history:createWebHistory(),
//绑定路由
    routes:[
        {
            //匹配到/guan-yu路径，自动渲染guanyu这个组件
            path:'/guan-yu',
            component:guanyu
        },
        {
            path:'/shou-ye',
            component:shouye
        },
        {
            //可以配置路由的名字
            name:'新闻',
            path:'/xin-wen',
            component:xinwen,
            //嵌套路由(注意children的值是一个数组)
            children:[
                {
                    name:'详情',
                    //无需划线路径
                    path:'detail',
                    component:detail
                }
            ]
        }
    ]
})
//暴露路由器
export default router