var startBtn = document.querySelector("button");
var 
    
startbtn.addEventListener("click", function(){

})
    
    
    var questions = [
        {
            question: "What does HTML stand for?",
            choices: ["How To Maintain Love", "Hyper Text Martian Language", "Hyper Text Markup Language"],
            answer: "Hyper Text Markup Language",
        },

        {
            question: "What does CSS stand for?",
            choices: ["Cats Stay Sleeping", "Coding Social Skills", "Cascading Style Sheets"],
            answer: "Cascading style sheets",
        }

        {
            question: "What does === mean in JS?",
            choices:  ["Triple Dash", "Border Style", "Strict Equality"],
            answer: "Strict Equality",
        }

        {
            question: "What is a Boolean value?",
            choices: ["T/F value", "Color attribute", "Decimals"],
            answer: "T/F value",
        }

        {
            question: "What does JavaScript do?",
            choices: ["Makes the website dyanamic", "Creates pop=up boxes", "Assigns border margins"],
            answer: "Makes the website dynamic",
        }
    ]

    var random = questions.[Math.floor(Math.random()]
        // ^ DOES THIS MAKE SENSE?

    setInterval(function(){

    }, 5000)

    clearInterval(); 






white_check_mark
eyes
raised_hands




//click button to start
    //event listener
    //a timer will start
//user is presented with a question
//user selects one multiple choice question
    //IF answer is wrong, decrement the timer
        //Display that the user choice was incorrect, then move to next question
    //IF answer is correct
        //Display that the user choice was correct(textContent)
        //Increment the score++
    //FOR loop to loop through the questions array
//When timer hits 0 OR no more questions in array
    //THEN clear interval
    //THEN allow user to input initials
    //THEN link to highscores page(two separate HTML pages, index.html and hiscores.html)
    //Save data to local storage(setItem, getItem)

//startQuiz() function changes content
    //hide the start screen
    //unhide the questions section
    //start the timer
    //show the starting time
    //call getQuestion()
//getQuestion() function get current question object from questions array
    //change content of the page
    //getElementbyId, change textContent
    //loop over choices create a button for each choice
    //after creating all the elements we appendChild
//questionClick() function that checks choice user clicked
    //first we check that the event.target matches an answer choice
    //check event.target.value matches the questions[currentIndex].answer










