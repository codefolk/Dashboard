const dropdown = document.querySelector(".navigation-links");
const crossButton = document.querySelector("#close-dropdown");
const navButton = document.querySelector("#open-dropdown");
const btn = document.querySelector(".navbar-toggle");

navButton.addEventListener("click", () => {
    dropdown.style.display = "flex";
    crossButton.style.display = "block";
    navButton.style.display = "none";
});
crossButton.addEventListener("click", () => {
    dropdown.style.display = "none";
    crossButton.style.display = "none";
    navButton.style.display = "block";
  }
);

