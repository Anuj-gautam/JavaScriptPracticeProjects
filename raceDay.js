let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = ! true ;
let age = 18;

if (age > 18 && regEarly){
  raceNumber += 1000;
} 

if (age > 18 && regEarly) {
  console.log(`${raceNumber} will run at 09:30 am.`);
} else if (age > 18 && ! regEarly) {
  console.log(`${raceNumber} will run at 11:00 am.`); 
} else if (age < 18) {
  console.log(`${raceNumber} will run at 12:30 pm.`); 
} else{
  console.log(`${raceNumber} please report to helpdesk.`)
}
