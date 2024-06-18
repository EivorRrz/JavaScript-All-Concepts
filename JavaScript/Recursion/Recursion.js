// recursion
//i to 10
for (let i = 0; i < 10; i++);


//recursive way
function printNumber(n) {
    if (n < n) {
        console.log(n);
        printNumber(n + 1)
    }
}

printNumber(5);//1,2,3,4