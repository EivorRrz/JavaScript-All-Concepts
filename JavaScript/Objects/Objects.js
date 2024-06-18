let amit1 = {
    name: "amit1",
    age: 21,
    school: "bjem2",
    "last name": 'mishra'
};
console.log(amit1[age])
console.log(amit1[school])
console.log(amit1["last name"])//mishra
console.log(amit1.name);//amit1



//for in loop
for (let i in amit1.keys) {
    console.log(amit1[i]);
}


//object inside array
let arr = [
    { user: 1, nam: "amit1" },
    { user: 2, nam: "amit2" },
    { user: 3, nam: "amit3" },
    { user: 4, nam: "amit4" },
    { user: 5, nam: "amit5" },
]
console.log(arr[0])

for (let i of arr) {
    console.log(i.nam);
}



//destructr
let total = [{ nam }, { user }] = arr;
console.log(total)
console.log(user)
console.log(nam)

