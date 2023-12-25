let fs = require('fs');
fs.readFile('chocolate.txt','utf-8', function(err,data){
    data = data.replace(/\s+/g,' ').trim();
    fs.writeFile('chocolate.txt',data, function(err){
        console.log(data);
    } )
    
})