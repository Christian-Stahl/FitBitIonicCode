


// HEARTRATE
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






