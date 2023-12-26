/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
// wait1(1000).then(function(val){
//     console.log(val);
// })
// wait2(2000).then(function(val){
//     console.log(val);
// })
// wait3(3000).then(function(val){
//     console.log(val);
// })

Promise.all([wait1(),wait2(),wait3()]).then(function(value){
    console.log(value);
})

// Async Await without chaining :-

async function result(){
    let res1 = await wait1()
    let res2 = await wait2();
    let res3 = await wait3();
    console.log(res1,res2,res3);
    
}
result();