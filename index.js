const submitbtn = document.querySelector(".btn");
const resultCard = document.querySelector(".thankyou-section");
const questionCard = document.querySelector(".front-section");
const resultText = document.querySelector(".selected-num");

let value = ``;
let buttonList = document.querySelectorAll("button");
buttonList.forEach(function (i) {
  i.addEventListener("click", function (e) {
    value = e.target.innerHTML;
    const numSelected = document.getElementsByClassName("selected");
    console.log(numSelected);
    numSelected.tex = `You selected ${value} out of 5`;
  });
});

submitbtn.addEventListener("click", function () {
  resultCard.classList.add("show-card");
  questionCard.classList.add("hide-card");
  resultText.textContent = `You selected ${value} out of 5`;
});
