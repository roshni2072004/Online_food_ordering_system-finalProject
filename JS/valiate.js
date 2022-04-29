var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn1");
function register() {
  x.style.left = "-400px";
  y.style.left = "8%";
  z.style.left = "110px";
}

function login() {
  x.style.left = "8%";
  y.style.left = "450px";
  z.style.left = "0";
}
function handlelogin() {
  document.location.href = "https://www.facebook.com/";
}
function googlelogin() {
  document.location.href = "https://accounts.google.com/";
}
function tweetlogin() {
  document.location.href = "https://twitter.com/";
}




  
// register
const form = document.querySelector("#register");
const usernamein = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (event) => {
  validateForm();
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  })
  return result;
}

function validateForm() {
  //username
  if (usernamein.value.trim() == "") {
    setError(usernamein, "username cannot be empty");
  } else if (
    usernamein.value.trim().length < 5 ||
    usernamein.value.trim().length > 14
  ) {
    setError(usernamein, "Username length must be in between 4 and 15");
  } else {
    setSuccess(usernamein);
  }

  //Email
  if (email.value.trim() == "") {
    setError(email, "provide email address");
  } else if (isEmailValid(email.value)) {
    setSuccess(email);
  }

  //password
  if (password.value.trim().length < 8) {
    setError(password, "Password must have atleast 8 characters");
  } else {
    setSuccess(password);
  }

  //confirm password
  if (password.value.trim().length < 8) {
    setError(cpassword, "Password must have atleast 8 characters");
  } else if (cpassword.value != password.value || cpassword.value == "") {
    setError(cpassword, "Password and confirm password must match");
  } else {
    setSuccess(cpassword);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const para = parent.querySelector("p");
  para.textContent = errorMessage;
}
function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function registered(){
  if(!validateForm()){
    alert("Please fill in the 'Your Name' box.");
  }
  // if (document.inputgrp.input.value === "") {
  //     alert("Please fill in the 'Your Name' box.");
  // }
  else {
      alert("you are registered");
  }
}
// function isEmailValid(email) {}
