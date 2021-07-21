var readlineSync=require('readline-sync');
const chalk = require('chalk');
var name=readlineSync.question("What is your name?  ")
console.log(chalk.green("Welcome  "+name+'!'));
console.log(" || You can play the game only when your age is 5+ ||")
var age=readlineSync.question("How old are you?  ")
var ans=5
var flag;
function quiz(a)
{  console.log("---------------")
  if(a>=ans)
    {console.log("Congratulations, You are eligible for the quiz "+name)
    console.log("Let's start the quiz, If you score 3+, you win or else you will loose !")
    flag=1;
    }
    else
    {
      console.log("You are not eligible "+ name);
      flag=0;
      
    }
}
quiz(age)
var score=0;
//play function
function play(question,answer)
{
  var userans=readlineSync.question(question);
  if(userans.toUpperCase()===answer)
  {console.log(chalk.green("Correct"));
  
    score++;
  }
  else{
    console.log(chalk.red("Wrong"));
    score--;
  }
}
var q1={
  question:"What is the reel name of Iron man in the movie?  ",
  answer:"TONY STARK"
}
var q2={
  question:"Who is the main villian in End game?  ",
  answer:"THANOS"
}
var q3={
  question:"Who isn't on Iron Man's team? => Black Panther, Vision, Black Widow, Hawkeye  ",
  answer:"HAWKEYE"
}
var q4={
  question:"Thor is god of?  ",
  answer:"THUNDER"
}
var q5={
  question:"What is the reel name of Hulk?  ",
  answer:"BRUCE BANNER"
}
if(flag===1)
{
  console.log("Questions")

var questionset=[q1,q2,q3,q4,q5];
for(i=0;i<questionset.length;i++)
{ console.log("---------------")
  var currentquestion=questionset[i];
  play(currentquestion.question,currentquestion.answer);
}
console.log("---------------")
console.log("---------------")
console.log(chalk.red("Your score is : "+score));
var hs={
  name:'Aryan',
  score:4
}
if(score>=3)
{ console.log(chalk.red("Hurray!! You are a marvel fan :)"));
if(score>hs.score)
{
  console.log(chalk.yellow("You have beaten "+ hs.name));
  console.log("Send me the screenshot! I will update the highest score.")
}
  console.log("---------------")
}
else
{ console.log(chalk.red("Sadly you failed"));
console.log("The highest score is "+ hs.score + ". made by "+ hs.name);
console.log("Let's play again to beat the highest score:)")
  console.log("---------------")
}
}
