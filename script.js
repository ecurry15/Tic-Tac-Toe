
const gameBoard = (() => {
  // DOM ELEMENTS ------
  const gameSquares = document.querySelectorAll('[data-cell]');
 const gridContainer = document.getElementById('grid-container');

//Variables ----
  const xClass = 'X';
  const circleClass = 'O';
  let circleTurn;


let startGame = () => {
  circleTurn = false;
  gameSquares.forEach(square => {
    square.addEventListener('click', handleClick, {once: true})
  })
};

startGame();

  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

// Handle Game Square Clicks ---
 gameSquares.forEach(square => {
   square.addEventListener('click', handleClick, {once: true})
 })

function handleClick(e) {
  const cell = e.target;
  const currentSymbol = circleTurn ? circleClass : xClass;
  placeMark(cell, currentSymbol);
 if (checkForWinner(currentSymbol)) {
console.log('win');
 }
  switchTurns();
}

// Add a data attribute to the clicked sqaure and input specified symbol --
let placeMark = (cell, currentSymbol) => {
  cell.classList.add(currentSymbol);
  cell.textContent = currentSymbol;
}

let switchTurns = () => {
  circleTurn = !circleTurn;
}


function checkForWinner(currentSymbol) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return gameSquares[index].classList.contains(currentSymbol)
    })
  })
}

})();










