// Calculate chai ingridients
function calculateChaiIngridients(serve) {
    //prompting user
    let input = prompt("How many cups would you like?");

    let numberofCups = Number(input);
        if(input <= 0 ) {
            console.error("Please enter number of cups");
            return;
        }

        // Ingridients of chai
    let water = numberofCups * 200; //in ml
    let milk = numberofCups * 50; //in ml
    let teaLeaves = numberofCups * 1; //tablespoon
    let sugar = numberofCups * 2;//teaspoons.

    //ingridients calculation for number of cups
      console.log("To make ${numberOfCups} cups of chai,");
      console.log("water: ${water}ml");
      console.log("milk: ${milk}ml");
      console.log("tea leaves: ${teaLeaves}tablespoons");
      console.log("sugar: ${sugar}teaspoons");
      console.log("Enjoy your tea!");
};

calculateChaiIngridients();