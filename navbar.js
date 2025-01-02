document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const signInBtn = document.querySelector(".signInBtn");
  const imgUl = document.querySelector(".img-ul");

  if (!burger || !navbar || !signInBtn || !imgUl) {
    console.error("One or more elements could not be found in the DOM.");
    return;
  }

  burger.addEventListener("click", () => {
    imgUl.classList.toggle("v-nav-resp");
    navbar.classList.toggle("h-nav-resp");
    console.log("Event is Working");
  });
});
