// ROCK PAPER SCISSORS GAME

// ask the user if they want to play rps -confirm
window.alert("Welcome! Are you ready to play Rock Paper Scissors?")
window.alert("Reminder: paper > rock, rock > scissors, and scissors > paper. Type r, p, or s for your answer.")

function rpsGame() {
    var userSelection = window.prompt("Choose r, p, or s")
    console.log("user selection is" , userSelection)

    // Choosing the computer's random answer
    var answers = ["r","p","s"]
    var randomNumber = Math.floor(Math.random() * 3)
    console.log("random number is", randomNumber)
    var computerSelection = answers[randomNumber]
    console.log("computer selection is", computerSelection)

    var stats= {
        wins: 0,
        losses: 0,
        ties: 0,
    }

    // testing to see who won with conditionals
    // tie scenario, three winning scenarios, and one losing scenario as else.

    if (userSelection == computerSelection) {
        window.alert("Computer chose " + computerSelection + ". You tied!");
        stats.ties ++;
        window.alert(stats)
    } else if (userSelection == "r" && computerSelection == "s") {
        window.alert("Computer chose "+ computerSelection + ". You won!");
        stats.wins ++;
        window.alert(stats)
    } else if (userSelection == "s" && computerSelection == "p") {
        window.alert("Computer chose " + computerSelection + ". You won!");
        stats.wins ++;
        window.alert(stats)
    } else if (userSelection == "p" && computerSelection == "r") {
        window.alert("Computer chose "+ computerSelection+ ". You won!");
        stats.wins ++;
        window.alert(stats)
    } else {
        window.alert("Computer chose "+ computerSelection+ ". You lost!")
        stats.losses ++
        window.alert(stats)
    }

    var playAgain = window.confirm("Do you want to keep playing?")

    if (playAgain) {
        rpsGame()
    }

}

rpsGame()

// Data storage

