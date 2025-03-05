<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="quiz-container">
    <h1>Quiz App</h1>
    <div id="question-container">
      <p id="question">Question goes here</p>
      <div id="options-container">
        <!-- Options will be dynamically inserted here -->
      </div>
    </div>
    <button id="next-btn" onclick="nextQuestion()">Next</button>
    <p id="score">Score: 0</p>
  </div>

  <script src="script.js"></script>
</body>
</html>

