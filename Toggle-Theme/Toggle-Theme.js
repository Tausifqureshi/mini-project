document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// Set the default theme to light
document.body.classList.add("light-theme");
