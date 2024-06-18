fetch("myfile.txt")
    .then(response => {
        return response.text();

    })
    .then(data => {
        console.log(data);
    })


    
fetch("amitVal.txt").then(
    response => {
        return response.text();
    }
).then(data => {
    console.log(data);
})