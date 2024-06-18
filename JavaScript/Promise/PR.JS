//it contains both to produce and call the code
let promise = new Promise(function (myResolve, myReject) {
    //producing code(state)
    myResolve();//when successful
    myReject();//when reject

});
//consuming code
promise.then({//result
    //function(value) code if successful
    //function(value) code if some error
})
//so basically it supports only two states thats state and result

//A JavaScript Promise object can be:
// Pending=undefined(result)
//Fulfilled==result(value)
//Rejected==result(error)

//example
let promise1 = new Promise(function(resolve,reject){
    //producing state
    const x ="geeksforgeeks"
    const y ="1geeksforgeeks"
    if(x===y){
        resolve();
    }else{
        reject();
    }

});


//consuming state
promise1.
then(function(){
    console.log("success, you are a gekk")
}).
catch(function(){
    console.log("some error has ocured")
})

//2nd example
//producing state
let promise2 = new Promise(function(resolve,reject){
    resolve("amit is good boy");
})


//consuming state
promise2.
then(function(){
    console.log("successful");
}).catch(function(){
    console.log("error message is there")
})

let promise4 = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
promise.
then(function(){
    console.log(successMessage)
}).catch(function(){
    console.log(errorMessage);
})


