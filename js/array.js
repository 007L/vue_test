//数组去重
let arr = [1,1,2,2,3,3,3,34,5,6,7,8,8,8,65,4,4,3,44,4,444,4444,5666,6667,888,8999,22,334,45]

let newArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        return pre.concat(cur)
    }else{
        return pre
    }
},[])

function unique(arr){
    return Array.from(new Set(arr))
}

function unique_a(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}


// console.log(newArr)
//
// console.log(unique(arr))
// console.log(unique_a(arr))
//
// let arr1 = [1,2,3,4,5]
//
// console.log(arr1.splice(2,1))

//快速排序

let Sort=function(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){/*如果前面的数据比后面的大就交换位置*/
                let list=arr[i];
                arr[i]=arr[j];
                arr[j]=list;
            }
        }
    }
    return arr;
}

// console.log(Sort(arr))

var quickSort = function(arr) {
    if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);//取基准点
    var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
    var left = [];//存放比基准点小的数组
    var right = [];//存放比基准点大的数组
    for (var i = 0; i < arr.length; i++) { //遍历数组，进行判断分配
        if (arr[i] < pivot) {
            left.push(arr[i]);//比基准点小的放在左边数组
        } else {
            right.push(arr[i]);//比基准点大的放在右边数组
        }
    }
    //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr))