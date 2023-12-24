var para = 'my name is mudassir';
var arr1 = [];
var arr2 = [];
for (var x in para){
  var sor = para[x];
  arr1.push(sor);
}
var sortedarray = arr1.sort();

for (let i = 0; i < sortedarray.length ;i++){
  if (sortedarray[i] == sortedarray[i+1] || sortedarray[i+1] == sortedarray[i]){
    arr2.push(sortedarray[i]);
  }
}

for (let y in arr2){
  for (let j in arr1){
    if (arr2.includes(arr1[j]) == true){
      delete arr1[j]
    }
  }
}
console.log(arr1);


 






