"use strict";

// Select all Element
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Add Event trigger to the show-modal Buttons
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}
const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27 && !modal.classList.contains("hidden")) {
    close();
  }
});
