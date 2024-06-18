const fruits = ['apple', 'banana', 'orange'];

let numbers =["amit","sumit","vishal"];

//indexing particular
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[0])

//modify
fruits([1])="bananan";
console.log(fruits);

//push
fruits.push("strawbery")
console.log(fruits);


//pop
fruits.pop();
console.log(fruits);



//shifts;
fruits.shift();
console.log(fruits);

//unshift:
fruits.unshift("watermelon")
console.log(fruits);

//length
console.log(fruits.length);


//concat:
let moreFruits=["elderberry","fig"];
let allFruits = moreFruits.concat(fruits);
console.log(allFruits);


//slice shallow copy
let someFruits = allFruits.slice(1,3);
console.log(someFruits);

//splice
allFruits.splice(1,2,"citrus");
console.log(allFruits);

//forEach
allFruits.forEach(function(fruit) {
    console.log(fruit);
});


amitAllThings.forEach(function(amitNew){
    console.log(amitNew);

});

//map 
let upperCaseFruits =allFruits.map(function(fruit){
    return fruit.toUpperCase();
})


//filter particular target one>>>>
let StartsE = allFruits.filter(function(fruit){
    return fruits.startsWith("E");


})
console.log(StartsE);

//reduce Single OUtpuit
let ToalLength = allFruits.reduce(function(total,fruit){
    return total +fruit.length;
    
})
console.log(ToalLength);

