const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const getButton = document.getElementById("contact-us-style");
const getHeader = document.getElementById("header-one");
const buttonArrow = document.getElementById("icon-arrow-two");
const getAnswer = document.getElementById("arrow-paragraph-style");

let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getButton.addEventListener("click", () => {
  if (validateEmail(inputText)) {
    getEmailValidate.style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
});

const adjustHeaderDisplay = () => {
  if (window.innerWidth > 1024) {
    getHeader.style.display = "flex";
  } else {
    getHeader.style.display = "none";
  }
};

window.addEventListener("resize", adjustHeaderDisplay);

buttonArrow.addEventListener("click", () => {
  if (getAnswer.style.display === "block") {
    getAnswer.style.display = "none";
  } else {
    getAnswer.style.display = "block";
  }
});

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
