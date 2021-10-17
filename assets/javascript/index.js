// var startButton = document.querySelector('#start');
// var stage = document.querySelector('#stage');
// var currentQuestion = 0;
// var nextBtn;
// var questions = [
//     '<p>This is question one!</p> <button id = "next">Next Question</button>',
//     '<p>This is question two!</p> <button id = "next">Next Question</button>',
//     '<p>This is question three!</p> <button id = "next">Next Question</button>',
//     '<p>This is question four!</p> <button id = "next">Next Question</button>',
//     '<p>This is question five!</p>'
// ]

var startBtnEL = document.getElementById('start-btn');
var nextBtnEl = document.getElementById('next-btn');
var quesContEl = document.getElementById('question-container');
var questionEl = document.getElementById('questions');
var answerBtnEl = document.getElementById('answer-btns');
var shuffledQues, currentQuestIndex;


var score = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;



timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});



startBtnEL.addEventListener('click', startGame);
nextBtnEl.addEventListener('click', () => {
    currentQuestIndex++
    setNextQuestion();
});

function startGame(){
    startBtnEL.classList.add('hide');
    shuffledQues = questions.sort(() => Math.random - .5);
    currentQuestIndex = 0;
    quesContEl.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQues[currentQuestIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtnEl.appendChild(button);
    })
}

function resetState(){
    nextBtnEl.classList.add('hide');
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}


function selectAnswer(e){
    var selectedBtn = e.target;
    var correct = selectedBtn.dataset.correct;

    Array.from(answerBtnEl.children).forEach(button => {
        setStatClass(button, button.dataset.correct)
    });
    if (shuffledQues.length > currentQuestIndex + 1) {
        nextBtnEl.classList.remove('hide');
    }else{
        startBtnEl.innerText = 'Restart';
        startBtnEl.classList.remove('hide');
    }
    
}

function setStatClass(element, correct){
    clearStatClass(element);
    if (correct) {
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Alerts', correct: true},
            {text: 'Numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within _______.',
        answers: [
            {text: 'Quotes', correct: false},
            {text: 'Curly Brackets', correct: false},
            {text: 'Parenthesis', correct: true},
            {text: 'Square Brackets', correct: false}
        ]  
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'All of the above', correct: true}
        ]  
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answers: [
            {text: 'Commas', correct: false},
            {text: 'Curly Brackets', correct: false},
            {text: 'Quotes', correct: true},
            {text: 'Parenthesis', correct: false}
        ]  
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'Terminal/GitBash', correct: false},
            {text: 'For Loops', correct: false},
            {text: 'console.log', correct: true}
        ]  
    }

];



// startButton.addEventListener('click', function(event){
//     if (currentQuestion != 0 &&currentQuestion<5) startButton.innerHTML = "Next Question"
//     stage.innerHTML = questions[currentQuestion]
//     nextBtn = document.querySelector('#next')

//     if (next){
//         next.addEventListener('click', function(event){
//             currentQuestion++
//             stage.innerHTML = questions[currentQuestion]
//         })
//     }
// });

