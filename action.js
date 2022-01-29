document.addEventListener("DOMContentLoaded", DisplayTime);

function DisplayTime(){
    let dateObject = new Date()
    let newDate= ""; 
    newDate = newDate + dateObject.toLocaleTimeString();
    document.getElementById('time-label').innerHTML = newDate;
    RefreshTime();
}

function RefreshTime(){
    let refresh=1000;
    mytime=setTimeout('DisplayTime()',refresh)
}
