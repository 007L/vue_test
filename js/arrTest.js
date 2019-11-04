//数组去重
var arr = [1,1,2,2,4,4,5,3,4,44,55,66]

var arr1 = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        return pre.concat(cur)
    }else{
        return pre
    }
},[])

var arr2 = Array.from(new Set(arr))

console.log(arr2)

//快排

let sort = function () {
    for (var i = 0 ; i <arr.length ;i++){
        for(var j =i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                let list = arr[i]
                arr[i] =arr[j]
                arr[j] =list
            }
        }
    }
    return arr
}

console.log(sort(arr))