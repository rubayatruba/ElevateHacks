

// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("1. The Supreme Court ruled that _______________________ facilities for black and white were constitutional.", ["Separate but equal","fair and split","good and even","together and equal"], "Separate but equal"),
    new Question("2. Five cases of school segregation that came before the supreme court were named ...", ["Brown vs Board of education","Segregation: The Mississippi Delta","The Citizens Council","Willie George Washington Lee"], "Brown vs Board of education"),
    new Question("3. May 17, 1954 the supreme court ruled that ...", ["all schools could make their own rules regarding segregation","Schools did not have to allow people of color to attend","public schools in the nation had to admit all students regardless of race","public schools did not have a place for people of a certain race"], "public schools in the nation had to admit all students regardless of race"),
    new Question("4. When nine black students tried to attend school in Little Rock, Arkansas they were met with ...", ["the principal","the governor","National Guard troops","open arms"], "National Guard troops"),
    new Question("When 12 black students in Clinton, Tennessee tried to attend high school it caused violence and _________________.", ["fire", "chaos", "deaths", "riots"], "riots")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
// // scores
// var quizScore = 0;

// // question
// var questionCount = 0;

// document.getElementById("q1a1").disabled = false;
// document.getElementById("q1a2").disabled = false;
// document.getElementById("q2a1").disabled = false;
// document.getElementById("q2a2").disabled = false;
// document.getElementById("q3a1").disabled = false;
// document.getElementById("q3a2").disabled = false;
// document.getElementById("q4a1").disabled = false;
// document.getElementById("q4a2").disabled = false;
// document.getElementById("q5a1").disabled = false;
// document.getElementById("q5a2").disabled = false;
// document.getElementById("displayresult").disabled = true;


// // scores

// var displayResult = document.getElementById("displayresult");
// var result = document.getElementById("result");

// var restart = document.getElementById("restart");

// var q1a1 = document.getElementById("q1a1");
// var q1a2 = document.getElementById("q1a2");

// var q2a1 = document.getElementById("q2a1");
// var q2a2 = document.getElementById("q2a2");

// var q3a1 = document.getElementById("q3a1");
// var q3a2 = document.getElementById("q3a2");

// var q4a1 = document.getElementById("q4a1");
// var q4a2 = document.getElementById("q4a2");

// var q5a1 = document.getElementById("q5a1");
// var q5a2 = document.getElementById("q5a2");


// // add event listeners

// restart.addEventListener("click", restartfunction);

// q1a1.addEventListener("click", disableq1);

// q1a2.addEventListener("click", rightScore);

// q2a1.addEventListener("click", rightScore);
// q2a1.addEventListener("click", disableq2);

// q2a2.addEventListener("click", disableq2);

// q3a1.addEventListener("click", disableq3);

// q3a2.addEventListener("click", rightScore);
// q3a2.addEventListener("click", disableq3);

// q4a1.addEventListener("click", rightScore);
// q4a1.addEventListener("click", disableq4);

// q4a2.addEventListener("click", disableq4);

// q5a1.addEventListener("click", disableq5);

// q5a2.addEventListener("click", rightScore);
// q5a2.addEventListener("click", disableq5);


// function disableq1() {
//   document.getElementById("q1a1").disabled = true;
//   document.getElementById("q1a2").disabled = true;
// }

// function disableq2() {
//   document.getElementById("q2a1").disabled = true;
//   document.getElementById("q2a2").disabled = true;
// }

// function disableq3() {
//   document.getElementById("q3a1").disabled = true;
//   document.getElementById("q3a2").disabled = true;
// }

// function disableq4() {
//   document.getElementById("q4a1").disabled = true;
//   document.getElementById("q4a2").disabled = true;
// }

// function disableq5() {
//   document.getElementById("q5a1").disabled = true;
//   document.getElementById("q5a2").disabled = true;
// }

// function rightScore() {
//   quizScore +=1
//   questionCount +=1

//   console.log("questionCount = " + questionCount + " quizScore = " + mascaraScore);

//   if (questionCount == 5){
//     console.log("The Quiz is done!");
//     document.getElementById("displayresult").disabled = false;
//     // updateResult();
//   }
// }

// // if (questionCount == 5) {
// //   document.getElementById("displayresult").disabled = false;

// displayresult.addEventListener("click", displayResult2);

// function displayResult2() {
//   if (quizScore == 5){
//     result.innerHTML = "Your score is " + quizScore + " out of 5. Congrats on your perfect score. Please share the information with others."
//   else if (quizScore <5){
//     result.innerHTML = "Your score is " + quizScore + " out of 5. Retry to get a perfect score."
//   }
// }


// function restartfunction(){

//   result.innerHTML = "Your score is ...";

//   questionCount = 0;
//   foundationScore = 0;
//   mascaraScore = 0;

//   document.getElementById("q1a1").disabled = false;
//   document.getElementById("q1a2").disabled = false;
//   document.getElementById("q2a1").disabled = false;
//   document.getElementById("q2a2").disabled = false;
//   document.getElementById("q3a1").disabled = false;
//   document.getElementById("q3a2").disabled = false;
//   document.getElementById("q4a1").disabled = false;
//   document.getElementById("q4a2").disabled = false;
//   document.getElementById("q5a1").disabled = false;
//   document.getElementById("q5a2").disabled = false;
//   document.getElementById("displayresult").disabled = true;
// }
