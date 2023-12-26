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

 async function result(){
    let res1 = await wait1()
    let res2 = await wait2();
    let res3 = await wait3();
    console.log(res1,res2,res3);
    
}
result();