var switchCounter = 0;
var stayCounter = 0;
for(var i=0; i<100; i++){
  var car = Math.ceil(Math.random() * 3);
  document.write("<p>The car is in door number " + car + "</p>");

  var choice = Math.ceil(Math.random() * 3);
  document.write("<p>The contestant chose door number " + choice + "</p>");
  var remove =  Math.ceil(Math.random() * 3);

  // while (remove === car || remove === choice) {
  //   remove = Math.ceil(Math.random() * 3);
  // } 

  do {
    var remove =  Math.ceil(Math.random() * 3);
  } while (remove === car || remove === choice);
  document.write("<p>The host removes door number " + remove + "</p>");

  if (choice === car){
    stayCounter++
    document.write("<p style = 'color:green;'>The contestant should stay </p>")
  } else {
    switchCounter++
    document.write("<p style = 'color:red;'>The contestant should switch</p>")
  }
  }

  document.write("<h2 style = 'color:green;'>Stay was coorect " + stayCounter + " times</h2>");
  document.write("<h2 style = 'color:red;'>Switch was coorect " + switchCounter + " times</h2>");

  var percentageStay = Math.round((stayCounter / 100) * 100);
  document.write("<h2 style = 'color:green;'>The percentage of stay is "  + percentageStay + "% </h2>");

  var percentageSwitch = Math.round((switchCounter / 100) * 100);
  document.write("<h2 style = 'color:green;'>The percentage of switch is "  + percentageSwitch + "% </h2>");
    


/* Chat GPT's Code */

  //   function simulateMontyHallProblem(strategy, simulations = 10000) {
  //     let wins = 0;
  
  //     for (let i = 0; i < simulations; i++) {
  //         // Randomly place the car behind one of the doors (0, 1, or 2)
  //         const carDoor = Math.floor(Math.random() * 3);
  
  //         // Player's initial choice, randomly choosing one of the doors
  //         const playerChoice = Math.floor(Math.random() * 3);
  
  //         // Host opens one of the remaining doors, revealing a goat
  //         let hostChoice;
  //         do {
  //             hostChoice = Math.floor(Math.random() * 3);
  //         } while (hostChoice === carDoor || hostChoice === playerChoice);
  
  //         // Determine the other unopened door
  //         let remainingDoor;
  //         for (let j = 0; j < 3; j++) {
  //             if (j !== playerChoice && j !== hostChoice) {
  //                 remainingDoor = j;
  //                 break;
  //             }
  //         }
  
  //         // Apply strategy: "switch" means pick the remaining door; "stay" means keep initial choice
  //         const finalChoice = strategy === "switch" ? remainingDoor : playerChoice;
  
  //         // Check if player wins by comparing final choice to carDoor
  //         if (finalChoice === carDoor) {
  //             wins++;
  //         }
  //     }
  
  //     // Calculate winning percentage
  //     const winRate = (wins / simulations) * 100;
  //     document.write(`Strategy: ${strategy.toUpperCase()}`);
  //     document.write(`Simulations: ${simulations}`);
  //     document.write(`Winning percentage: ${winRate.toFixed(2)}%`);
  
  //     return winRate;
  // }
  
  // // Run simulations for both strategies
  // const switchWinRate = simulateMontyHallProblem("switch");
  // const stayWinRate = simulateMontyHallProblem("stay");
  
    