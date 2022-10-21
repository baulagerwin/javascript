const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

let isEmailFocusedOut = false;
let isPasswordFocusedOut = false;
let isEmailValid = false;
let isPasswordValid = false;

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", validatePassword);

submitBtn.addEventListener("click", onSubmit);
submitBtn.addEventListener("mouseenter", handleMouseOver);

function onSubmit(e) {
  if (!isEmailValid || !isPasswordValid) {
    const parentWidth = e.target.parentElement.offsetWidth;
    e.target.style.transform = `translateX(${Math.floor(
      Math.random() * parentWidth
    )}px)`;
    e.preventDefault();
    return;
  }

  console.log(`Email Address: ${email.value}`);
  console.log(`Password: ${password.value}`);
  alert("Submitted");

  e.preventDefault();
}

function validateEmail(e) {
  if (e.type === "blur") {
    isEmailFocusedOut = true;
  }

  if (!isEmailFocusedOut) return;

  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$/;

  if (!e.target.value.match(regex)) {
    emailInput.classList.add("is-invalid");
    isEmailValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    isEmailValid = true;
  }
}

function validatePassword(e) {
  if (e.type === "blur") {
    isPasswordFocusedOut = true;
  }

  if (!isPasswordFocusedOut) return;

  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  //   Just to test
  //   const regex = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  console.log(e.target.value);

  if (!e.target.value.match(regex)) {
    passwordInput.classList.add("is-invalid");
    isPasswordValid = false;
  } else {
    passwordInput.classList.remove("is-invalid");
    isPasswordValid = true;
  }
}

function handleMouseOver(e) {
  if (!isEmailValid || !isPasswordValid) {
    if (!isEmailValid) emailInput.classList.add("is-invalid");
    if (!isPasswordValid) passwordInput.classList.add("is-invalid");

    const parentWidth = e.target.parentElement.offsetWidth;
    e.target.style.transform = `translateX(${Math.floor(
      Math.random() * parentWidth
    )}px)`;
    return;
  }
}
