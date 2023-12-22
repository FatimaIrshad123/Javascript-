function totalspent(Transaction){
    var duplicates = new Set();
    Transaction.forEach(item => {
        duplicates.add(item.category);
    });
    var duplicatesarray = Array.from(duplicates);
    //console.log(duplicatesarray);
    var categoryobj = [];
    

    duplicatesarray.map(function(category,index){
    

        if (typeof category === 'string'){
            categoryobj.push({category:category , totalExpense:0});
            //console.log(categoryobj);
        };
        var items = Transaction.filter(function(item){
            return (item.category) === category;
            
        });
        var total = items.reduce(function(acc,item){
            return acc + item.price;
        },0);
        categoryobj[index].totalExpense = total;
    });
    return categoryobj;
};




var totalExpense = totalspent([
    {
        itemName: "Shoes",
        category: "garments",
        price: 100,
        
    },
    {
        itemName: "car",
        category: "auto",
        price: 1000,
        
    },
    {
        itemName: "Shoes",
        category: "garments",
        price: 100,
        
    },
    {
        itemName: "bike",
        category: "auto",
        price: 140,
        
    },
    {
        itemName: "ketchup",
        category: "food",
        price: 50,
        
    },
    {
        itemName: "potato",
        category: "food",
        price: 50,
        
    },
]);
console.log(totalExpense);