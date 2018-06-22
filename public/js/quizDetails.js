var database = firebase.database().ref("/")

var quizName = document.getElementById("quizName")
var marks = document.getElementById("marks")
var passingMarks = document.getElementById("passingMarks")
var time = document.getElementById("time")
var instructions = document.getElementById("instructions")
var syllabus = document.getElementById("syllabus")
var teacher = localStorage.getItem('loggedInTeacher');
teacher = JSON.parse(teacher)
var teacherId = teacher.uid;

function valid() {
    if ((!(quizName.value === "")) && (!(marks.value === "")) && (!(passingMarks.value === "")) && (!(time.value === ""))
        && (!(instructions.value === "")) && (!(syllabus.value === ""))) {
        return true;
    }
    else {
        
        return false;
    }
}

function submitQuizData() {
    var quizDetails = {
        quizName: quizName.value,
        marks: marks.value,
        passingMarks: passingMarks.value,
        time: time.value,
        instructions: instructions.value,
        syllabus: syllabus.value,
        tId:teacherId
        // key: ''
    }
    var check = valid()
    var tempArr = []
    if (check) {
        tempArr.push(quizDetails)
        // localStorage.setItem("quizTempData", JSON.stringify(tempArr));
        localStorage.setItem("quizTempData", JSON.stringify(tempArr));
        location = "makeQuiz.html";
    }
    else {
        event.preventDefault()
        alert("You leave some fields empty, please fill them..")
};
}
