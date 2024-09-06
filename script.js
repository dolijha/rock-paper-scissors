let userScore=0 ;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
 
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
  userScore++;
  userScorepara.innerText=userScore;
  console.log("You win");
msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
} else
 {
  compScore++;
  compScorepara.innerText=compScore;
console.log("you lose");
msg.innerText=`You lost. ${compChoice} beats Your ${userChoice}`;
msg.style.backgroundColor="red";
}
};
const genCompChoice = () =>  {
const options = ["rock","paper","scissor"];
 const randIdx = Math.floor(Math.random() * 3);
 return options[randIdx];
}
const drawGame =() => {
  console.log("Game was Draw");
  msg.innerText="Game was draw.play again!";
  msg.style.backgroundColor="#081b31";
}
const playGame = (userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice =genCompChoice();
    console.log("computer choice=",compChoice);
    
    if(userChoice===compChoice){
      drawGame();
    }
    else{
    let userWin=true;
    if(userChoice==="rock"){
      //scissors paper
      userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
      userWin=compChoice==="scissors"?false:true;
    }
      else{
        // paper rock
        userWin=compChoice==="rock"?false:true;
      }  
    
    showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});