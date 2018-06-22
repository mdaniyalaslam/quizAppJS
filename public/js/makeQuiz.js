var database = firebase.database().ref("/")
var quizTempData = localStorage.getItem("quizTempData")
quizTempData = JSON.parse(quizTempData)

var teacher = localStorage.getItem('loggedInTeacher');
teacher = JSON.parse(teacher)

var teacherId = teacher.uid;
// var quizKey = quizTempData.key;
var i = 0;

// console.log(teacherId)
qCounter = 1
var counter = document.getElementById("qCounter").innerHTML = qCounter;

var question = document.getElementById("question")
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var marks = document.getElementById('marks');
// console.log(quizTempData)



function addMore() {
    var selectedId = document.getElementById("selectedId");
    var selector = document.getElementById("select")
    var selectedValue = selector[selector.selectedIndex].value;

    var quizTempData = localStorage.getItem("quizTempData")
    quizTempData = JSON.parse(quizTempData)

    if (quizTempData !== null) {

        if (selectedValue == 1) {
            var selectedAns = '1'
        }
        else if (selectedValue == 2) {
            var selectedAns = '2'
        }
        else if (selectedValue == 3) {
            var selectedAns = '3'
        }
        else if (selectedValue == 4) {
            var selectedAns = '4'
        }

        else{
            event.preventDefault()
            alert("Please Select Right answer")
        } 
            
        var addQuestions = {
            question: question.value,
            option1: option1.value,
            option2: option2.value,
            option3: option3.value,
            option4: option4.value,
            correctAns: selectedAns,
            marks: marks.value

        }
        question.value = ""
        option1.value = ""
        option2.value = ""
        option3.value = ""
        option4.value = ""
        selector.value = selectedId.text
        marks.value = ""

        // console.log(addQuestions)

        
        quizTempData.push(addQuestions)
        console.log("after add", quizTempData)
        localStorage.setItem("quizTempData", JSON.stringify(quizTempData));
        qCounter++
    }
    else {
        alert("Add instructioins first!")
        location = "quizDetails.html"
    }
}




function save() {
    quizTempData = localStorage.getItem("quizTempData")
    localData = JSON.parse(quizTempData)
    quizInfo = localData[0];
    localData.shift()
    var allQuestions = localData

    database.child("quizData").child(teacherId).child(quizInfo.quizName).set(quizInfo)
    database.child("quizData").child("allQuizzes").child(quizInfo.quizName).set(quizInfo)
    // .then((snap)=>{
        
        // quizKey = snap.key
        // database.child("quizData").child(teacherId).child(quizKey).update({key:quizKey})
        database.child("quizData").child(teacherId).child(quizInfo.quizName).child('questions').set(allQuestions);
        database.child("quizData").child("allQuizzes").child(quizInfo.quizName).child('questions').set(allQuestions);

        localStorage.removeItem("quizTempData");
        location = "teachersPannel.html"
    // })
   
    // alert("saved!")
}




