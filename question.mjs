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
    new Question("What sort of animal is Walt Disney's Dumbo?", ["Deer", "Rabbit","Elephant", "Donkey"], "Elephant"),
    new Question("What was the name of the Spanish waiter in the TV sitcom Fawlty Towers?", ["Manuel", "Pedro", "Alfonso", "Javier"], "Manuel"),
    new Question("Which battles took place between the Royal Houses of York and Lancaster?", ["Thirty Years War", "Hundred Years War","War of the Roses", "English Civil War"], "War of the Roses"),
    new Question("Which former Beatle narrated the TV adventures of Thomas the Tank Engine?", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], "Ringo Starr"),
    new Question("Queen Anne was the daughter of which English Monarch?", ["James II", "Henry VIII", "Victoria", "William I"], "James II"),
    new Question("Who composed Rhapsody in Blue?", ["Irving Berlin", "George Gershwin", "Aaron Copland", "Cole Porter"], "George Gershwin"),
    new Question("What is the Celsius equivalent of 77 degrees Fahrenheit?", ["15", "20", "25", "30"], "25"),
    new Question("Which Shakespeare play features the line 'Neither a borrower, nor a lender be'?", ["Hamlet", "Macbeth", "Othello", "The Merchant of Venice"], "Hamlet"),
    new Question("When was the first modern Olympic Games held?", ["1897", "1896", "1789", "1869"], "1896"),
    new Question("How many points is the letter X worth in English-language Scrabble?", ["8", "9", "10", "11"], "8")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate(
    Quiz(questions)
    );
