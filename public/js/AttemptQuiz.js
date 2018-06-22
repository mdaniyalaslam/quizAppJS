



//original file










var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;




var questionTag = document.getElementById("Question")

var mainContainer = document.getElementById("main_container");
var header = document.getElementById("header");

var opt1 = document.getElementById('Option1');
var opt2 = document.getElementById('Option2');
var opt3 = document.getElementById('Option3');
var opt4 = document.getElementById('Option4');

var questionContainer = document.getElementById("questionContainer");

var nextButton = document.getElementById("NextButton");

var Result = document.getElementById("result");
var Resultt = document.getElementById("resultt");
var Resulttt = document.getElementById("resulttt");

var logOutButton = document.getElementById("logOutButton");

var resultContainer = document.getElementById('ResultContainer');


console.log('check',question)
function loadQuestion(questionIndex) {

    var q = questions[questionIndex];
    questionTag.textContent = (questionIndex + 1) + '. ' + q.question;

    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
}
loadQuestion(currentQuestion);

function loadNextQuestion() {
    var selectedOption = document.querySelector("input[type=radio]:checked");

    if (!selectedOption) {
        alert("Please chek at least 1 option!");
        return;
    }

    var answer = selectedOption.value;
    if (answer === questions[currentQuestion].correct) {
        score += 5;
    }
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    // loadQuestion(currentQuestion);

    if (currentQuestion === totalQuestions) {
        header.style.display = "block";
        // mainContainer.style.display = "none";
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        nextButton.style.display = "none";
        // Result.style.display = "block";
        // Resultt.style.display = "block";
        // Resulttt.style.display = "block";

        logOutButton.style.display = "block";
        return;
    }

    if (score === 0) {
        Result.textContent = "Sorry You got ZERO"
        Resultt.textContent = "Write Answers :" + answer + "out of 10"
        Resulttt.textContent = "Percentage" + (answer*100)/50 
    }

    else if (score >= 30) {
        Result.textContent = "Congralutations You have Passed!" 
        Resultt.textContent = "Write Answers :" + answer + "out of 10"
        Resulttt.textContent = "Percentage" + (answer*100)/50
    }
    
    else if (score < 30) {
        Result.textContent = "Sorry to say, You have Failed!" 
        Resultt.textContent = "Write Answers :" + answer + "out of 10"
        Resulttt.textContent = "Percentage" + (answer*100)/50
    }
    loadQuestion(currentQuestion);

}
loadQuestion(currentQuestion);


function logout() {
    location = "index.html";
}




function getTimer() {

    var timeSet = setInterval(myTimer, 1000);
    var min = 04;
    var sec = 60;

    // If score is graeter then pr less then 60% then this condition will true...!

    if (score === 0) {
        Result.innerHTML = "Sorry You got ZERO";
    }

    else if (score >= 30) {
        Result.innerHTML = "Congralutations You have Passed!";
    }

    else {
        Result.innerHTML = "Sorry to say, You have Failed!"
    }

    function myTimer() {
        sec--;
        if (sec === 0) {
            if (min > 0) {
                min--;
                sec = 60;
            }
            else {
                clearInterval(timeSet);
                mainContainer.style.display = "none";
                nextButton.style.display = "none";
                Result.style.display = "block";
                Result.textContent = "Your Score is : " + score;
                logOutButton.style.display = "block";
            }
        }
        document.getElementById('timer').innerHTML = min + " : " + sec;
    }
}