let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector(".restartBtn");
let model = document.querySelector(".model");
let closePopup = document.querySelector("#closeBtn");
let playAgain = document.querySelector(".playAgainBtn");

let turn0 = true; //playerX, playerO
const winPAtterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinning();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const checkWinning = () => {
  for (let pattern of winPAtterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        disabledBoxes();
        model.classList.add("openModel");
        document.querySelector(
          ".winnerText"
        ).innerText = `${pos1Val} is Winner .`;
      }
    }
  }
};
const resetGame = () => {
  turn0 = false;
  enableBoxes();
};
restartBtn.addEventListener("click", () => {
  resetGame();
});

playAgain.addEventListener("click", () => {
  setTimeout(location.reload(), 5000);
});
closePopup.addEventListener("click", () => {
  model.classList.remove("openModel");
});
