


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
    let display_text = document.querySelector(".display");

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
        display_text.textContent = "You draw!";
        // console.log("You draw!");
        return "draw";
    } else if (human_win){
        display_text.textContent = "Congrat! You WIN! "+humanChoice+" beats "+computerChoice;
        // console.log("Congrat! You WIN! "+humanChoice+" beats "+computerChoice);
        return "win";
    } else {
        display_text.textContent = "You lose! " +computerChoice+  " beats " + humanChoice;
        // console.log("You lose! " +computerChoice+  " beats " + humanChoice);
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

// playGame();


let btns = document.querySelectorAll("button");
let display_msg = document.querySelector("div"); 
let humanScore = 0;
let computerScore = 0;



btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let gameOver = document.querySelector(".game-over");
        gameOver.textContent = "";
        let humanSelection = btn.id;
        let computerSelection = getComputerChoice();

        let play_round = playRound(humanSelection,computerSelection);

        if (play_round === "win"){
            humanScore++;
        }else if(play_round === "lose"){
            computerScore++;
        }

        let display_score = document.querySelector(".display-score");


        let human_li = document.createElement("li");
        let computer_li = document.createElement("li");

        human_li.textContent = "Human Score: "+humanScore;
        computer_li.textContent = "Computer Score: "+computerScore;

        display_score.childNodes[1].innerHTML = "";

        display_score.childNodes[1].appendChild(human_li);
        display_score.childNodes[1].appendChild(computer_li);

        if (humanScore === 5){
            
            gameOver.textContent = "You WIN, Congratulation!";

            // Reset Score
            humanScore = 0;
            computerScore = 0;

        } else if (computerScore === 5){
            // let gameOver = document.querySelector(".game-over");
            gameOver.textContent = "You Lose, Try again";

            // Reset Score
            humanScore = 0;
            computerScore = 0;
        }



    })
});














