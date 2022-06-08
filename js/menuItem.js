/* hamburger menu */

const burgerButton = document.getElementsByClassName("burger-button")[0];
const linkButtons = document.getElementsByClassName("link-buttons")[0];

burgerButton.addEventListener("click", function () {
  linkButtons.classList.toggle("active");
});

/* arrow function */
// burgerButton.addEventListener("click", () => {
//   linkButtons.classList.toggle("active");
// });

/* modal */

let modal = document.getElementById("imgModal");

let btn = document.getElementById("openModal");

let span = document.getElementsByClassName("closeModal")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
