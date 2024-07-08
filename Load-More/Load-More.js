// ================================== load more code only ============================================//
// load more one button code only
// document.addEventListener("DOMContentLoaded", () => {
//   const loadMoreBtn = document.querySelector("#load-more");
//   let currentItem = 3;
//   const itemsPerPage = 3;

//   loadMoreBtn.addEventListener("click", () => {
//     const boxes = document.querySelectorAll(".container .box-container .box");

//     for (let i = currentItem; i < currentItem + itemsPerPage && i < boxes.length; i++) {
//       boxes[i].style.display = "inline-block";
//     }

//     currentItem += itemsPerPage;

//     // Reset button text and hide if all products loaded
//     if (currentItem >= boxes.length) {
//       loadMoreBtn.textContent = "No More Items"; // Or hide completely
//       // loadMoreBtn.style.display = "none";
//     } else {
//       loadMoreBtn.textContent = "Load More";
//     }
//   });
// });

// ==================================================================================================//
//load more ande less then button code ek sath.

document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.querySelector("#load-more");
  const seeLessBtn = document.createElement("button");
  seeLessBtn.id = "see-less";
  seeLessBtn.textContent = "See Less";
  seeLessBtn.style.display = "none";
  loadMoreBtn.insertAdjacentElement("afterend", seeLessBtn);

  let currentItem = 3;
  const itemsPerPage = 3;
  const boxes = document.querySelectorAll(".container .box-container .box");

  loadMoreBtn.addEventListener("click", () => {
    for (
      let i = currentItem;
      i < currentItem + itemsPerPage && i < boxes.length;
      i++
    ) {
      boxes[i].style.display = "inline-block";
    }

    currentItem += itemsPerPage;

    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = "none";
    }

    seeLessBtn.style.display = "inline-block";
  });

  // ====================================== Lessthen code =============================================== //
  seeLessBtn.addEventListener("click", () => {
    currentItem -= itemsPerPage;

    for (let i = currentItem; i < boxes.length; i++) {
      boxes[i].style.display = "none";
    }

    if (currentItem <= itemsPerPage) {
      seeLessBtn.style.display = "none";
    }

    loadMoreBtn.style.display = "inline-block";
  });
});
