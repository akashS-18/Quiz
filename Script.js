
const questionsDB = {
  math: [
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "What is the square root of 81?",
      options: ["9", "8", "7", "6"],
      answer: "9",
    },
  ],
  science: [
    {
      question: "What planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
  ],
  history: [
    {
      question: "Who was the first president of the United States?",
      options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
      answer: "George Washington",
    },
  ],
};

let currentSubject = "math";
let currentIndex = 0;
let score = 0;

const subjectSelector = document.getElementById("subject-selector");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

subjectSelector.addEventListener("change", (e) => {
  currentSubject = e.target.value;
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = "Score: 0";
  loadQuestion();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questionsDB[currentSubject].length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    nextBtn.disabled = true;
  }
});

function loadQuestion() {
  const current = questionsDB[currentSubject][currentIndex];
  questionEl.textContent = current.question;
  optionsContainer.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === current.answer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
      }
      nextBtn.click();
    };
    optionsContainer.appendChild(btn);
  });
}
