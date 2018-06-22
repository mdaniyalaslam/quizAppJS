var database = firebase.database().ref('/');


var studentEmail = document.getElementById("studentEmail");
var studentPass = document.getElementById("studentPass");

document.getElementById("stop").addEventListener("submit",
    function submit() {
        event.preventDefault()

        var student = {
            email: studentEmail.value,
            pass: studentPass.value
        }
        firebase.auth().signInWithEmailAndPassword(student.email, student.pass)
        .then(
            function (success) {
                // console.log(success.uid);
                // localStorage.setItem("UID",success.uid)
                database.child("student/" + success.uid)
                    .once("value", function (snapshot) {
                        var convert = snapshot.val()
                        delete convert.teacherPass;
                        convert.uid = success.uid;
                        localStorage.setItem('loggedInStudent', JSON.stringify(convert))
                        location = "studentsPannel.html"
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