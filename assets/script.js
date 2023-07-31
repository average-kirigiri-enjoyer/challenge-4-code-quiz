/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 4 Weekly Challenge - Code Quiz
Created 2023/07/29
Last Edited 2023/07/29
*/

//variables used for quiz content flow & high score data storage
var timeLeft = 75;
var correctAnswer = "";
var currentQuestion = 1;
var interrupted = 0;
var highScoresList = [];

//gets references to various HTML elements that will be modified or referred to
var quizTimer = document.getElementById("timer");
var startMenu = document.getElementById("start-menu");
var questionContent = document.getElementById("question-content");
var questionTitle = document.getElementById("question-title");
var answerOptions = document.getElementById("answer-options");
var option1 = document.getElementById("option-1").children[0];
var option2 = document.getElementById("option-2").children[0];
var option3 = document.getElementById("option-3").children[0];
var option4 = document.getElementById("option-4").children[0];
var highScoreSubmission = document.getElementById("high-score-submission");
var initialsInput = document.querySelector("input");
var submitButton = document.getElementById("submit-button");
var highScoresDisplayBox = document.getElementById("high-scores-display-box");
var highScoresDisplay = document.getElementById("high-scores-display");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

//variable to prevent an error if user gose to high score menu without starting quiz
var startedQuiz = false;

//defines first question name, multiple choice options, and correct answer
function generateQuestion1()
{
    questionTitle.textContent = "Commonly used data types do NOT include:";
    option1.textContent = "strings";
    option2.textContent = "booleans";
    option3.textContent = "alerts";
    option4.textContent = "numbers";
    correctAnswer = "alerts";
}

//defines second question name, multiple choice options, and correct answer
function generateQuestion2()
{
    questionTitle.textContent = "The condition in an if / else statement is enclosed with ________.";
    option1.textContent = "quotes";
    option2.textContent = "curly brackets";
    option3.textContent = "parentheses";
    option4.textContent = "square brackets";
    correctAnswer = "parentheses";
}

//defines third question name, multiple choice options, and correct answer
function generateQuestion3()
{
    questionTitle.textContent = "Arrays in JavaScript can be used to store ________.";
    option1.textContent = "numbers and strings";
    option2.textContent = "other arrays";
    option3.textContent = "booleans";
    option4.textContent = "all of the above";
    correctAnswer = "all of the above";
}

//defines fourth question name, multiple choice options, and correct answer
function generateQuestion4()
{
    questionTitle.textContent = "String values must be enclosed within ________ when being assigned to variables.";
    option1.textContent = "commas";
    option2.textContent = "curly brackets";
    option3.textContent = "quotes";
    option4.textContent = "parentheses";
    correctAnswer = "quotes";
}

//defines fifth question name, multiple choice options, and correct answer
function generateQuestion5()
{
    questionTitle.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    option1.textContent = "JavaScript";
    option2.textContent = "terminal / bash";
    option3.textContent = "for loops";
    option4.textContent = "console.log()";
    correctAnswer = "console.log()";
}

//hides quiz content, stops & updates timer, displays high score submission menu, and enables submit button if applicable
function endAttempt()
{
    clearInterval(quizTimerCountdown);
    questionContent.setAttribute("style", "display: none");
    highScoreSubmission.setAttribute("style", "display: block");
    quizTimer.textContent = "Time: " + timeLeft;
    document.getElementById("final-score").textContent = "Final Score: " + timeLeft;
    submitButton.disabled = false;
}

//retrieves high score list from local storage and converts it back from a JSON string to its original form
function getHighScores()
{
    return JSON.parse(localStorage.getItem("highScoresList"));
}

//submits high score to local data storage
function submitScore()
{
    //gets initials input by user from text box
    var userInitials = initialsInput.value;

    //if user did not type in any initials, eject from function
    if (!userInitials)
    {
        return;
    }

    //retrieves high scores list from local storage if it exists
    if (localStorage.getItem("highScoresList"))
    {
        highScoresList = getHighScores();
    }   
    
    //saves initials and score as an object
    var highScore =
    {
        initials: userInitials,
        score: timeLeft
    };

    //adds new high score submission to list
    highScoresList.push(highScore);

    //submits high score data to local storage as a JSON string, disables submit button, and clears initials input box
    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));
    initialsInput.value = "";
    submitButton.disabled = true;
}

//removes all score listings from high score display
function removeScoreListings()
{
    scoreListings = highScoresDisplay.childElementCount

    for (scoreListing = 0; scoreListing < scoreListings; scoreListing++)
    {
        highScoresDisplay.children[0].remove();
    }
}

