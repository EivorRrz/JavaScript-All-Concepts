
let amitSet =new Set([1,23,4,6,7,8,78]);
console.log(amitSet);
//duplicate values are ignored
amitSet.add(60);
amitSet.add(56);
amitSet.add("amit is good")

//Checking for Values
console.log(amitSet.has(60))//true

//remove
amitSet.delete(60);
console.log(amitSet); 


//remove all  values
let amitClear = amitSet.clear();
console.log(amitClear);//empty removes all the elements

//size
console.log(amitSet.size);

//iterations


//for each
amitSet.forEach(value=>{
    console.log(value)
});


//for of iterations

for(let value of amitSet)(
    console.log(value)
);


//converting To an Array
let myArray =Array.from(amitSet);
console.log(myArray);

//Removing Duplicates from an Array
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers); 



let amit=[1,23,56,23,56,4];
let uniAmit1 = Array.from(new Set(amit));
console.log(uniAmit1);//remove the duplicates



//set operations
//uninon>>
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let unionSets =new set([...setA,...setB]);
console.log(unionSets);

//intersection>>
let inter = new Set([...setA].filter(x=>{
    setB.has(x)
}));
console.log(inter);

//difference
let differnce =new Set([...setA.filter(value=!setB.has(value))]);
console.log(differnce);

