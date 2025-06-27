 //Calculate boda fare
const baseFare = 50 //per km in sh
const fare = 15 //per km in sh

let input = prompt("Where to?");
let distance = Number(input);
//Fare calculation
function calculateFare(distance) {
    console.log("calculate fare for distance: " + distance + "km");
  //check for distance input
    if(distance <= 0) {
        console.error("Distance cannot be zero");
        return;
    }
    //Total fare calculation
    let totalFare = baseFare + (fare * distance);
    console.log("where to?: ${distance}km");
    console.log("enter vehicle: ${baseFare}sh");
    console.log("let's go: ${fare * distance}sh");
    console.log("Total: ${totalFare}");
    console.log("welcome");
} 
 
calculateFare(distance);