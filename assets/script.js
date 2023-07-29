/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 4 Weekly Challenge - Code Quiz
Created 2023/07/29
Last Edited 2023/07/29
*/

//gets references to HTML elements that will be modified
var quizTimer = document.getElementById("timer");
var questionContent = document.getElementById("question-content");
var questionTitle = document.getElementById("question-title");
var answerOptions = document.getElementById("answer-options");
var option1 = document.getElementById("option-1");
var option2 = document.getElementById("option-2");
var option3 = document.getElementById("option-3");
var option4 = document.getElementById("option-4");

function generateQuestion1()
{
    questionTitle.textContent = "Commonly used data types do NOT include:";
    option1.children[0].textContent = "strings";
    option2.children[0].textContent = "booleans";
    option3.children[0].textContent = "alerts";
    option4.children[0].textContent = "numbers";
}

function generateQuestion2()
{
    questionTitle.textContent = "The condition in an if / else statement is enclosed with ________.";
    option1.children[0].textContent = "quotes";
    option2.children[0].textContent = "curly brackets";
    option3.children[0].textContent = "parentheses";
    option4.children[0].textContent = "square brackets";
}

function generateQuestion3()
{
    questionTitle.textContent = "Arrays in JavaScript can be used to store ________.";
    option1.children[0].textContent = "numbers and strings";
    option2.children[0].textContent = "other arrays";
    option3.children[0].textContent = "booleans";
    option4.children[0].textContent = "all of the above";
}

function generateQuestion4()
{
    questionTitle.textContent = "String values must be enclosed within ________ when being assigned to variables.";
    option1.children[0].textContent = "commas";
    option2.children[0].textContent = "curly brackets";
    option3.children[0].textContent = "quotes";
    option4.children[0].textContent = "parentheses";
}

function generateQuestion5()
{
    questionTitle.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    option1.children[0].textContent = "JavaScript";
    option2.children[0].textContent = "terminal / bash";
    option3.children[0].textContent = "for loops";
    option4.children[0].textContent = "console.log()";
}

//switches view to high score list
document.getElementById("HSLink").addEventListener("click", function viewHighScores()
{
    
});

//begins quiz attempt when start button is clicked
document.getElementById("start-button").addEventListener("click", function beginQuizAttempt()
{
    //hides start menu, sets initial timer, and unhides question content structure
    var timeLeft = 60;
    document.getElementById("start-menu").setAttribute("style", "display: none");
    questionContent.setAttribute("style", "display: block");

    //begins quiz timer countdown, quiz ends once timer is less than or equal to 0
    var quizTimerCountdown = setInterval(function()
    {
        timeLeft--;
        quizTimer.textContent = "Timer: " + timeLeft;

        if(timeLeft <= 0)
        {
            clearInterval(quizTimerCountdown);
        }
    }, 1000);

    generateQuestion1();
});

