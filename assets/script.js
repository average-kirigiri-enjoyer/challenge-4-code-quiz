/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 4 Weekly Challenge - Code Quiz
Created 2023/07/29
Last Edited 2023/07/29
*/

//variables used for quiz content flow
var timeLeft = 75;
var correctAnswer = "";
var currentQuestion = 1;

//gets references to HTML elements that will be modified or referred to
var quizTimer = document.getElementById("timer");
var questionContent = document.getElementById("question-content");
var questionTitle = document.getElementById("question-title");
var answerOptions = document.getElementById("answer-options");
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

//defines first question name, multiple choice options, and correct answer
function generateQuestion1()
{
    questionTitle.textContent = "Commonly used data types do NOT include:";
    option1.children[0].textContent = "strings";
    option2.children[0].textContent = "booleans";
    option3.children[0].textContent = "alerts";
    option4.children[0].textContent = "numbers";
    correctAnswer = "alerts";
}

//defines second question name, multiple choice options, and correct answer
function generateQuestion2()
{
    questionTitle.textContent = "The condition in an if / else statement is enclosed with ________.";
    option1.children[0].textContent = "quotes";
    option2.children[0].textContent = "curly brackets";
    option3.children[0].textContent = "parentheses";
    option4.children[0].textContent = "square brackets";
    correctAnswer = "parentheses";
}

//defines third question name, multiple choice options, and correct answer
function generateQuestion3()
{
    questionTitle.textContent = "Arrays in JavaScript can be used to store ________.";
    option1.children[0].textContent = "numbers and strings";
    option2.children[0].textContent = "other arrays";
    option3.children[0].textContent = "booleans";
    option4.children[0].textContent = "all of the above";
    correctAnswer = "all of the above";
}

//defines fourth question name, multiple choice options, and correct answer
function generateQuestion4()
{
    questionTitle.textContent = "String values must be enclosed within ________ when being assigned to variables.";
    option1.children[0].textContent = "commas";
    option2.children[0].textContent = "curly brackets";
    option3.children[0].textContent = "quotes";
    option4.children[0].textContent = "parentheses";
    correctAnswer = "quotes";
}

//defines fifth question name, multiple choice options, and correct answer
function generateQuestion5()
{
    questionTitle.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    option1.children[0].textContent = "JavaScript";
    option2.children[0].textContent = "terminal / bash";
    option3.children[0].textContent = "for loops";
    option4.children[0].textContent = "console.log()";
    correctAnswer = "console.log()";
}

function endAttempt()
{
    //goes to submit screen n stuff
}

function beginQuizAttempt()
{
    //sets / resets initial variables for quiz content flow
    timeLeft = 75;
    correctAnswer = "";
    currentQuestion = 1;

    //hides start menu, unhides question content structure
    document.getElementById("start-menu").setAttribute("style", "display: none");
    questionContent.setAttribute("style", "display: block");

    //begins quiz timer countdown, quiz ends once timer is less than or equal to 0
    var quizTimerCountdown = setInterval(function()
    {
        timeLeft--;
        quizTimer.textContent = "Timer: " + timeLeft;

        if (timeLeft <= 0)
        {
            clearInterval(quizTimerCountdown);
            quizTimer.textContent = "Timer: 0"
            endAttempt();
        }
    }, 1000);

    //begins displaying quiz questions
    generateQuestions();

    //when the user clicks one of the multiple choice options, checks if their answer is correct
    answerOptions.addEventListener("click", checkAnswer);
}

//checks if the choosen answer is correct
function checkAnswer()
{
    //gets text value of multiple choice option selected by user
    var chosenAnswer = event.target.textContent;

    //checks if chosen option is correct, and displays a message informing user of which is the case
    if (chosenAnswer === correctAnswer)
    {
        correct.setAttribute("style", "display: block");
    }
    else
    {
        //if the user was wrong, reduce remaining time by 10 seconds
        wrong.setAttribute("style", "display: block");
        timeLeft -= 10;
    }

    //hides right / wrong message after two seconds
    setTimeout(function()
    {
        correct.setAttribute("style", "display: none");
        wrong.setAttribute("style", "display: none");
    }, 2000);

    //generates next quiz question
    currentQuestion++;
    generateQuestions();
}

function viewHighScores()
{
    
}

//changes quiz question content based on which question should be displayed
function generateQuestions()
{
    if (currentQuestion === 1)
    {
        generateQuestion1();
    }
    if (currentQuestion === 2)
    {
        generateQuestion2();
    }
    if (currentQuestion === 3)
    {
        generateQuestion3();
    }
    if (currentQuestion === 4)
    {
        generateQuestion4();
    }
    else
    {
        generateQuestion5();
    }
}

//switches view to high score list
document.getElementById("HSLink").addEventListener("click", viewHighScores);

//begins quiz attempt when start button is clicked
document.getElementById("start-button").addEventListener("click", beginQuizAttempt);