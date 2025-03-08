const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options
            .map((option, index) => 
                `<div class="answer" onclick="selectAnswer(${index})">${option}</div>`
            )
            .join("")}
    `;
}

function selectAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        score++;
    }
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer, index) => {
        answer.style.pointerEvents = 'none'; // Disable further clicks on options
        if (index === questionData.correct) {
            answer.style.backgroundColor = "#28a745"; // Green for correct answer
        } else if (index === selectedIndex) {
            answer.style.backgroundColor = "#dc3545"; // Red for wrong answer
        }
    });
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    resultText.innerText = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("quiz").style.display = "none";
    resultContainer.style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    displayQuestion();
    document.getElementById("next-button").disabled = true;
}

window.onload = function() {
    displayQuestion();
    document.getElementById("next-button").disabled = true;
};
