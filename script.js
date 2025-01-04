const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const getButton = document.getElementById("contact-us-style");
const getHeader = document.getElementById("header-one");
const buttonArrow = document.getElementById("icon-arrow-two");
const getAnswer = document.getElementById("arrow-paragraph-style");
console.log(buttonArrow);

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
getHeader.style.display = "flex";

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
