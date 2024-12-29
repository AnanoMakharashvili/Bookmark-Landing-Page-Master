const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const getButton = document.getElementById("contact-us-style");
const getHeader = document.getElementById("header-one");
console.log(getButton);

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

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
