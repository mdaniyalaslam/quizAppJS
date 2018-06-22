var database = firebase.database().ref("/")

var quizArea = document.getElementById("quizArea");


database.child("quizData/").once("child_added", snapshot => {
  // var allQuizes = snapshot.val();
  var allQuizes = snapshot.val();
  for (var i in allQuizes) {
    console.log(allQuizes[i].quizName)
  }
  // console.log(quiz1)
})

var cardDiv = document.createElement("DIV");
cardDiv.setAttribute("class","card");


var header = document.createElement("H4");
h4.setAttribute("class","card-header");
// var headerText = document.createTextNode()

var cardBody = document.createElement("Div");
cardBody.setAttribute("class","card-body");

var question = document.createElement("H5");
question.setAttribute("class","card-text");

var option1 = document.createElement("INPUT");
option1.setAttribute("type","radio");

var option2 = document.createElement("INPUT");
option2.setAttribute("type","radio");

var option3 = document.createElement("INPUT");
option3.setAttribute("type","radio");


// obj.option.map((ind,val)=>{
//     var p = document.createElement("input");
//     p.setAttribute("type","radio");
//     p.value = val;
//     divOP.appendChild(p);
// })

