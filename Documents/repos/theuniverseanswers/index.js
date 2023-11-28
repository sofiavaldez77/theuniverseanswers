let selectElement = document.getElementById("question");
let result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  result.textContent = `Yes`;
});
