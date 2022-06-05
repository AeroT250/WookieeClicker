alert (" We hope that you have fun playing this game!");

// We ask for the user name now, or it won't work for some reason.

window.onload = function () {
var userName = prompt("What is your name?");
        
var name = document.getElementById("name");
 
if (userName==null || userName=== ""|| userName.replace(/\s/g,"") == "") {
name.innerHTML = "A Lost Tribe";
}
else {
name.innerHTML = userName + "'s Tribe";
}

// The "Daniel" easter egg.
if (userName==="Daniel") {
document.getElementById("Image").src='Images/Beta.svg'

document.getElementById("easterEgg").innerHTML = 
"Congrats! You've found an easter egg! Our first beta tester was also named Daniel. As a reward, you'll already know what wookie you'll get at 250,000 Wookies: The BETA wookie. This wookies trains more than 1,000 wookies per click.";
}


}

//Set the base number of cookies.
var totalClicks = 0;

//Code that executes on a click of the image

function cookieClick() {

totalClicks = totalClicks + 1;

  totalCookies.innerHTML = totalClicks;
  producerLevel.innerHTML = "Newbie Wookie"

// First upgrade - Amateur Wookie
if (totalClicks >= 10) {
  totalClicks+=1;

document.getElementById("Image").src='Images/200 clicks.svg'

document.body.style.backgroundColor = "Orange";

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Amateur Wookie";
 } 

// Second upgrade - Master Wookie
if (totalClicks >= 250) {
  totalClicks = totalClicks + 2;

document.getElementById("Image").src='Images/Master.svg'

document.body.style.backgroundColor = "Red";

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Master Wookie";
 } 

// Third upgrade - Grand Wookie
if (totalClicks >= 1600) {
  totalClicks = totalClicks + 4;

document.getElementById("Image").src='Images/Grand.svg'

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Grand Wookie";

document.body.style.backgroundColor = "Yellow";
 } 

// Fourth upgrade - Wookie Chieftain
if (totalClicks >= 4500) {
  totalClicks = totalClicks + 7;

document.getElementById("Image").src='Images/Chieftain.svg'

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Wookie Chieftain";

document.body.style.backgroundColor = "Lightgreen";
 } 

// 5th upgrade - Wookie Trooper
if (totalClicks >= 15000) {
  totalClicks = totalClicks + 15;

document.getElementById("Image").src='Images/Trooper.svg'

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Wookie Trooper";

document.body.style.backgroundColor = "pink";
 } 


// 6th upgrade - Gamer Wookie
if (totalClicks >= 25000) {
  totalClicks = totalClicks + 73;

document.getElementById("Image").src='Images/Gamer.svg'
totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Gamer Wookie";

document.body.style.backgroundColor = "darkblue";
 } 

// 7th upgrade - Cyber Wookie
if (totalClicks >= 100000) {
  totalClicks = totalClicks + 200;

document.getElementById("Image").src='Images/Cyber.svg'

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "Cyber Wookie";

document.body.style.backgroundColor = "gold";
 } 

// 8th upgrade - Beta Wookie
if (totalClicks >= 250000) {
  totalClicks = totalClicks + 1000;

document.getElementById("Image").src='Images/Beta.svg'

totalCookies.innerHTML = totalClicks;
producerLevel.innerHTML = "BETA Wookie";

document.body.style.backgroundColor = "white";
 } 
    
   }
