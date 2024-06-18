// set interval
function amit(){
    let x = 100;
    if (x===100){
        return x++
    }
    else{
        return (err);
    }

}
setInterval(amit,1000);//calls every 1000 milisecond

//clear interval;
//to stop the interval we use clear interval;

let count =0 ;
let interval = setInterval(function(){
    count+=1;
    if(count===5){
        clearInterval(interval);
    }
   
})