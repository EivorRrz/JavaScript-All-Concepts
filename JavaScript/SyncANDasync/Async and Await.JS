//Async functions implicitly return promises,
// while Await pauses the execution until the promise
//is resolved.
//before function write async before it 

//syntax
async function myfunction(){
    return "Hello";
}


const getData =async()=>{
    let data ="hello world";
    return data;
}
//return a promise
getData().
then(data=>{
    console.log(data);
})


//await keyword(wait for a promise to resolve)until 
//the promise return a result it stops

//syntax
let value  =await promise;

let doggyPromise =async()=>{
    let y = await "hello doggy"
    return y;
}

doggyPromise().then(y=>{
    console.log(y)
})


//async and await
async function amit(){
    let  sumit = await doggyPromise();
    return sumit;
}
amit();


//exmaple 3
function thrreP(){
    let firstModule =
    new Promise(function(resolve,reject){
        resolve("hello");
    });
    let secondModule =
    new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("geekforgeeks");
        },3000);
    });
    let combinedPromise =
    promise.all([firstModule,secondModule]);
    return combinedPromise;
}


async function display(){
    let data =await thrreP();
    return data;
   
}
display();
//output ['hello', "geekforgeeks"]


