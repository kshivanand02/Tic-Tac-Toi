let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-button');
let turno = true;
let gameOver = false;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("Winner:", pos1);
      alert(`Winner is ${pos1.toUpperCase()}!`);
      gameOver = true;

      // Optionally disable all boxes after win
      boxes.forEach(box => box.disabled = true);
      break;
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "" && !gameOver) {
      box.innerText = turno ? 'o' : 'x';
      box.disabled = true;
      checkWinner();
      turno = !turno;
    }
  });
});

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = '';
    box.disabled = false;
  });
  turno = true;
  gameOver = false;
  console.log("Game reset");
});
