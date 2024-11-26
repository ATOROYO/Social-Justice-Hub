// Select the menu icon and nav links
function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.classList.toggle("active");
  navLinks.classList.toggle("active");
}

// JavaScript for Quiz
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let correctAnswers = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "correct") correctAnswers++;
  if (q2 && q2.value === "correct") correctAnswers++;

  document.getElementById(
    "quiz-result"
  ).innerHTML = `<p>You got ${correctAnswers}/2 correct answers!</p>`;
});

// Toggle menu function
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

// Function to open the discussion modal with the correct topic in particapation.html
function openDiscussion(topic) {
  const modal = document.getElementById("discussion-modal");
  const title = document.getElementById("discussion-title");

  if (topic === "voting") {
    title.textContent = "Discussion on Voting";
  } else if (topic === "petitions") {
    title.textContent = "Discussion on Petitions";
  } else if (topic === "organizations") {
    title.textContent = "Discussion on Civic Organizations";
  }

  modal.style.display = "block";
}

// Function to close the discussion modal
function closeDiscussion() {
  const modal = document.getElementById("discussion-modal");
  modal.style.display = "none";
}

// Function to handle idea submission in accountabilty.html
function submitIdea() {
  const ideaInput = document.getElementById("initiative-input");
  const ideasList = document.getElementById("submitted-ideas");

  if (ideaInput.value.trim() !== "") {
    // Create a new list item for the submitted idea
    const newIdea = document.createElement("li");
    newIdea.textContent = ideaInput.value;
    ideasList.appendChild(newIdea);

    // Clear the input field after submission
    ideaInput.value = "";
  }
}

// Function to handle strategy submission in finance.html
function submitStrategy() {
  const strategyInput = document.getElementById("strategy-input");
  const strategiesList = document.getElementById("submitted-strategies");

  if (strategyInput.value.trim() !== "") {
    // Create a new list item for the submitted strategy
    const newStrategy = document.createElement("li");
    newStrategy.textContent = strategyInput.value;
    strategiesList.appendChild(newStrategy);

    // Clear the input field after submission
    strategyInput.value = "";
  }
}

// Function to handle idea submission for wealth distribution in wealth.html
function submitWealthIdea() {
  const ideaInput = document.getElementById("wealth-idea-input");
  const ideasList = document.getElementById("submitted-wealth-ideas");

  if (ideaInput.value.trim() !== "") {
    // Create a new list item for the submitted wealth idea
    const newIdea = document.createElement("li");
    newIdea.textContent = ideaInput.value;
    ideasList.appendChild(newIdea);

    // Clear the input field after submission
    ideaInput.value = "";
  }
}

// Function to handle poll submission in wealth.html
function submitPoll() {
  const pollForm = document.getElementById("poll-form");
  const selectedOption = pollForm.querySelector(
    'input[name="strategy"]:checked'
  );
  const pollResults = document.getElementById("poll-results");

  if (selectedOption) {
    const resultText = `You voted for: ${selectedOption.value}`;
    pollResults.textContent = resultText;
  } else {
    pollResults.textContent = "Please select a strategy before submitting.";
  }
}

// Function to handle quiz submission in wealth.html
function submitQuiz() {
  const quizResult = document.getElementById("quiz-result");
  const q1Answer = document.querySelector('input[name="q1"]:checked');
  const q2Answer = document.querySelector('input[name="q2"]:checked');

  if (q1Answer && q2Answer) {
    let score = 0;
    if (q1Answer.value === "45%") score++;
    if (q2Answer.value === "Progressive Taxation") score++;

    quizResult.textContent = `You scored ${score}/2.`;
  } else {
    quizResult.textContent = "Please answer all questions before submitting.";
  }
}

// console.log("Passing time");
