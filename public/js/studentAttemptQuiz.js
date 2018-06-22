var database = firebase.database().ref('/');

var thatQuiz;
var questions = [];
var currentQuestion = 0;
var totalQuestions;
var score = 0;
var totalMarks;
var passingScore;
var thisMarks = 0;
var rightAns = 0;
var thisTime;
var tId;
var tamamQuiz;
// console.log('thismarks',thisMarks)




var student = localStorage.getItem('loggedInStudent');
student = JSON.parse(student)
var teacherId = student.uid;

var renderList = document.getElementById('renderList');
var quizRender = document.getElementById('quizRender');
var timer = document.getElementById("timer");
var resultContainer = document.getElementById("resultContainer");
var timesUp = document.getElementById('timesUp')
var resultTxt = document.getElementById('resultTxt')

//render List
sareQuiz =[]
var allQuizzesHead = document.getElementById('allQuizzesHead')
// database.child("/quizData").on("child_added", (snap) => {
database.child("quizData").child('allQuizzes').once("value", (snap) => {
    var allQuizes = snap.val();
    tamamQuiz = allQuizes


    // console.log("check", tId)
    console.log("check", allQuizes)
    // console.log("check", allQuizes)
    if (allQuizes !== null) {

    allQuizzesHead.style.display='block'
    var listDiv = document.getElementById('quizList');

    var div = document.createElement("DIV");
    div.setAttribute("class", "list-group")
    // var h3 = document.createElement("H3")
    // h3.setAttribute("class", "list-group-item list-group-item-action active")
    // var h3Text = document.createTextNode("MyList")
    // h3.appendChild(h3Text)
    // div.appendChild(h3)
    listDiv.appendChild(div);

    var quizNames = []
    for (var i in allQuizes) {
        quizNames.push(allQuizes[i].quizName)
        // console.log("a", quizNames)

        var quizName = document.createElement("P");
        var span = document.createElement("span");
        span.setAttribute('id', 'span');
        // span.setAttribute('name','span');
        quizName.setAttribute("class", "list-group-item list-group-item-action");
        var quizNameText = document.createTextNode(allQuizes[i].quizName)
        span.appendChild(quizNameText);
        quizName.appendChild(span);
        div.appendChild(quizName)

        var btn = document.createElement("BUTTON")
        btn.setAttribute("class", "btn btn-info strt-btn")
        var btnTxt = document.createTextNode("Start Quiz")
        btn.appendChild(btnTxt)
        quizName.appendChild(btn);

        btn.setAttribute("onclick", "list(this)")
    };
}
// )}
else alert('NO QUIZZES TO SHOW')
})


function list(w) {
    var name = document.getElementById('name')
    var marks = document.getElementById('marks')
    var time = document.getElementById('time')
    var syllabus = document.getElementById('syllabus')
    var instructions = document.getElementById('instructions')
    
    renderList.style.display = 'none';
    quizRender.style.display = 'block';
    quizRender.style.overflowY = 'hidden'
    
    let p = w.parentNode;
    let span = p.children['span'];
    let text = span.innerHTML;
    console.log(text);
    
    // database.child(`/quizData ${teacherId}`).on("child_added", (snap) => {
        // database.child("/quizData").child(teacherId).on("child_added", (snap) => {
            //     firebaseObj = snap.val();
            //     allQuizes.push(firebaseObj)
            // })
            // console.log('attempting', tamamQuiz)
    allQuizes = []
    database.child("quizData").child('allQuizzes').child(text).once("value", (snap) => {

        var thisQuiz = snap.val();
        // console.log('this quiz', thisQuiz)
        thatQuiz = thisQuiz
        // console.log('name', thisQuiz.quizName)

        name.innerHTML = thisQuiz.quizName
        marks.innerHTML = thisQuiz.marks
        time.innerHTML = thisQuiz.time + ' Minute(s)'
        syllabus.innerHTML = thisQuiz.syllabus
        instructions.innerHTML = thisQuiz.instructions
        // location = 'renderQuiz.html'

    })


}
var nextButton = document.getElementById("NextButton");
var logOutButton = document.getElementById("logOutButton");


var questionTag = document.getElementById("Question")

