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

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "light") {
    document.body.classList.add("light-mode");
    document.body.style.backgroundImage = "url('images/background_image_light.avif')";
    document.getElementById("modeToggle").textContent = "Dark Mode";
  } else {
    document.body.style.backgroundImage = "url('background_image.jpg')";
    document.getElementById("modeToggle").textContent = "Light Mode";
  }
});

// Toggle Light/Dark Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  document.getElementById("modeToggle").textContent = isLight ? "Dark Mode" : "Light Mode";

  // Change background image
  document.body.style.backgroundImage = isLight
    ? "url('images/background_image_light.avif')"
    : "url('background_image.jpg')";

  // Save preference
  localStorage.setItem("theme", isLight ? "light" : "dark");
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


const projects = {
  ids: ["images/ids.jpeg", "images/ids2.jpeg", "images/ids3.jpeg"],
  angry: ["images/ang1.png", "images/ang2.png", "images/ang3.png","images/ang4.png","images/ang5.png"],
  byte: ["images/byte1.jpeg", "images/byte2.jpeg", "images/byte3.jpeg"],
};

document.querySelectorAll(".project-slider").forEach(slider => {
  const projectKey = slider.getAttribute("data-project");
  const images = projects[projectKey];
  let index = 0;
  const imgElement = slider.querySelector(".slider-img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  function updateImage() {
    imgElement.src = images[index];
  }

  function nextImage() {
    index = (index + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateImage();
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  setInterval(nextImage, 3000); // auto change every 4 seconds
});



