var database = firebase.database().ref("/")

var quizList = document.getElementById("quizlist");

database.child("quizData/").once("child_added", snapshot => {
    var allQuizes = snapshot.val();
    for (var i in allQuizes) {
      quizNames = allQuizes[i].quizName;
      console.log(quizNames)
    }
    // console.log(allQuizes)
    renderQuizes(quizNames);
  })



let renderQuizes = quizNames => {

  var cardDiv = document.createElement("DIV");
  cardDiv.setAttribute("class","card");
  
  
  var header = document.createElement("H4");
  h4.setAttribute("class","card-header");
  var headerText = document.createTextNode(quizNames)
  
  var cardBody = document.createElement("Div");
  cardBody.setAttribute("class","card-body");
  
  var question = document.createElement("H5");
  question.setAttribute("class","card-text");
}
  