
//Function to work out the differnce between an entered date and time and now
function workTime(dateOfBirth) {
    var ms=0, sec=0, min=0, hour=0, day=0, week=0, month=0, year=0;
    const now = new Date();
    const leaps = calcLeaps(dateOfBirth)
    ms = now-dateOfBirth;
    year +=leaps;
    console.log(ms);
    ms-=(leaps*31622400000)
    console.log(ms);
    while(ms>=31536000000){
        year++;
        ms-=31536000000;
    }
    while(ms>=5270400000){
        month+=2;
        ms-=5270400000;
    }
    while(ms>=2678400000){
        month++;
        ms-=2678400000;
    }
    while(ms>=2592000000){
        month++;
        ms-=2592000000;
    }
    while(ms>=604800000){
        week++;
        ms-=604800000;
    }
    while(ms>=86400000){
        day++;
        ms-=86400000;
    }
    while(ms>=3600000){
        hour++;
        ms-=3600000;
    }
    while(ms>=60000){
        min++;
        ms-=60000;
    }
    while(ms>=1000){
        sec++;
        ms-=1000;
    }
    string = (year + " Years, " + month + " Months, " + week + " Weeks, " + day + " Days, " + hour+ " Hours, " + min+ " Minutes and " + sec + " Seconds ago.");
    document.getElementById("time").innerHTML = string;
}
//Function to count the amount of leap days between a given date and now, and returns them
function calcLeaps(sent){
    const sentYear = sent.getFullYear();
    const now = new Date(2012, 2, 29, 0, 4, 0, 0);
    const curYear = now.getFullYear();
    var leaps = 0;
    for(i = sentYear + 1; i<curYear;i++){
        if(isLeap(i)){
            leaps++;
        }
    }
    //Calculates if the starting date is in a leap year and if the leap day has passed or not
    if(isLeap(sent.getFullYear())){
        if(sent.getMonth() <= 1){
            leaps++;
        }
    }
    //Calculates if the ending date is in a leap year and if the leap day has passed or not
    if(isLeap(now.getFullYear())){
        if(now.getMonth() > 1){
            leaps++;
        } else
        if(now.getMonth() === 1 && now.getDate() === 29){
            leaps++;
        }
    }
    return leaps;
}
//Function that returns true/false depending on if a year is a leap year or not
function isLeap(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return true;
            }
        }
        else{
            return true;
        }
    }
    return false;
}
function loop(){
    const dob = new Date(2004, 3,14,0,4,0,0);
    setInterval(function(){workTime(new Date(2004,3,14,0,4,0,0))}, 1000)
}
loop();