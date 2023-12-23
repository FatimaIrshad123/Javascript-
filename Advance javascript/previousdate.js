var day = 'monday';
    var date = new Date();
    var day1 = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    var find = day1.indexOf(day);

    var newday = date.getDay();
    var dat = newday - find + 7;
    
    var dat1 = newday - find;

    var date1 = date.getDate()-dat;
    var date2 = date.getDate()-dat1;
    
    var month = date.getMonth();
    var year = date.getFullYear();

    var newdate = new Date(year, month ,date1);
    var newdate1 = new Date(year, month ,date2);

    if (find < newday){
        console.log(newdate1)
    }
    else {
        console.log(newdate);
    }
    

console.log(date);

