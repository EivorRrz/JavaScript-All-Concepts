class mathUtil{
    static add(a,b){
        return a+b;

    }
}
console.log(mathUtil.add(5,3));

//Static Property

class  Config{
    static ApiUrl= "'https://api.example.com';"
}
console.log(Config.ApiUrl);