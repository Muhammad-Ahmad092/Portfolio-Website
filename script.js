function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var typed = new Typed("#typed-text", {
  strings: ["Android Developer", "AI Engineer", "Freelancer"], 
  typeSpeed: 50, 
  backSpeed: 25, 
  loop: true 
});
const typedText = document.getElementById("typing-text");
  const text = typedText.innerHTML; // Get text from HTML
  typedText.innerHTML = ""; // Clear the text before typing starts
  let charIndex = 0;
  const typingSpeed = 100;

  function typeText() {
    if (charIndex < text.length) {
      typedText.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();