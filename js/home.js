const burgerButton = document.getElementsByClassName("burger-button")[0];
const linkButtons = document.getElementsByClassName("link-buttons")[0];

burgerButton.addEventListener("click", () => {
  linkButtons.classList.toggle("active");
});
