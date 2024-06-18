function d(a, b) {
    try{
        if(b==0){
            throw new Error("cant divide")
        }
        else{
            console.log(a/b);
        }
    }catch(err){
        console.log(err.message)// this will basically print the try part here
        
    }
 
}
d(10,0)