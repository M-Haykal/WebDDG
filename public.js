const menu = document.getElementById("menu");
const burger = document.getElementById("burger");

// Tambahkan event listener pada burger icon
burger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Tambahkan atau hilangkan kelas "active" pada elemen menu
});

// const burger = document.getElementById("burger");
// const menu = document.getElementById("menu");

// burger.addEventListener("click", () => {
//   menu.classList.toggle("show");
// });

const text =
  "I am a junior developer passionate about creating amazing websites.";
const typingText = document.getElementById("typing-text");
let currentCharacterIndex = 0;

function type() {
  typingText.innerHTML += text.charAt(currentCharacterIndex);
  currentCharacterIndex++;
}

function animate() {
  type();
  requestAnimationFrame(animate);
}

animate();

type();
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  ratingInputs.forEach((input) => (input.checked = false));
}

function changeText(a) {
  a.innerHTML = "Click!";
}

function resetText(a) {
  a.innerHTML = "View Project";
}

function redirectToPage(pageURL) {
  window.location.href = pageURL;
}


