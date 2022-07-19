
const gameBoard = (() => {
  // DOM ELEMENTS ------
  const gameSquares = document.querySelectorAll('[data-cell]');
const chooseShapeScreen = document.querySelector('.chooseShape');
const shapes = document.querySelectorAll('.shapes');
const results = document.querySelector('.results');
const resultsMessage = document.querySelector('.resultsMessage');
const resartGame = document.querySelector('.startOver');

//Variables ----
  const xClass = 'X';
  const circleClass = 'O';
  let circleTurn = false;


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
endGame(false);
 } else if (draw()) {
  endGame(true);
 } else {
  switchTurns();
 }

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


function draw() {
  return [...gameSquares].every(square => {
    return square.classList.contains(xClass) || square.classList.contains(circleClass);
  })
}

function endGame(draw) {
if (draw) {
  resultsMessage.textContent = "Tie Game !"
} else {
  resultsMessage.textContent = `${circleTurn ? "O" : "X"} Wins!`;
}
results.removeAttribute('id');
}


resartGame.addEventListener('click', function() {
circleTurn = false;
results.id = 'resultsClosed';
gameSquares.forEach(square => {
  square.classList.remove(xClass);
  square.classList.remove(circleClass);
  square.textContent = "";
  square.removeEventListener('click', handleClick);
  square.addEventListener('click', handleClick, {once: true});
  chooseShapeScreen.removeAttribute('id');
})
});


shapes.forEach(shape => {
  shape.addEventListener('click', function() {
    if (shape.id == "o") {
      circleTurn = true;
    }
    chooseShapeScreen.id = 'chooseShapeClosed';
  })
})

})();










