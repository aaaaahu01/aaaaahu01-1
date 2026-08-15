//interface定义一个接口规范，export将接口导出
export interface presonInter {
    id:string
    name:string
    age:number
}
//自定义一个类型
export type presons = Array<presonInter>
//子级组件同名interface会合并到一起，type不能合并且报错