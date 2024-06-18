let arr = [
    ["john", 30]
    ["robert", 40],
    [
        ["amit", 45]
        ["sumit", 50]
    ]
]

console.log(arr[1][0])//robert
console.log(arr[0][1]);


//for loop
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }

}


//for each
arr.forEach(data=>{
    data.forEach(val=>{
      console.log(val)
    })
})


//for of
for(let ar of arr){
    for(i of arr){
        console.log(i);
    }
}


//for in
for(arr in arr){
    console.log(index +":"+arr(index))
}

