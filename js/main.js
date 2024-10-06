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

// Function to handle idea submission
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
