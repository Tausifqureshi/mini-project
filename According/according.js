let accordians = document.querySelectorAll(".according");
accordians.forEach((accordian) => {
  let icon = accordian.querySelector(".icon");
  //   console.log(icon)
  let answer = accordian.querySelector(".answer");
  // console.log(answer)

  accordian.addEventListener("click", () => {
    // icon.classList.toggle("active")
    // answer.classList.toggle("active") //aisa bhi kar sakte hai;
 
    //=========================================//
    if (icon.classList.contains("active")) {
      //contains batata hai koi class hai ya nhi  ?
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
