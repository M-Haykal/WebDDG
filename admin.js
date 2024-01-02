const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const text =
  "I am a junior developer passionate about creating amazing websites.";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
  typingText.innerHTML += text.charAt(index);
  index++;
  if (index < text.length) {
    setTimeout(type, 50); 
  } else {
    setTimeout(resetText, 100);
  }
}

function resetText() {
  typingText.innerHTML = ""; 
  index = 0; 
  type(); 
}

type(); 
