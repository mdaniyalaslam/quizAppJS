var database = firebase.database().ref('/');
// var auth = firebase.auth();

// var studentName = document.getElementById("studentName");
// var studentEmail = document.getElementById("studentEmail");
// var studentPass = document.getElementById("studentPass");

var studentFirstName = document.getElementById('studentFirstName')
var studentLstName = document.getElementById('studentLastName')
var studentEmail = document.getElementById('studentEmail')
var studentPass = document.getElementById('studentPass')


function signup() {
    var student = {
        studentFirstName: studentFirstName.value,
        studentLastName: studentLastName.value,
        studentEmail: studentEmail.value,
        studentPass: studentPass.value
    }
    // console.log(student);

    firebase.auth().createUserWithEmailAndPassword(student.studentEmail, student.studentPass)
    .then(function (res) {
        database.child('student/'+ res.uid).set(student)
        .then(function(res){
            alert('Success!')
            location = "studentsLogin.html";

        })
        // console.log(res.uid);
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}

