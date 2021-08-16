

let promise = new Promise(function (resolve, reject) {
    reject();
    // resolve();
})

promise
    .then(function() {
        console.log("succes")
    })
    .catch(function() {
        console.log("failure")
    })
    .finally(function() {
        console.log("Done")
    })


// it nhat trong promise phai co then va catch 
