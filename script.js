


let getComputerChoice = () => {
    let k = Math.random();
    if (k < 1/3){
        return "rock";
    }
    else if (k >= 1/3 && k < 2/3){
        return "paper";
    }else{
        return "scissor";
    }
}


let getHumanChoice = () => {

    let input = prompt("what is your choice. rock paper or scissor?");
    return input.toLowerCase();
    
}

// addEventListener("keydown", (event) => {
//     console.log(getHumanChoice(event.key));
//     console.log(getComputerChoice()+ "\n\n\n");
// });


let playRound = function (humanChoice, computerChoice) {
    let human_win = false;
    let human_draw = false;
    if (humanChoice === computerChoice){
        human_draw = true;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor"){
        human_win = true;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        human_win = true;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper"){
        human_win = true;
    }


    // conclusion
    if (human_draw){
        console.log("You draw!");
        return "draw";
    } else if (human_win){
        console.log("Congrat! You WIN! "+humanChoice+" beats "+computerChoice);
        return "win";
    } else {
        console.log("You lose! " +computerChoice+  " beats " + humanChoice);
        return "lose";
    }

}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let play_round = playRound(humanSelection, computerSelection)
        if (play_round == "win"){
            humanScore++;
        } else if (play_round == "lose"){
            computerScore++;
        } 
    }

    console.log("Human score: "+humanScore);
    console.log("Computer score: "+computerScore);

    
}

playGame();






