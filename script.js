
let currentQuestion = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

questions.forEach(q => {
  const correctText = q.options[q.correct];
  shuffleArray(q.options);
  q.correct = q.options.indexOf(correctText);
});

function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question-number").innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("question-text").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = option;
    btn.onclick = () => selectAnswer(index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerHTML = "";
}

function selectAnswer(selected) {
  const q = questions[currentQuestion];

  let feedback = "";

  if (selected === q.correct) {
    feedback += "<h2 style='color:green;'>Correct</h2>";
  } else {
    feedback += "<h2 style='color:red;'>Incorrect</h2>";
  }

  feedback += `<p><strong>Your answer:</strong> ${String.fromCharCode(65 + selected)}</p>`;
  feedback += `<p><strong>Correct answer:</strong> ${String.fromCharCode(65 + q.correct)}</p>`;

  feedback += `<hr><h3>Why the right answer is right</h3>`;
  feedback += `<p>${q.explanation}</p>`;

  feedback += `<hr><h3>Why the other answers are wrong</h3>`;

  q.options.forEach((opt, index) => {
    if (index !== q.correct) {
      feedback += `
        <div class="wrong-answer-box">
          <strong>${String.fromCharCode(65 + index)}.</strong>
          ${q.wrongExplanations?.[index] || "This option is less operationally efficient, less scalable, or does not fully meet the requirements."}
        </div>
      `;
    }
  });

  feedback += `<hr><h3>Services used in this question</h3>`;

  if (q.services) {
    q.services.forEach(service => {
      feedback += `
        <div class="service-box">
          <strong>${service.name}</strong><br>
          ${service.definition}
        </div>
      `;
    });
  }

  feedback += `<hr><h3>Key exam clue</h3>`;
  feedback += `<p>${q.examClue || "Focus on phrases like least operational overhead, highly available, scalable, and cost-effective. AWS exam questions often hinge on these keywords."}</p>`;

  feedback += `<br><button onclick="nextQuestion()">Next Question</button>`;

  document.getElementById("feedback").innerHTML = feedback;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("quiz-container").innerHTML =
      "<h2>You completed all questions!</h2><p>Refresh the page to reshuffle and try again.</p>";
    return;
  }

  loadQuestion();
}

window.onload = loadQuestion;
