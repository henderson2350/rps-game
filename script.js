// store their input in a variable
// computer chooses their answer --
// computer displays its answer
// tell them if they won or lost
// store w or l in variables
// keep stats in an object
// display stats
// ask if they want to play again

// ask the user if they want to play rps -confirm
window.alert("Welcome! Are you ready to play Rock Paper Scissors?")

// display the logic of the game--alert
window.alert("Reminder: paper > rock, rock > scissors, and scissors > paper. Type r, p, or s for your answer.")

// Choosing the computer's random answer
var answers = ["r","p","s"]
var randomNumber = Math.floor(Math.random() * 3)
console.log(randomNumber)
var computerSelection = choices[randomNumber]
console.log(computerSelection)

// ask for their first input --prompt
var userSelection = prompt("Choose r, p, or s")
console.log(userSelection)

// Data storage
var stats= {
    wins: 0,
    losses: 0,
    ties: 0,
}
