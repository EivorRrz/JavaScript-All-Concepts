callBackOperations(function (result1, err1) {
    if (err1) {
        console.log(err1);
    } else {
        callBackOperations(result1, function (result2, err2) {
            if (err2) {
                console.log(err2);
            } else {
                callBackOperations(result2, function (result3, err3) {
                    if (err3) {
                        console.log(err3)
                    } else {
                        callBackOperations(result3, function (result4, err4) {
                            if (err4) {
                                console.log(err4)
                            }
                        })
                    }
                })
            }
        })
    }
})

//so on it will go its a call back function
/// we can basically reomve all these hell by
//NamedFuntions
//promises
//async//Await
//modularization