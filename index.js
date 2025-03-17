let UserName = document.getElementById("UserName");
let FullName = document.getElementById("FullName");
let EnterPassword = document.getElementById("EnterPassword");
let ConfirmPassword = document.getElementById("ConfirmPassword");
let EnterYourEmail = document.getElementById("EnterYourEmail");
let Mobile = document.getElementById("Mobile");
let submitBtn = document.getElementById("submitBtn");

//ERROR MESSAGES
let UserNameErrMsg = document.getElementById("UserNameErrMsg");
let FullNameErrMsg = document.getElementById("FullNameErrMsg");
let PasswordErrMsg = document.getElementById("PasswordErrMsg");
let ConfrimPasswordErrMsg = document.getElementById("ConfrimPasswordErrMsg");
let EmailErrMsg = document.getElementById("EmailErrMsg");
let MobileErrMsg = document.getElementById("MobileErrMsg");

//Blur events
UserName.addEventListener("blur", () => {
  UserNameErrMsg.style.display = "block";
});

FullName.addEventListener("blur", () => {
  FullNameErrMsg.style.display = "block";
});

EnterPassword.addEventListener("blur", () => {
  PasswordErrMsg.style.display = "block";
});

ConfirmPassword.addEventListener("blur", () => {
  ConfrimPasswordErrMsg.style.display = "block";
});

EnterYourEmail.addEventListener("blur", () => {
  EmailErrMsg.style.display = "block";
});

Mobile.addEventListener("blur", () => {
  MobileErrMsg.style.display = "block";
});

const UserNameReg = /^[a-zA-Z0-9_]{5,20}$/;
const FullNameReg = /^[a-zA_Z]$/;
const PasswordReg = /^[A-Za-z0-9@$#!&]{8,12}$/;
const EmailReg = /^[A-Za-z0-9]+@(gmail|yahoo|outlook)\.(com|in|org)$/;
const MobileReg = /^[0-9]{10}$/;

function onSubmit(event) {
  event.preventDefault();
  isValid = true;
  //UserName
  if (UserName.value === "") {
    UserNameErrMsg.textContent = "UserName Cannot Be Empty";
    UserNameErrMsg.style.display = "block";
    isValid = false;
  } else if (UserNameReg.test(UserName.value.trim())) {
    //Alert("submited")
    UserNameErrMsg.textContent = "";
    UserNameErrMsg.style.display = "none";
  } else {
    UserNameErrMsg.textContent = "Please Enter The UserName In Correct Format";
    UserNameErrMsg.style.display = "block";
    isValid = false;
  }

  //fullname
  if (FullName.value === "") {
    FullNameErrMsg.textContent = "FullName Cannot Be Empty";
    FullNameErrMsg.style.display = "block";
    isValid = false;
  } else if (FullNameReg.test(FullName.value.trim())) {
    // alert('SUBMITTED')
    FullNameErrMsg.textContent = "";
    FullNameErrMsg.style.display = "none";
  } else {
    FullNameErrMsg.textContent = "Please Enter the FULLNAME in correct Format";
    FullNameErrMsg.style.display = "block";
    isValid = false;
  }

  //password
  if (EnterPassword.value === "") {
    PasswordErrMsg.textContent = "Password Cannot be Empty";
    PasswordErrMsg.style.display = "block";
    isValid = false;
  } else if (EnterPassword.test(EnterPassword.value.trim())) {
    // alert('SUBMITTED')
    PasswordErrMsg.textContent = "";
    PasswordErrMsg.style.display = "none";
  } else {
    PasswordErrMsg.textContent = "Please Enter the Password in correct Format";
    PasswordErrMsg.style.display = "block";
    isValid = false;
  }
  // Validate confirm password
  if (ConfirmPassword.value.trim() !== Password.value.trim()) {
    ConfrimPasswordErrMsg.textContent = "Passwords do not match";
    ConfrimPasswordErrMsg.style.display = "block";
    isValid = false;
  } else {
    ConfrimPasswordErrMsg.textContent = "";
    ConfrimPasswordErrMsg.style.display = "none";
  }

  //Email
  if (Email.value === "") {
    EmailErrMsg.textContent = "Email Cannot be Empty";
    EmailErrMsg.style.display = "block";
    isValid = false;
  } else if (EmailReg.test(Email.value.trim())) {
    // alert('SUBMITTED')
    EmailErrMsg.textContent = "";
    EmailErrMsg.style.display = "none";
  } else {
    EmailErrMsg.textContent = "Please Enter the Email in correct Format";
    EmailErrMsg.style.display = "block";
    isValid = false;
  }

  //Mobile
  if (Mobile.value === "") {
    MobileErrMsg.textContent = "Mobile Number Cannot be Empty";
    MobileErrMsg.style.display = "block";
    isValid = false;
  } else if (FullNameReg.test(Mobile.value.trim())) {
    // alert('SUBMITTED')
    MobileErrMsg.textContent = "";
    MobileErrMsg.style.display = "none";
  } else {
    MobileErrMsg.textContent = "Please Enter the Mobile in correct Format";
    MobileErrMsg.style.display = "block";
    isValid = false;
  }
  if (isValid) {
    alert("DATA SUBMITTED SUCCESSFULLY");
    UserName.value === "";
    FullName.value === "";
    Password.value === "";
    ConfirmPassword.value === "";
    Email.value === "";
    Mobile.value === "";
  }
}
