let UserScore =   document.querySelector('#U-score');
let ComputerScore = document.querySelector('#C-score');
let UserScorebox = document.querySelector('.user-score');
let CompScorebox = document.querySelector('.Comp-score');
let message= document.querySelector('#result-show');
let Resultbox = document.querySelector(".result");
let ModeBox = document.querySelector(".mode-logo")
let IconMode = document.querySelector("#Lighticon");
let NewUserScore=0;
let NewCompScore=0;

ModeBox.addEventListener('click' , ()=>{
    document.body.classList.toggle('Dark-theme');
    if(document.body.classList.contains('Dark-theme'))
    {
          IconMode.src = "./assets/icons8-moon-24.png"
    }
    else
     IconMode.src = "./assets/icons8-sun-24.png"

   
})

let ScoreBottomBoxChange = (NewUserScore,NewCompScore)=>{
    if(NewUserScore>NewCompScore){
        UserScorebox.classList.remove('New-style2')
        CompScorebox.classList.remove('New-style1')
        UserScorebox.classList.add('New-style2')
        CompScorebox.classList.add('New-style1')
    }
    if(NewUserScore<NewCompScore){
        CompScorebox.classList.remove('New-style2')
        UserScorebox.classList.remove('New-style1')
        CompScorebox.classList.add('New-style2')
        UserScorebox.classList.add('New-style1')
    }
    if(NewUserScore==NewCompScore){
        CompScorebox.classList.remove('New-style2')
        UserScorebox.classList.remove('New-style1')
        CompScorebox.classList.remove('New-style1')
        UserScorebox.classList.remove('New-style2')

    }


}




let GameResult = (Userwin,UserChoice,CompChoice)=>{
   if(Userwin==1){
      NewUserScore++;
       UserScore.innerText=NewUserScore;
       message.innerText=`You Win.. ${UserChoice} beats ${CompChoice}`;
       Resultbox.classList.remove('newresultboxonloss');
       Resultbox.classList.add("newresultboxonwin");
          
   }
   else if(Userwin==2){
      NewCompScore++;
      ComputerScore.innerText=NewCompScore
       message.innerText=`You Loss..${CompChoice} beats ${UserChoice}`
       Resultbox.classList.remove("newresultboxonwin");
       Resultbox.classList.add('newresultboxonloss');

      
   }
   else{
      message.innerText='Match Draw.. Play Again! '
      Resultbox.classList.remove('newresultboxonloss');
      Resultbox.classList.remove("newresultboxonwin");
   }
   ScoreBottomBoxChange(NewUserScore,NewCompScore);

}


function GenerateRandomChoice() {
    let allchoices =['Paper','Rock','Scissor']
    let Random = Math.round(Math.random()*2);
    return allchoices[Random]
}


// paper==paper Rock==Rock  Scissor==Scissor ==> Draw case
// paper==Rock  ==>paper Won 
// paper==Scissor ==> Scissor Won
// Rock==scissor ==> Rock won

let StartGame=(UserChoice)=> {
   let Userwin=1;
    const CompChoice=GenerateRandomChoice()
     console.log("User Choice: " +UserChoice+ "\nComputer Choice:  "+ CompChoice)
     if(UserChoice==CompChoice){
      //   console.log("Math Draw")
      Userwin=-1;
     }
     else if(UserChoice=='Paper')
     {
      // CompChoice=='Rock'?console.log('User Won'):console.log('Computer Won');
      Userwin=CompChoice=='Rock'?1:2;

     }
     else if(UserChoice=='Rock')
     {
      //   CompChoice=='Scissor'?console.log('User Won'):console.log('Computer Won');
      Userwin= CompChoice=='Scissor'?1:2;
     }
     else{
      // CompChoice=='Rock'?console.log('User won'):console.log('Computer Won');
        Userwin=CompChoice=='Paper'?1:2;
     }

    GameResult(Userwin,UserChoice,CompChoice)
    
};




let Choice = document.querySelectorAll(".Game-logo");
Choice.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const UserChoice = choice.getAttribute('id')
        StartGame(UserChoice)
    })
})



   
