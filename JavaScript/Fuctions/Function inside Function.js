function amit() {
    console.log("hey there is the main building")
    function sumit(value) {
        console.log(value + ":" + sumit(value));

    }
}


//function inside function
function amitCOnstant(){
    function amit() {
    console.log("hey there is the main building")
    function amit1(value) {
        console.log(value + ":" + amit1(value));

        amit1();

    }

}}
amitCOnstant()