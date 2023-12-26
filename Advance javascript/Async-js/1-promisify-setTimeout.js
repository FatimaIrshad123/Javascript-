/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const prom = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello its me Fatima")
        } ,2000)
    })
    return prom;
}
wait().then(function(){
    console.log('My work is done')
})
//module.exports = wait;
