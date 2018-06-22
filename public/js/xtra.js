[{
    "name": "computer",
    "marks": "50",
    "time": "20",
    "instructions": "attempt all quest",
    "syllabus": "chapter 1 to 5",
    "questionQuan": "5",
    "passing": "60",
    "questions": [
        {
        "question": "what is computer", "marks": "5",
        "options": [
            {
                "option1": "machine",
                 "correct": "true"
            },
            { 
                "option2": "copy",
                 "correct": "false"
                 },
            {
                 "option3": "pencel",
                  "correct": "false"
                 },
            { "option4": "eraser", 
            "correct": "false" 
                }
        
        ]
    },
    {
        "question": "what is html", "marks": "5",
        "options": [{ "option1": "code", "correct": "false" },
        { "option2": "eraser", "correct": "false" },
        { "option3": "language", "correct": "true" },
        { "option4": "editor", "correct": "false" }]
    },
    {
        "question": "fakdfj;asfj;sdjfsdffa",
        "marks": "5",
        "options": [
            {
                "option1": "asdfsfas",
                "correct": "false"
            },
            {
                "option2": "fsadff",
                "correct": "true"
            },
            {
                "option3": "adsfasf",
                "correct": "false"
            },
            {
                "option4": "fsdfafsf",
                "correct": "false"
            }
        ]
    },
    {
        "question": "fffffffffffffffffff",
        "marks": "5", "options": [{ "option1": "aaaaaaaaaaaaaa", "correct": "false" }, { "option2": "ccccccccccc", "correct": "false" }, { "option3": "rrrrrrrrrrrrrrrr", "correct": "false" }, { "option4": "fffffffffffffffffff", "correct": "true" }]
    },
    {
        "question": "dddddddddddddd",
        "marks": "5",
        "options": [
            {
                "option1": "dddddddddd",
                "correct": "true"
            },
            {
                "option2": "22222222224",
                "correct": "false"
            },
            {
                "option3": "44444444445",
                "correct": "false"
            },
            {
                "option4": "555555555555",
                "correct": "false"
            }
        ]
    }
    ]
}
]
            // database.child("quizData").child(teacherId).child(quizKey).child('questions').child(i++).set(addQuestions);

                    // else if (quizTempData === null) {
        //     // quizTempData = []
        //     // quizTempData.push(quizDetails);
        //     // localStorage.setItem("quizTempData", JSON.stringify(quizTempData))

        //     console.log('done')

        // }




        // var questionsArray = [];
// database.child('quizData').child(user.id).child('quiz1').child("questions").on('child_added',snap=>{
//     questionsArray.push(snap.val());
// });
// function checkRightAns() {
// if (selectedValue == 1) {
//     var selectedAns = option1.value
//     return true
// }
// else if (selectedValue == 2) {
//     var selectedAns = option2.value
//     return true
// }
// else if (selectedValue == 3) {
//     var selectedAns = option3.value
//     return true
// }
// else if (selectedValue == 4) {
//     var selectedAns = option4.value
//     return true
// }
// else {
//     return false
// }
// }