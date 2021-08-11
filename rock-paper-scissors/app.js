let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
main()
function main () {
    rock_div.addEventListener('click', function(){
        game("r")
    })
    paper_div.addEventListener('click', function(){
    
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s")
    })

}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
            break;
        case "sr":
         case "rp":
        case "ps":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}
function getComputerChoice(){
    const choices = ["r", "p", "s"]
    return choices[(Math.floor(Math.random()*3))];
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const small_user_word = "user".fontsize(3).sup();
    const small_comp_word = "comp".fontsize(3).sup();
    result_p.innerHTML =  convertToWord(userChoice)+ small_user_word + " beats " + convertToWord(computerChoice) +small_comp_word + ". You Win!"
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 500)
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const small_user_word = "user".fontsize(3).sup();
    const small_comp_word = "comp".fontsize(3).sup();
    result_p.innerHTML =  convertToWord(userChoice)+ small_user_word + " loses to " + convertToWord(computerChoice) +small_comp_word + ". You Lost!"
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow')}, 500)
}
function draw(userChoice, computerChoice){
    const small_user_word = "user".fontsize(3).sup();
    const small_comp_word = "comp".fontsize(3).sup();
    result_p.innerHTML =  convertToWord(userChoice)+ small_user_word + " is the same as " + convertToWord(computerChoice) +small_comp_word + ". It is a draw!"
    document.getElementById(userChoice).classList.add('grey-glow')
    setTimeout(function () {document.getElementById(userChoice).classList.remove('grey-glow')}, 500)
}
function convertToWord(letter){
    if (letter==="r"){
        return "Rock"
    }
    else if (letter==="p"){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}