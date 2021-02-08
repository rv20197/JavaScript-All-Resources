console.clear()
var currentDay = 'Wed'

/*
if (currentDay == 'Mon'){
    console.log("Time is 10.00-6.00")
}
else if (currentDay == 'Tue'){
    console.log("Time is 10.30-6.30")
}

else if (currentDay == 'Wed'){
    console.log("Time is 9.00-6.00")
}

else if (currentDay == 'Thurs'){
    console.log("Time is 11.00-6.00")
}

else if (currentDay == 'Fri'){
    console.log("Time is 12.00-6.00")
}

else if (currentDay == 'Sat'){
    console.log("Time is 4.00-6.00")
}

else{
    console.log('Today GYM is closed')
}
*/

switch (currentDay) {
    case "Mon":
        console.log("Time is 10.00-6.00")
        break;
    
    case "Tue":
        console.log("Time is 10.30-6.30")
        break;
    
    case "Wed":
        console.log("Time is 9.00-6.00")
        break;

    case "Thurs":
        console.log("Time is 11.00-6.00")
        break;

    case "Fri":
        console.log("Time is 12.00-6.00")
        break;

    case "Sat":
        console.log("Time is 4.00-6.00")
        break;

    default:
        console.log('Today GYM is closed')
        break;
}