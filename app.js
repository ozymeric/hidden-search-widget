let input = document.querySelector(".input");
let searchDiv = document.querySelector(".search");

function activate() {
  input.classList.toggle("active");
  input.focus();
}

searchDiv.addEventListener("click", activate);
