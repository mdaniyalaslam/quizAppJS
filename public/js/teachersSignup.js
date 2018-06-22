var database = firebase.database().ref('/');
// var auth = firebase.auth();

// var teacherName = document.getElementById("teacherName");
// var teacherEmail = document.getElementById("teacherEmail");
// var teacherPass = document.getElementById("teacherPass");

var teacherFirstName = document.getElementById('teacherFirstName')
var teacherLstName = document.getElementById('teacherLastName')
var teacherEmail = document.getElementById('teacherEmail')
var teacherPass = document.getElementById('teacherPass')


function signup() {
    var teacher = {
        teacherFirstName: teacherFirstName.value,
        teacherLastName: teacherLastName.value,
        teacherEmail: teacherEmail.value,
        teacherPass: teacherPass.value
    }
    console.log(teacher);

    firebase.auth().createUserWithEmailAndPassword(teacher.teacherEmail, teacher.teacherPass)
    .then(function (res) {
        database.child('teacher/'+ res.uid).set(teacher)
        .then(function(res){
            alert('Success!')
            location = "teachersLogin.html";

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

