var database = firebase.database().ref('/');


var teacherEmail = document.getElementById("teacherEmail");
var teacherPass = document.getElementById("teacherPass");

document.getElementById("stop").addEventListener("submit",
    function submit() {
        event.preventDefault()

        var teacher = {
            email: teacherEmail.value,
            pass: teacherPass.value
        }
        firebase.auth().signInWithEmailAndPassword(teacher.email, teacher.pass)
            .then(
            function (success) {
                // console.log(success.uid);
                // localStorage.setItem("UID",success.uid)
                database.child("teacher/" + success.uid)
                    .once("value", function (snapshot) {
                        var convert = snapshot.val()
                        delete convert.teacherPass;
                        convert.uid = success.uid;
                        localStorage.setItem('loggedInTeacher', JSON.stringify(convert))
                        location = "teachersPannel.html"
                    })
            }
            )
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

    })