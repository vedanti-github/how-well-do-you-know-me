var readLineSync = require('readline-sync')

// welcome function
function welcome()
{
var userName = readLineSync.question('What is your name? ')
console.log('Welcome! ' + userName + ' to "Do You Know VEDANTI" ');
console.log("Let's see how well you know VEDANTI")
}

var highestScore = 4
var score = 0

// play function
function play(question, answer){
  userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()){
    score++;
    console.log('You are right!')
  }else{
    console.log('You are wrong!')
  }
  console.log('your current score is ', score)
  console.log('------------------------------')
}

// array of questions
var questionList = [
question1 = {
  question:'Is Vedanti 21 years old? ',
  answer: 'yes'
},
question2 = {
  question: 'Where does she live? ',
  answer: 'warora'
},
question3 = {
  question: "Who is her favorite Marvel superhero? ",
  answer: "Iron Man"
},
question4 = {
  question: "Which is her favorite sad song? ",
  answer: "Intezaar"
},
question5 = {
  question: 'which is her favourite movie? ',
  answer: '3 idiots'
}
]

// game function
function game(){
for(var i = 0; i < questionList.length; i++){
  var currentQuestion = questionList[i]
  play(currentQuestion.question, currentQuestion.answer)}
}

// array of highest scorers
var highScore = [
  { name: 'Afreen',
    score: 4
  },
  { name: 'Harshal',
    score: 5
}]

// Show score function
function showScore(){
  console.log('Your final score is: ', score)
  console.log("Check out the high scores, if you should be there ping me the screenshot of the score and I'll update it")
  highScore.map(scores => console.log(scores.name + ' : ' + scores.score))
}

// calling all function serial wise
welcome()
game()
showScore()
