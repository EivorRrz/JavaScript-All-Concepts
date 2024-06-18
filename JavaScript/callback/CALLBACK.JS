function fun(val){
    console.log(val);

}
function add(a,b,callback){
    let sum =a+b;
    callback(sum);
}
add(5,10,fun)

function amit(a,b,callback){
    let diff =a-b;
    callback(diff)

}
amit(10,2,amit)



function aaam(a,b,callback){
    let div=a%b;
    callback(div);
}