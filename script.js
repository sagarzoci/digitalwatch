'use strict'
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementsByClassName("ampm")[0]; // ✅ pick the first element

setInterval(() => {
    const time = new Date();
    let hours = time.getHours(); // ✅ keep as number
    let mins = String(time.getMinutes()).padStart(2,'0');
    let secs = String(time.getSeconds()).padStart(2,'0');

    // ✅ determine AM/PM before converting to 12-hour format
    let amPm = hours < 12 ? 'AM' : 'PM';

    // ✅ convert to 12-hour format
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2,'0');

    // ✅ update DOM
    hour.innerText = `${hours}`;
    min.innerText = `${mins}`;
    sec.innerText = `${secs}`;
    ampm.innerText = `${amPm}`;
}, 1000);
