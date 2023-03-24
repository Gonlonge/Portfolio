const burgerButton = document.getElementsByClassName("burger-button")[0];
const linkButtons = document.getElementsByClassName("link-buttons")[0];

burgerButton.addEventListener("click", function () {
  linkButtons.classList.toggle("active");
});
