//create own custom object type:(refers to window object so thats why we use new)
function fun() {
    let fname = "mishra"
    this.fname = fname;
}
var obj = new fun();
console.log(obj.fname);


function amit() {
    let fname = "msihra"
    //return this.fname;//window object is undefined
    this.fanme = fname
}
console.log(new amit())
console.log(new amit.fname())
var amitobj = new amit();
console.log(amitobj.fname)
