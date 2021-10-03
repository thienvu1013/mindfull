const menuBtn = document.querySelector(".menu-btn");
const prototypes = document.querySelectorAll(".prototype__item");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < prototypes.length; i++) {
    setTimeout(function () {
      prototypes[i].classList.add("fade-in");
    }, 200 * i);
  }
});
