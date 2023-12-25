let fs = require('fs');
fs.readFile('chocolate.txt','utf-8', function(err,data){
    data = data + 'my name is fatima'
    fs.writeFile('chocolate.txt',data, function(err){
        console.log(data);
    } )
    
})