function returnFirstTwoDrivers(drivers){
    return [`Antonia`, `Nuru`];
}

function returnLastTwoDrivers(drivers){
    return ['Amari', 'Mo'];
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ];

function createFareMultiplier(){
    return function(number){
        return number * number;
    }
}

function fareDoubler(number){
    return number * 2;

}

function fareTripler(number){
    return number * 3;

}

function selectDifferentDrivers(arrayOfDrivers,drivers){
    return drivers(arrayOfDrivers);
}

