const seconds = document.querySelector(".seconds .number");
 minutes = document.querySelector(".minutes .number");
 hours = document.querySelector(".hours .number");
 days = document.querySelector(".days .number");


 let secValue = 11,
 minValue = 2,
 hourValue = 2,
 dayValue = 9;


 const timeFucntion = setInterval(() => {
    secValue--;

    if(secValue === 0){
        minValue--;
        secValue= 60;
     }

     if(minValue === 0){
        hourValue--;
        minValue= 60;
     }

     if(hourValue === 0){
        dayValue--;
        hourValue= 60;
     }

     if(dayValue === 0){
        clearInterval(timeFucntion);
     }

    console.log(secValue);
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue  < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue  < 10 ? `0${hourValue}` : hoursValue;
    days.textContent = dayValue  < 10 ? `0${dayValue}` : daysValue;
 },1000); //1000ms = 1s
