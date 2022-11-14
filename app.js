let input = document.querySelector(".input");
let searchDiv = document.querySelector(".search");

function activate() {
  input.classList.toggle("active");
  input.focus();
}

searchDiv.addEventListener("click", activate);

// UDEMY SOLUTION:

// const search = document.querySelector(".search");
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");

// btn.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });
