function myClock(){
    let time=new Date();
    // console.log(time);
    
    let year=time.getFullYear();
    let month=time.getMonth();
    let day=time.getDay();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    // let msec=time.getMilliseconds();


     //Converting to 12 hours;
    let hour1;
    if(hour>12 && hour<24 ){
    hour1=hour%12;
    }

    else{
        hour1=hour;
    }
    
    // Assigning Names To Months

    let month1;
    if(month==0){
        month1='Jan';
    }
    else if(month==1){
        month1='Feb';
    }
    else if(month==2){
        month1='March';
    }
    else if(month==3){
    month1='April';
    }
    else if(month==4){
        month1='May';
    }
    else if(month==5){
    month1='Jun';
    }
    else if(month==6){
        month1='July';
    }
    else if(month==7){
        month1='Aug';
    }
    else if(month==8){
        month1='Sept';
    }
    else if(month==9){
        month1='Oct';
    }
    else if(month==10){
        month1='Nov'
    }
    else if(month==11){
        month1='Dec'
    }

    // Assigning Names to Days 

    let  day1;
    if(day==0){
        day1="Sunday"
    } else if(day==1){
        day1="Monday";
    }
    else if(day==2){
        day1="Tuesday";
    }
    else if(day==3){
        day1="Wednesday";
    }
    else if(day==4){
        day1="Thursday";
    }
    else if(day==5){
        day1="Friday";
    }
    else if(day==6){
        day1="Saturday";
    }

   
// Setting Am and Pm

 let ap;
 if(hour>=12){
    ap="PM";
 }
 else
 {
    ap='AM';
 }

document.getElementById('ap').innerHTML=ap;
    
    
document.getElementById('year').innerHTML=year;
document.getElementById('month').innerHTML=month1;
document.getElementById('day').innerHTML=day1;
document.getElementById('hour').innerHTML=hour1;
document.getElementById('min').innerHTML=min;
document.getElementById('sec').innerHTML=sec;
}
    
    setInterval(myClock,1000);
    
    myClock();


    // console.log(year);
    // console.log(month1);
    // console.log(day1);
    // console.log(hour);
    // console.log(min);
