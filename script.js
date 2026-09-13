let questions = [
  {
    question: "Which keyword is used to declare a variable whose value can be changed?",
    options: ["const", "let", "static", "fixed"],
    answer: "let"
  },
  {
    question: "What does textContent do?",
    options: [
      "Changes the text inside an element",
      "Deletes an element",
      "Creates a new array",
      "Adds CSS to an element"
    ],
    answer: "Changes the text inside an element"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["JavaScript", "Python", "CSS", "Java"],
    answer: "CSS"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "pop()",
      "shift()",
      "push()",
      "slice()"
    ],
    answer: "push()"
  },
   {
    question: "What does === check in JavaScript?",
    options: [
      "Only the value",
      "Only the type",
      "Both value and type",
      "Whether a variable exists"
    ],
    answer: "Both value and type"
  },
  {
    question: "Which method runs a function for every element in an array?",
    options: [
      "forEach()",
      "push()",
      "find()",
      "join()"
    ],
    answer: "forEach()"
  },
   {
    question: "Which event is used to detect a button click?",
    options: [
      "hover",
      "change",
      "click",
      "submit"
    ],
    answer: "click"
  },
  {
    question: "What does classList.toggle() do?",
    options: [
      "Adds or removes a class",
      "Deletes an HTML element",
      "Changes an array",
      "Creates a function"
    ],
    answer: "Adds or removes a class"
  },





];

let currentQuestion = 0;
let question = questions[currentQuestion];
let score = 0;
let answered = false;

let questionElement = document.querySelector(".question");
let optionButtons = document.querySelectorAll(".options button");
let resultElement = document.querySelector(".result");
let nextButton = document.querySelector(".nextButton");

questionElement.textContent = question.question;


optionButtons.forEach(function (button, index) {
  button.textContent = question.options[index];

  button.addEventListener("click", function () {


    if (answered === false) {

      if (button.textContent === question.answer) {
        score++;
        
        resultElement.textContent = "Correct!";
      } else {
        
        resultElement.textContent = "Wrong!";
      }

      answered = true;
    }

    
  });
});



nextButton.addEventListener("click", function () {

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;
    question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionButtons.forEach(function (button, index) {
      button.textContent = question.options[index];
    });

    answered = false;
    resultElement.textContent = "";

  }

  else{
    resultElement.textContent="Your Score "+score+"/"+questions.length ;
  }

});