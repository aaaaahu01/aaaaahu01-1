export interface presonInter {
    id:string
    name:string
    age:number
//定义一个非必需项
    a?:number
}

export type presons = Array<presonInter>