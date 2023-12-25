let counter = 0;
//setInterval(() =>{console.log(counter++)},1000);


function counter(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            counter ++
            resolve(`value = ${value} counter = ${counter}`)
        })
    })
}
async function final(value){
    console.log(`value = ${value} counter = ${counter}`)
    const count = await counter(value)
    console.log(count);
}

for (let i = 0; i < 11; i++){
    final(i);
}