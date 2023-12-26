/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    let p1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve(new Date().getSeconds())
        } ,1000)
    })
    return p1;
}

 function wait2(t) {
    let p1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve(new Date().getSeconds())
        } ,2000)
    })
    return p1;
 }

 function wait3(t) {
    let p1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve(new Date().getSeconds())
        } ,3000)
    })
    return p1;
 }

 Promise.all([wait1(),wait2(),wait3()]).then(function(value){
    console.log(value);
})