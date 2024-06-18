//sync

console.log("amit")
console.log("amit1")
console.log("amit2")
// this is a sync js(line by line)

//async
function aysnc(callback){
    setTimeout(()=>{
        console.log("aysnc function it is")
        callback;
    },2000)
}

//js is a (sync)