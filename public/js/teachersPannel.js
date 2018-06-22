var database = firebase.database().ref('/');
var teachersGreeting = document.getElementById("teachersGreeting");
var loggedInTeacher = localStorage.getItem("loggedInTeacher");
teacher = JSON.parse(loggedInTeacher);
tId = teacher.uid;

teachersGreeting.innerHTML = "Welcome" + "<br>" + teacher.teacherFirstName + " " + teacher.teacherLastName;


function makeQuiz() {
    // alert("a")
    location = "quizDetails.html"
}


var quizNames = [];
function viewAll() {
    // var allFirebase =[]
    location = "myQuizzes.html";

}
