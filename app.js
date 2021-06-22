// Fields
const usernameField = document.querySelector("#username");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const contactnumberField = document.querySelector("#contact-number");
const handleField = document.querySelector("#handle");
const fields = document.querySelectorAll("input");
// Button
const submitBtn = document.querySelector(".submit");

const requirements = {
  username: /^\w{5,16}$/,
  email: /^([\w\.\-]+)@([\w\d\-]+)\.([a-z]+)(\.[a-z]+)?$/i,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
  contact: /^\d{11}$/,
  handle: /^([a-z\d]){5,18}$/,
};

function checkFields(input, regex) {
  if (input.value) {
    input.classList.add = regex.test(input.value) ? "valid" : "invalid";
    input.nextElementSibling.className = regex.test(input.value)
      ? "valid"
      : "invalid-p";
  } else if (input.value == "") {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.remove("invalid-p");
  }
  console.log(regex.test(input.value));
}

fields.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.name);
    checkFields(e.target, requirements[e.target.name]);
  });
});
