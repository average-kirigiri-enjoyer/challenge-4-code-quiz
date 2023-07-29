/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 4 Weekly Challenge - Code Quiz
Created 2023/07/29
Last Edited 2023/07/29
*/

var timeLeft = 60;
var quizTimer = document.getElementById("timer");

function generateQuestion1()
{

}

function generateQuestion2()
{
    
}

function generateQuestion3()
{
    
}

function generateQuestion4()
{
    
}

function generateQuestion5()
{
    
}

//begins quiz attempt when start button is clicked
document.getElementById("start-button").addEventListener("click", function beginQuizAttempt()
{
    //hides start menu
    document.getElementById("start-menu").setAttribute("style", "display: none");

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
});

