let arr = ["a" , "b" , "c" , "e" , "a" , "b", "j" ,"k","l","m"];
let arr1 = arr.reduce((preValue, curValue) =>
    preValue + curValue
)

console.log(arr1)

//查看数组元素出现的次数
let names = ['peter', 'tom', 'mary', 'bob', 'tom','peter'];


let nameNum = names.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur] = 1
    }
    return pre
},{})
console.log(nameNum); //{ peter: 2, tom: 2, mary: 1, bob: 1 }

//数组去重
let newArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        return pre.concat(cur)
    }else{
        return pre
    }
},[])
console.log(newArr);// [1, 2, 3, 4]