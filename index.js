var readLineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readLineSync.question(chalk.red.bold("Enter your name:\n"));

//Score variable to store score
var score = 0;
//levelTwoDisplayed variable to store if level 2 displayed or not
var levelTwoDisplayed = false;
//levelThreeDisplayed variable to store if level 3 displayed or not
var levelThreeDisplayed = false;

//Welcome message and rules for the game
console.log("\nWelcome " + chalk.red.bold(userName) + " to " + chalk.bold.underline("\"Awareness Test about Covid-19!\"") + "\nYour current score is: " + chalk.green.bold(score) + "\n\nHave a look at some rules:\n1. There are total 9 questions in this game. \n2. If not mentioned explicitly, enter only corresponding option number(1,2,3,4,etc.) as your answer.\n3. You get a +1 for each right answer.\n4. The game has 3 levels. You get promoted to next level after every 3 right answers.\n5. You can exit the game anytime by entering \"e\".\n\nChaliye shuru karte hain!!! :p");

//question-answers Array
var questionAnswers = [
  {
    question: "19 in Covid-19 means: \n\n1.)19th strain of covid\n2.)Age of Covid-19 \n3.)2019-Year in which it's first case is Discovered \n4.)None of the above\n",
    answer: "3"
  },

  {
    question: "First Case of Covid-19 in the world was Discovered in:  \n\n1.)January-2020\n2.)February-2020\n3.)November-2019 \n4.)December-2019\n",
    answer: "4"
  },

  {
    question: "First Case of Covid-19 in the world was Discovered in:  \n\n1.)America\n2.)Pakistan\n3.)China\n4.)UK\n",
    answer: "3"
  },

  {
    question: "Vaccination of Covid-19 is compulsory. \n\n1.)True\n2.)False\n",
    answer: "2"
  },

  {
    question: "COVID in Covid-19 stands for:(Enter Manually) \n\n",
    answer: "Corona Virus Disease"
  },

  {
    question: "Covid patient always shows symptoms \n\n1.)True\n2.)False\n",
    answer: "2"
  },

  {
    question: "What other viruses belong to the coronavirus family? \n\n1.)Swine Flu\n2.)Plague\n3.)MERS AND SARS \n4.)None of the above\n",
    answer: "3"
  },

  {
    question: "Which group has had more severe effects of COVID-19? \n\n1.)Men\n2.)Women\n",
    answer: "1"
  },

  {
    question: "COVID-19 has currently been detected on all seven continents. \n\n1.)True\n2.)False\n",
    answer: "1"
  }
]

//high scores Array
var highScore = [
  {
    name: "Vinamra Jain",
    score: 9
  },
  {
    name: "AKJ",
    score: 8
  },
  {
    name: "Shubham",
    score: 6
  }
]

//play function to be called for each questionAnswers
function play(question, answer, questNum) {
  console.log("___________________________________\n")
  var userAnswer = readLineSync.question(chalk.bold("Q" + questNum + ".)") + question);
  if (userAnswer.toUpperCase() === "E") {
    return 0;
  } else if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score++;
    console.log(chalk.green.bold("You are Right!"));
  } else {
    console.log(chalk.red.bold("Sorry that's wrong!") + " Correct answer is: " + chalk.green.bold(answer));
  }

  console.log("Your current score is: " + chalk.bold.green(score));
  return 1;
}
//output
console.log(chalk.inverse.bold("Level One:"))

for (var i = 0; i < questionAnswers.length; i++) {
  var result = play(questionAnswers[i].question, questionAnswers[i].answer, i + 1);
  if (result === 0) {
    var reCheck = readLineSync.question(chalk.red.bold("Do you really want to exit(Y/N)?\n"));
    if (reCheck.toUpperCase() === "Y") {
      break;
    } else {
      i--;
      continue;
    }
  }
  if (score === 3 && !(levelTwoDisplayed)) {
    console.log(chalk.inverse.bold("\nCongratulations! You have reached level 2.\nLevel Two:\n"));
    levelTwoDisplayed = true;
  }
  if (score === 6 && !(levelThreeDisplayed)) {
    console.log(chalk.inverse.bold("\nCongratulations! You have reached level 3.\nLevel Three:\n"));
    levelThreeDisplayed = true;
  }
}
//output
console.log("\n\nFinal score: " + chalk.green.bold(score + "\nThanks for Playing!\n"));

console.log(chalk.red.bold("Top Scores:\n"))

for (var i = 0; i < highScore.length; i++) {
  console.log(chalk.underline("Name:") + " " + chalk.inverse.bold(highScore[i].name));
  console.log(chalk.underline("Score:") + " " + chalk.green.bold(highScore[i].score));
  console.log("");
}

console.log(chalk.red.bold("Did you score higher than any of them?") + chalk.bold("\nIf yes, then send us a Screenshot of your Final Score and your name will be highlighted in the Top Scores!:D"));