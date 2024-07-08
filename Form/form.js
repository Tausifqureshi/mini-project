let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0" + "px";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable"); //jab bhi sign in button pe click kar re ge tu sign up button ka color and background color change hoga jo hamne css me disable class me diye hai.

  signinBtn.classList.remove("disable");
});
//Signup
signupBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "65" + "px";
  // nameField.style.display="block";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable"); //jab bhi signup button pe click hoga us ke upper se css me disable class me jo bhi hamne color and backgorund color diye hoge us me se delete ho jaye ge or signin button pe add ho jaye ge.

  signinBtn.classList.add("disable");
});
