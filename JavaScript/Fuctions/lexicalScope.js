function outerFunction(){
    let outerView="outer"
    function innerfunction(){
        let innerView ="inner";
        console.log(outerView);//global call
        console.log(innerView);//inner call
    }
    innerfunction();
}
outerFunction();

function makeCounter(){
    let count =0;
    return function(){
        count++;
        return count;
    };

}
const finalCounter = makeCounter();
console.log(finalCounter());//1
console.log(finalCounter());//2
console.log(finalCounter());//3
console.log(finalCounter());//4



//function scope (outer and inner)
//block scope(let and const in es6 javscript)