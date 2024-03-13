// Variables Name, Email
const nameWrapper = document.querySelector("#name-wrapper");
const nameError = document.querySelector("#error-name");

const emailWrapper = document.querySelector("#email-wrapper");
const emailError = document.querySelector("#error-email");

// Variables Date, Time
const dateWrapper = document.querySelector("#date-wrapper");
const dateError = document.querySelector("#error-date");
const datePastError = document.querySelector("#error-past-date");

const timeWrapper = document.querySelector("#time-wrapper");
const timeError = document.querySelector("#error-time");

let futureDate = true;

function checkFutureDate() {
  let month = document.querySelector("#month").value;
  let day = document.querySelector("#day").value;
  let year = document.querySelector("#year").value;

  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;

  if ((month < currentMonth) & (day < currentDay)) {
    dateWrapper.classList.add("change");
    datePastError.classList.remove("hidden");
    dateError.classList.add("hidden");
    futureDate = false;
  }

  if (month == "" || day == "" || year == "") {
    datePastError.classList.add("hidden");
    dateError.classList.remove("hidden");
  }
}

// Validation Form
function validateForm() {
  let valid = true;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let month = document.querySelector("#month").value;
  let day = document.querySelector("#day").value;
  let year = document.querySelector("#year").value;
  let hour = document.querySelector("#hour").value;
  let minute = document.querySelector("#minute").value;
  let pmAm = document.querySelector("#am_pm").value;

  if (name == "") {
    nameWrapper.classList.add("change");
    nameError.classList.remove("hidden");
    valid = false;
  }

  if (email == "") {
    emailWrapper.classList.add("change-email");
    emailError.classList.remove("hidden");
    valid = false;
  }

  if (month == "" || day == "" || year == "") {
    dateWrapper.classList.add("change");
    dateError.classList.remove("hidden");
    valid = false;
  }

  if (hour == "" || minute == "") {
    timeWrapper.classList.add("change");
    timeError.classList.remove("hidden");
    valid = false;
  }

  checkFutureDate();

  if (!futureDate) {
    valid = false;
  }
  return valid;
}

// Min and Max Year
const year = document.querySelector("#year");

const today = new Date().getFullYear();
const future = new Date().getFullYear() + 1;

year.setAttribute("min", today);
year.setAttribute("max", future);


const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const numPeople = document.querySelector("#num-people");
const errorPeople = document.querySelector("#error-num-people");

function totalClick(click) {
  const sumvalue = parseInt(numPeople.innerText) + click;
  numPeople.innerText = sumvalue;

  if (sumvalue < 0) {
    numPeople.innerText = 0;
    errorPeople.classList.add("hidden");
  }
  if (sumvalue > 30) {
    numPeople.innerText = 30;
    errorPeople.classList.remove("hidden");
  }
  if (sumvalue < 30) {
    errorPeople.classList.add("hidden");
  }
}

const modalContainer = document.querySelector("#modal-container");
const reservationButton = document.querySelector(".reservation-btn");

function showModal() {
  modalContainer.style.display = "flex";
}

function hideModal() {
  modalContainer.style.display = "none";
}

reservationButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateForm()) {
    const name = document.querySelector("#name").value;
    const month = document.querySelector("#month").value;
    const day = document.querySelector("#day").value;
    const year = document.querySelector("#year").value;
    const hour = document.querySelector("#hour").value;
    const minute = document.querySelector("#minute").value;
    const amPm = document.querySelector("#am_pm").value;
    const numPeople = document.querySelector("#num-people").innerText;
    const email = document.querySelector("#email").value;

    const modalName = document.querySelector(".modal-name");
    modalName.innerText = name;

    const modalDate = document.querySelector(".modal-date");
    modalDate.innerText = `${month}/${day}/${year}`;

    const modalTime = document.querySelector(".modal-time");
    modalTime.innerText = `${hour}:${minute} ${amPm}`;

    const modalPeople = document.querySelector(".modal-people");
    modalPeople.innerText = numPeople;

    const modalEmail = document.querySelector(".modal-email");
    modalEmail.innerText = email;

    showModal();
    setTimeout(hideModal, 3000);
  }
});


const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form Submitted successfully!");
  contactForm.reset()
});
