//iterations
//for LOOP
for(let i = 0;i<=allFruits;i++){
    console.log(allFruits[i]);
}

//for of
for(let fruit of allFruits){
    console.log(fruit)
}

//for each
allFruits.forEach(function(fruit){
    console.log(fruit);
})


//FOR IN  this index and char are return type show that we can ge the values
for(let index in fruits){
    console.log(index + ":" + fruits[index])
}


//For Off
let grettings = "AMIT";
for (let char of grettings){
    console.log(char);
}