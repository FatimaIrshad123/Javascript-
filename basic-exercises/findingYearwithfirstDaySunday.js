for (var year = 2023 ; year <= 2050 ; year ++){
    var date = new Date(year,0,1);
    var day1 = date.getDay();

    if (day1 == 0){
        console.log('1st January is sunday on : ' +year)
    }   
}