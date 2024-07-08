let optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector(".select-btn"),
  sBtnText = document.querySelector(".sbtn-text");
(options = document.querySelectorAll(".option")),
  //   selectBtn.addEventListener('click',()=> optionMenu.classList.toggle("active"));
  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
  });

//select function means jo bhi slect o your select me jayge ga;
options.forEach((option) => {
  // console.log(option)
  option.addEventListener("click", () => {
    let selectOption = option.querySelector(".option-text").innerText;
    sBtnText.innerText = selectOption;
    console.log(selectOption);
  });
});
