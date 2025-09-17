'use strict'
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementsByClassName("ampm")

setInterval(() => {
    const time = new Date();
   let hours = String(time.getHours()).padStart(2,'0');
   let mins = String(time.getMinutes()).padStart(2,'0');
   let secs = String(time.getSeconds()).padStart(2,'0');
   hour.innerText = `${hours}`;
   min.innerText = `${mins}`;
   sec.innerText = `${secs}`
   let amPm = hours < 12? 'AM': "PM";
   hours = hours % 12 || 12;
   ampm.innerText = `${amPm}`;

   
    
},1000);

