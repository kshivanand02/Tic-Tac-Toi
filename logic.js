let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-button'); // Use querySelector for single element

let turno = true;

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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button clicked");
    if (turno) {
      box.innerText = 'o';
      turno = false;
    } else {
      box.innerText = 'x';
      turno = true;
    }
    box.disabled = true;
  });
});

// Reset button functionality
resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = '';
    box.disabled = false; // Reset the disabled state
  });
  turno = true; // Reset the turn
  console.log("Game reset");
});
const checkWinner=() =>{
    for(let pattern of winpatterns){
        
              let posval1= boxes[pattern[0]].innerText;
              let posval2=  boxes[pattern[1]].innerText;
              let posval3=  boxes[pattern[2]].innerText;
              if (posval1!=""&& posval2!=""&& posval3!="") {
                        if (posval1===posval2&&posval1===posval3){
                              console.log("winner",posval1);
        }
    }  

    }
}; 