var opt1 = document.getElementById('Option1');
var opt2 = document.getElementById('Option2');
var opt3 = document.getElementById('Option3');
var opt4 = document.getElementById('Option4');

var Result = document.getElementById("result");
var Resultt = document.getElementById("resultt");
var Resulttt = document.getElementById("resulttt");


function proceed() {
    // location = "renderQuiz.html";

    let quiz = thatQuiz
    totalMarks = quiz.marks;
    passingScore = quiz.passingMarks
    thisTime = Number(quiz.time)

    console.log('time', thisTime)

    var quizContainer = document.getElementById('quizContainer')

    for (var i = 0; i < quiz.questions.length; i++) {
        // console.log('questions',quiz.questions[i])
        questions.push(quiz.questions[i])
    }
    // console.log(questions)
    totalQuestions = questions.length;

    loadQuestion(currentQuestion);
    quizRender.style.display = 'none';
    quizContainer.style.display = 'block';
    timer.style.display = 'block'

    getTimer()

}

function loadQuestion(questionIndex) {
    console.log('obtained marks', score)


    var q = questions[questionIndex];
    questionTag.textContent = (questionIndex + 1) + ': ' + q.question;

    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

    thisMarks = q.marks;
    // console.log('this marks', thisMarks)
}

function loadNextQuestion() {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    var corrAns = questions[currentQuestion].correctAns
    console.log('works', selectedOption)
    
    if (!selectedOption) {
        alert("Please chek at least 1 option!");
        return;
    }
    // console.log('ans', answer)
    // console.log('corrAns', questions[currentQuestion].correctAns)
    
    var answer = selectedOption.value;
    if (answer === corrAns) {
        // console.log('right ans works')
        score += Number(thisMarks);
        rightAns++
        // console.log('score', score)
        // console.log('right ans', rightAns)

    }
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    // loadQuestion(currentQuestion);

    if (currentQuestion === totalQuestions) {

        //result conditions
        if (score === 0) {
            Result.textContent = "Sorry You got ZERO"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }

        else if (score >= passingScore) {
            Result.textContent = "Congralutations You have Passed!"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }

        else if (score < passingScore) {
            Result.textContent = "Sorry to say, You have Failed!"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }
        //result conditions ends


        quizContainer.style.display = 'none';
        nextButton.style.display = "none";

        resultContainer.style.display = 'block';
        Result.style.display = "block";
        Resultt.style.display = "block";
        Resulttt.style.display = "block";

        // logOutButton.style.display = "block";
        return;
    }



    loadQuestion(currentQuestion);

}

function goToMain() {
    location = 'studentsPannel.html'
}

// timer
function getTimer() {

    var timeSet = setInterval(myTimer, 1000);
    var min = thisTime-1;
    var sec = 60;

// Times up conditions function

    function timesUpCondiotions(){
        if (score === 0) {
            Result.textContent = "Sorry You got ZERO"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }

        else if (score >= passingScore) {
            Result.textContent = "Congralutations You have Passed!"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }

        else if (score < passingScore) {
            Result.textContent = "Sorry to say, You have Failed!"
            Resultt.textContent = "Write Answers :" + rightAns + " Out of " + totalQuestions
            Resulttt.textContent = "Percentage " + (score / totalMarks) * 100
        }
    }

    function myTimer() {
        sec--;
        if (sec === 0) {
            if (min > 0) {
                min--;
                sec = 60;
            }
            else {
                timesUpCondiotions()
                clearInterval(timeSet);
                quizContainer.style.display = "none";
                nextButton.style.display = "none";
                timer.style.display = "none";

                resultContainer.style.display = "block";
                timesUp.style.display = 'block'
                resultTxt.style.display = 'none'


            }
        }
        document.getElementById('timer').innerHTML = 'Time Left: ' + min + " : " + sec;
    }
}







// allFirebase.push(allQuizes)
// console.log(allQuizes)

// for (var key in allQuizes){
//     quiz.push({[key] : allQuizes[key]})
//     console.log("quiz", quiz)
// };

// console.log(quiz[0].quizName)
//    quiz.map((val)=>{
//     console.log('map',val)

//    });
//    location = "renderQuiz.html"



