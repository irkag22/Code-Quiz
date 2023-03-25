var startBtn = document.querySelector("#startBtn");
var startContainer = document.querySelector("#start-container");
var questionContainer = document.querySelector("#question-container");
var saveBtn = document.querySelector("#saveBtn");
var questionIndex = 0;

var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "How To Maintain Love",
      "Hyper Text Martian Language",
      "Hyper Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    question: "What does CSS stand for?",
    choices: [
      "Cats Stay Sleeping",
      "Coding Social Skills",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },

  {
    question: "What does === mean in JS?",
    choices: ["Triple Dash", "Border Style", "Strict Equality"],
    answer: "Strict Equality",
  },

  {
    question: "What is a Boolean value?",
    choices: ["T/F value", "Color attribute", "Decimals"],
    answer: "T/F value",
  },

  {
    question: "What does JavaScript do?",
    choices: [
      "Makes the website dyanamic",
      "Creates pop=up boxes",
      "Assigns border margins",
    ],
    answer: "Makes the website dynamic",
  },
];

setInterval(function () {}, 5000);
clearInterval();

function startQuiz() {
  startContainer.innerHTML = "";
  displayQuestion();
}

function displayQuestion() {
  var currentQuestion = questions[questionIndex];

  // create the element using js
  var questionHeader = document.createElement("h2");

  // setting the text value of the created element -- in this case the question H2
  questionHeader.innerText = currentQuestion.question;

  //appending the newly created element with the assigned text to the container
  questionContainer.appendChild(questionHeader);

  // generating the button
  for (let index = 0; index < currentQuestion.choices.length; index++) {
    var answerButton = document.createElement("button");
    answerButton.innerText = currentQuestion.choices[index];

    var checkAnswer = function (event) {
      //  if we reached the end of the startQuiz, we're gonna run the "endGame" function
      if (questionIndex >= questions.length - 1) return endGame();

      // we're trying to match the inner text of our button target
      // to the expected answer for the current question
      if (event.target.innerText === currentQuestion.answer) {
        // increase q index by 1
        questionIndex++;

        questionContainer.innerHTML = "";
        displayQuestion();
      }
    };

    answerButton.addEventListener("click", checkAnswer);

    questionContainer.append(answerButton);
  }
}

function endGame() {
  console.log("finished");
  // do logic here for when you finish the game, maybe log the score, and after that redirect to the highscores page/ component
}

// function renderLastScore() {
//   var lastScore = JSON.parse(localStorage.getItem("userScore"));
//   if (lastScore !== null) {
//     document.getElementById("saved-initials").innerHTML = lastScore.user;
//     document.getElementById("saved-score").innerHTML = lastScore.score;
//   } else {
//     return;
//   }
// }

// function init() {
//   renderLastScore();
// }
// init();

startBtn.addEventListener("click", startQuiz);
answerButton.addEventListener("click", checkAnswer);
// saveBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   saveLastGrade();
//   renderLastGrade();
// });

// timer
// collecting the user name and the timer value as the score
// saving that to ls
