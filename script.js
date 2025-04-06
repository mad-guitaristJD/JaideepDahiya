// Toggle CSS button logic
const toggleButton = document.getElementById('cssToggle');
const linkTag = document.querySelector('link[rel="stylesheet"]');
const profileContainer = document.getElementById('profileContainer');

let cssDisabled = false;

toggleButton.addEventListener('click', () => {
  cssDisabled = !cssDisabled;

  // Disable/Enable CSS
  linkTag.disabled = cssDisabled;

  // Hide/Show Profile
  profileContainer.style.display = cssDisabled ? 'none' : 'block';

  // Update button text
  toggleButton.textContent = cssDisabled ? 'Enable CSS' : 'Disable CSS';
});

// Typing animation logic
const texts = ["Cybersecurity Enthusiast", "Guitarist", "Feeling Good", "Hell Yeahh!!"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const speed = 150;
const element = document.getElementById("typed-text");

function typeLoop() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
      element.textContent = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
      element.textContent = currentText;
    }

    if (j === texts[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? speed / 2 : speed);
}

typeLoop();
