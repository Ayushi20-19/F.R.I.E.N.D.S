var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log("Do you Like FRIENDS? \nTry the following quiz to test your Knowledge of friends");

var userName = readlineSync.question(chalk.blueBright("What is your good name?\n"));

console.log(chalk.red("Welcome",userName))
 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.green('Guide'));
console.log(chalk.magenta('> There 5 are multiple choice questions,you will get +2 points for correct answer & -1 point for incorrect '));
console.log(chalk.magenta('> Choose the options given below by selecting any of the key 1,2,3,4\n'));
 console.log(chalk.yellowBright('-----------------------------------------------'));

console.log("C'mon, Lets Start!")


var Leaderboard = [{name : "ABC",Score :10},
                  {name : "XYZ",Score : 9},
                  {name : "RST",Score : 9}]



var score =  0
var questionBank = [
  {
    question : 'The series Friends is set in which city?',
    options : ['Los Angeles', 'New York City','Miami', 'Seattle'],
    answer :'New York City'
  },
  {
    question : 'What pet did Ross own?',
    options : ['A dog named Keith',
'A rabbit called Lancelot',
'A monkey named Marcel',
'A lizard named Alistair'],
    answer : 'A monkey named Marcel'
  },
  {
    question : 'What is Chandler’s middle name?',
    options : ['Muriel','Jason','Kim','Zachary'],
    answer : 'Muriel' 
  },
  {
    question : 'What are Ross and Monica’s parents called?',
    options : ['Jack and Jill',
'Philip and Holly',
'Jack and Judy',
'Margaret and Peter'],
    answer : 'Jack and Judy' 
  },
    
  {
    question : 'What is Janice most likely to say?',
    options : ['Talk to the hand!','Get me a coffee!','Oh… my… God!','No way!'],
    answer : 'Oh… my… God!'
  },

]

function displayQuestion(questionObj){
  console.log(chalk.yellowBright.bold(questionObj.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+questionObj.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\nChoose your Answer : ', {limit: '$<1-4>'});

  var userAnswer = questionObj.options[index - 1];
  if(userAnswer === questionObj.answer){
    console.log(chalk.bgGreen.black.bold('\nCorrect\n'));
    score = score +2;
  }
  else{
    console.log(chalk.bgRed.black.bold
    ('\nWrong Answer\n'));
    score = score - 1
  }
}

for(var i =0;i< questionBank.length ;i++){
  displayQuestion(questionBank[i]);
  console.log(chalk.yellowBright('-----------------------------------------------'));
}

 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.yellow.bold('\n\n Final Score : ', score+'\n\n'));

var currentPlayer = {name : userName, Score : score}
Leaderboard.push(currentPlayer);
var temp = {};
for(var j = 0; j < Leaderboard.length - 1; j++){
  for(var k = j+1;k <  Leaderboard.length; k++){
    
  if( Leaderboard[j].Score  < Leaderboard[k].Score ){
    temp = Leaderboard[j];           
    Leaderboard[j] = Leaderboard[k];
    Leaderboard[k] = temp; 
  }
  }
}
console.log(chalk.bgRed("Leaderboard"))
for(var k = 0;k <  Leaderboard.length; k++){
  console.log(Leaderboard[k].name," : ",Leaderboard[k].Score,"\n")
}

console.log("Thanks for playing")