//renders list of high scores
function renderHighScores()
{   
    //if there are no high scores in storage, ejects from function
    if (!localStorage.getItem("highScoresList"))
    {
        return;
    }

    //removes any previously-created score listings
    if (highScoresDisplay.childElementCount != 0)
    {
        removeScoreListings();
    }
    
    //retrieves high score data from storage
    highScoresList = getHighScores();

    //creates a new list item for each score in storage, and adds it to the list of high scores 
    for (score = 0; score < highScoresList.length; score++)
    {
        var scoreData = highScoresList[score];
        var scoreListing = document.createElement("li");
        scoreListing.textContent = scoreData.initials + " - " + scoreData.score;
        highScoresDisplay.appendChild(scoreListing);
    }
}

function viewHighScores()
{
    //hides whatever quiz content is currently visible and loads high score display menu
    correct.setAttribute("style", "display: none");
    wrong.setAttribute("style", "display: none");
    questionContent.setAttribute("style", "display: none");
    highScoreSubmission.setAttribute("style", "display: none");
    highScoresDisplayBox.setAttribute("style", "display: block");

    //if statement to avoid a reference error if the user tries to view high scores without ever starting the test
    if (startedQuiz) //if the quiz has been started (at least once), attempts to stop the timer
    {
        clearInterval(quizTimerCountdown);
    }

    startMenu.setAttribute("style", "display: none");

    //attempts to render high scores
    renderHighScores();
}

//overwrites all high score data with an empty array, and removes all score listings
function clearHighScores()
{
    localStorage.setItem("highScoresList", []);
    highScoresList = [];
    removeScoreListings();
}

//returns to start menu from high score menu
function backToStart()
{
    highScoresDisplayBox.setAttribute("style", "display: none");
    startMenu.setAttribute("style", "display: block")
}

//changes quiz question content based on which question should be displayed
function generateQuestions()
{
    if (currentQuestion === 1)
    {
        generateQuestion1();
    }
    else if (currentQuestion === 2)
    {
        generateQuestion2();
    }
    else if (currentQuestion === 3)
    {
        generateQuestion3();
    }
    else if (currentQuestion === 4)
    {
        generateQuestion4();
    }
    else if (currentQuestion === 5)
    {
        generateQuestion5();
    }
    else
    {
        endAttempt();
    }
}

//checks if the choosen answer is correct
function checkAnswer()
{    
    //exits function if the user clicked outside the multiple choice boxes
    if (!(event.target.matches("button") || event.target.matches("li")))
    {
        return;
    }

    //gets text value of multiple choice option selected by user
    var chosenAnswer = event.target.textContent;

    //checks if chosen option is correct, and displays a message informing user of which is the case, hiding previous message if applicable
    if (chosenAnswer === correctAnswer)
    {
        correct.setAttribute("style", "display: block");
        wrong.setAttribute("style", "display: none");
    }
    else
    {
        //if the user was wrong, reduce remaining time by 10 seconds and updates timer
        wrong.setAttribute("style", "display: block");
        correct.setAttribute("style", "display: none");
        timeLeft -= 10;
        quizTimer.textContent = "Time: " + timeLeft;
    }

    //hides right / wrong message after around two seconds if the user has not chosen another answer
    interrupted += 2;

    var hideRightOrWrong = setInterval(function()
    {
        //prevents right / wrong message from disappearing too quickly if the user chooses multiple answers in succession
        interrupted--;

        if (interrupted <= 0)
        {
            correct.setAttribute("style", "display: none");
            wrong.setAttribute("style", "display: none");
            clearInterval(hideRightOrWrong);
            interrupted = 0;
        }
    }, 1000);

    //proceeds to next quiz question
    currentQuestion++;
    generateQuestions();
}

function beginQuizAttempt()
{
    //sets / resets initial variables for quiz content flow
    timeLeft = 75;
    correctAnswer = "";
    currentQuestion = 1;
    startedQuiz = true;

    //hides start menu, unhides question content structure
    startMenu.setAttribute("style", "display: none");
    questionContent.setAttribute("style", "display: block");

    //begins quiz timer countdown, quiz ends once timer is less than or equal to 0
    quizTimer.textContent = "Time: " + timeLeft;

    quizTimerCountdown = setInterval(function()
    {
        timeLeft--;
        quizTimer.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0)
        {
            clearInterval(quizTimerCountdown);
            quizTimer.textContent = "Time: 0"
            endAttempt();
        }
    }, 1000);

    //begins displaying quiz questions
    generateQuestions();
}

//switches view to high score list when user clicks view high scores link
document.getElementById("HSLink").addEventListener("click", viewHighScores);

//switches view back to start menu from high scores menu when user clicks back button
document.getElementById("go-back").addEventListener("click", backToStart);

//clears all high scores from list when user clicks clear high scores button
document.getElementById("clear-high-scores").addEventListener("click", clearHighScores);

//begins quiz attempt when start button is clicked
document.getElementById("start-button").addEventListener("click", beginQuizAttempt);

//when the user clicks one of the multiple choice options, checks if their answer is correct
answerOptions.addEventListener("click", checkAnswer);

//attempts to submit high score to local storage when user clicks submit score button
submitButton.addEventListener("click", submitScore);
