
const familyMenuBtn = document.querySelector(".menu-text-family");
const specialMenuBtn = document.querySelector(".menu-text-special");
const socialMenuBtn = document.querySelector(".menu-text-social");

const imageChange = document.querySelector(".section-3-family-img");

const familyContent = document.querySelector(".section-3-family-content");
const specialContent = document.querySelector(".section-3-special-content");
const socialContent = document.querySelector(".section-3-social-content");

const familyLine = document.querySelector(".line-family");
const specialLine = document.querySelector(".line-special");
const socialLine = document.querySelector(".line-social");

const familyMenuText = document.querySelector(".menu-text-family");

function familyBtnChanges() {
  familyContent.classList.remove("hidden");
  specialContent.classList.add("hidden");
  socialContent.classList.add("hidden");

  familyLine.classList.add("change");
  specialLine.classList.remove("change");
  socialLine.classList.remove("change");

  familyMenuText.style.opacity = 1;
  imageChange.style.backgroundImage =
    "url(./images/homepage/family-gathering-desktop.jpg)";
}

function specialBtnChanges() {
  familyContent.classList.add("hidden");
  specialContent.classList.remove("hidden");
  socialContent.classList.add("hidden");

  familyLine.classList.remove("change");
  specialLine.classList.add("change");
  socialLine.classList.remove("change");

  familyMenuText.style.opacity = 0.5;

  imageChange.style.backgroundImage =
    "url(./images/homepage/special-events-desktop.jpg)";
}

function socialBtnChanges() {
  familyContent.classList.add("hidden");
  specialContent.classList.add("hidden");
  socialContent.classList.remove("hidden");

  familyLine.classList.remove("change");
  specialLine.classList.remove("change");
  socialLine.classList.add("change");

  familyMenuText.style.opacity = 0.5;

  imageChange.style.backgroundImage =
    "url(./images/homepage/social-events-desktop.jpg)";
}


familyMenuBtn.addEventListener("click", () => {
  familyBtnChanges();
});
specialMenuBtn.addEventListener("click", () => {
  specialBtnChanges();
});
socialMenuBtn.addEventListener("click", () => {
  socialBtnChanges();
});


const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
  contactForm.reset()
});
