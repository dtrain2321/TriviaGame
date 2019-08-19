var timer = 30;
$("#start-btn").on("click", function(){
    
    
    setInterval(function(){
        timer;
        console.log(timer);
        timer--;
        $("#show-timer").text(timer);
    }, 1000)
});
// alert("test");

// var yearAnswer ="";
// var submitAnswer ="";
// var schoolAnswer ="";
// var principalAnswer ="";
// var loveAnswer ="";
var correctAnswers = 0;
var wrongAnswers = 0;
var yearAnswer = 0;

var questions =[
    {
        question: "yearAnswer",
        answers: ["1990","1989", "1995", "1998"],
        correctAnswer: "1989"
    },
    {
            question: "submitAnswer",
            answers: ["answer1","answer2", "answer3"],
            correctAnswer: "answer1"
        },
    {
            question: "schoolAnswer",
            answers: ["answer1","answer2", "answer3"],
            correctAnswer: "answer1"
        },

    {
            question: "principalAnswer",
            answers: ["answer1","answer2", "answer3"],
            correctAnswer: "answer1"
        },

    {
            question: "loveAnswer",
            answers: ["answer1","answer2", "answer3"],
            correctAnswer: "answer1"
        },
    ]
    for(var i = 0;i <questions.length; i++){
        var question1 = document.querySelector("#d1");
        
        question1.addEventListener("onchange", function(){
            console.log($("input").val());
        })
    }


// var yearAnswer = function(valore, rightanswer, event) {
//     event.preventDefault();
//     correctAnswers;
//     if (valore == rightanswer) {
//         //alert("OK");
//         correctAnswers++;
//         $("#correctAnswers").text(correctAnswers);
//         console.log(rightanswer);
//     }
// };

// var submitAnswer = function(valore, rightanswer) {
//     if (valore == rightanswer) {
//         alert("OK");
//     }
// };

// var schoolAnswer = function(valore, rightanswer) {
//     if (valore == rightanswer) {
//         alert("OK");
//     }
// };

// var principalAnswer = function(valore, rightanswer) {
//     if (valore == rightanswer) {
//         alert("OK");
//     }
// };

// var loveAnswer = function(valore, rightanswer) {
//     if (valore == rightanswer) {
//         alert("OK");
//     }
// };


// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(fifteenSeconds, 1000 * 15);
// setTimeout(twentySeconds, 1000 * 20);
// setTimeout(twentyFiveSeconds, 1000 * 25);
// setTimeout(timeUp, 1000 * 30);

//  Fill in the blanks to these functions.
// function fiveSeconds() {
//   $("#time-left").append("<h2>About 25 Seconds Left!</h2>");
//   console.log("25 seconds left");
// //   alert("25 seconds left");
// }

// function tenSeconds() {
//   $("#time-left").append("<h2>About 20 Seconds Left!</h2>");
//   console.log("20 seconds left");
// //   alert("20 seconds left");
// }

// function fifteenSeconds() {
//     $("#time-left").append("<h2>About 15 Seconds Left!</h2>");
//     console.log("15 seconds left");
//     // alert("15 seconds left");
//   }
// function twentySeconds() {
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// //   alert("10 seconds left");
// }

// function twentyFiveSeconds() {
//     $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//     console.log("5 seconds left");
//     // alert("5 seconds left");
//   }

// function timeUp() {
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// //   alert("time is up");


// }

    //div text to equal each question
    //if the value of answers = correctanswer
    // then they have the correct answer