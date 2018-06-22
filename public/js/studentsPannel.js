var database = firebase.database().ref('/');
var studentsGreeting = document.getElementById("studentsGreeting");
var loggedInStudent = localStorage.getItem("loggedInStudent");
student = JSON.parse(loggedInStudent);
sId = student.uid;

console.log('student',student)
studentsGreeting.innerHTML = "Welcome" + "<br>" + student.studentFirstName + " " + student.studentLastName;


function makeQuiz() {
    // alert("a")
    location = "quizDetails.html"
}


var quizNames = [];
function viewAll() {
    // var allFirebase =[]
    location = "myQuizzes.html";

}
