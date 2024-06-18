const amit = setTimeout(()=>{
    if("this is the basic setTimeout"){
        return amit;
    }},3000)

clearTimeout(amit);
console.log("set timeout is locked")
    //its as async function.>>>>>>>>>s