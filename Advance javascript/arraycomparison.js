function Arraycomparison(str1,str2){
    if (str1.length !== str2.length){
    return false;
    }
    else {
         var sortedarray1 = [];
         var sortedarray2 = [];
        //var sortedarray2 = str2.toLowerCase().split(",").sort().join()
        //var final1 = str1.toLowerCase().split(",").sort().join()
         for (var element1 in str1){
            // console.log(element1)
             const alphabet1 = str1[element1];
             var updatedstr1 = alphabet1.toLowerCase().split(',');
             sortedarray1.push(updatedstr1);
         }
         console.log(sortedarray1)
         var finalarray1 = sortedarray1.sort();
         var final1 = finalarray1.join();
        

         for (var element2 in str2){
            
             const alphabet2 = str2[element2];
             var updatedstr2 = alphabet2.toLowerCase().split(',');
             sortedarray2.push(updatedstr2);
         }
         var finalarray2 = sortedarray2.sort();
         var final2 = finalarray2.join();
         console.log(final1);
         console.log(final2);

        if (final1 === final2){
            return true;
        }
        else {
            return false;
        }
    };
};

var result = Arraycomparison('he3loi', 'ihelo3');
console.log(result);