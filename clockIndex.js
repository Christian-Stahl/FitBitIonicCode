


// HEARTRATE
// Glöm ej att ge permission i package.json filen
// ---------------------------------------------------------------
import { HeartRateSensor } from "heart-rate";
import { me } from "appbit";

// Just for testing
if (!me.permissions.granted("access_heart_rate")) {
  console.log("We're not allowed to read a users' heart rate!");
}
else if (me.permissions.granted("access_heart_rate")) {
  console.log("Jag kan använda heart rate");
}


// function that will get your heart rate, do also create the text element myHeart
const evoHeart = document.getElementById("myHeart"); 
const hrm = new HeartRateSensor();
hrm.onreading = function() {
  evoHeart.text = ("♥ " + hrm.heartRate || 0);
  hrm.stop();
}
function updateOther() {
  hrm.start();   
}
setInterval(updateOther, 1000);



// This one is just for test
heartRateMonitor.onreading = function() {
  lastValueTimestamp = Date.now();
  heartRate = heartRateMonitor.heartRate;
  heartRateLabel.text = heartRate;
}
var now = Date.now();
var difference = (now - lastValueTimestamp) / 1000;
console.log("ts: " + lastValueTimestamp + " now: " + now);
console.log("ts diff: " + difference);
if (difference > 5) {
  heartRateLabel.text = "---";
  heartRateZoneLabel.text = "---";
}



// STEPS
//-----------------------------------------
// https://community.fitbit.com/t5/SDK-Development/today-adjusted-steps-seems-to-increase-by-1000-periodically/td-p/2240435



// dagens datum
//-----------------------------------------
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
  if(dd < 10) {
      dd = '0' + dd
  } 
  if(mm < 10) {
      mm = '0' + mm
  } 
let today = yyyy + '-' + mm + '-' + dd;
console.log("dagens datum: " + today );



// Visa batterinivån
//-----------------------------------------
import { battery } from "power";

const myBattery = document.getElementById("myBattery");
myBattery.text = `Batteri ${battery.chargeLevel}%`; // initialize on startup
battery.onchange = (charger, evt) => {
   myBattery.text = `${battery.chargeLevel}%`;
}


// Spinner
//-----------------------------------------
let spinner = document.getElementById("spinner");
  spinner.state = "enabled"; // Start
  setTimeout(function() {
    spinner.state = "disabled";  
    // Lägg in vad som ska hända här när spinnern är stoppad, efter 2 sek i detta fall
  }, 2000)


// Kolla veckodag, i detta exempel i en ticker funktion
//-----------------------------------------
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let weekDayNr = today.getDay(); // Kolla veckodagsnummer
   
     /* Uppmuntra om fre, lö el sön */
     if (weekDayNr == 5) {
        let weekDay = "yey, fredag i dag!"
         weekDayMsg.text = `${weekDay}`;
     }
     else if (weekDayNr == 6) {
        let weekDay = "Bästa dagen, lördag!"
         weekDayMsg.text = `${weekDay}`;
     }
     else if (weekDayNr == 7) {
        let weekDay = "Härliga söndag!"
         weekDayMsg.text = `${weekDay}`;
     }
     else {
     }


  
}



