let zoneOne = [];
let zoneTwo = [];
let zoneThree = [];
let zoneFour = [];
let zoneFive = [];
let zoneSix = [];
let zoneSeven = [];
let zoneEight = [];
let gameMoves = [];
let playerOneSelection = "";
let playerTwoSelection = "";
let currentPlayer = 1;

const gameSquares = document.querySelectorAll('.gridSquares');
const chooseShapeScreen = document.querySelector('.chooseShape');
const shapes = document.querySelectorAll('.shapes');
const resultsTab = document.querySelector('.results');
const resultsMessage = document.querySelector('.resultsMessage');
const startOver = document.querySelector('.startOver');


shapes.forEach(shape => {
  shape.addEventListener('click', function () {
chooseShapeScreen.id = 'chooseShapeClosed';
if (shape.id == 'x') {
  playerOneSelection = "x";
  playerTwoSelection = "o";
} else {
  playerOneSelection = "o";
  playerTwoSelection = "x";
}
  })
});


const resetGame = () => {
  zoneOne = [];
  zoneTwo = [];
  zoneThree = [];
  zoneFour = [];
  zoneFive = [];
  zoneSix = [];
  zoneSeven = [];
  zoneEight = [];
  gameMoves = 0;
  playerOneSelection = "";
  playerTwoSelection = "";
  currentPlayer = 1;
}

const checkForWinner = function() {
  //X Wins ----  //
  if (zoneOne[0] == "x" && zoneOne[1] == "x" && zoneOne[2] == "x" || zoneTwo[0] == "x" && zoneTwo[1] == "x" && zoneTwo[2] == "x" || zoneThree[0] == "x" && zoneThree[1] == "x" && zoneThree[2] == "x" || zoneFour[0] == "x" && zoneFour[1] == "x" && zoneFour[2] == "x" || zoneFive[0] == "x" && zoneFive[1] == "x" && zoneFive[2] == "x" || zoneSix[0] == "x" && zoneSix[1] == "x" && zoneSix[2] == "x" || zoneSeven[0] == "x" && zoneSeven[1] == "x" && zoneSeven[2] == "x" || zoneEight[0] == "x" && zoneEight[1] == "x" && zoneEight[2] == "x") {
   resultsMessage.textContent = "X Wins !";
resultsTab.removeAttribute('id');
   //O Wins ---- //
  } else if (zoneOne[0] == "o" && zoneOne[1] == "o" && zoneOne[2] == "o" || zoneTwo[0] == "o" && zoneTwo[1] == "o" && zoneTwo[2] == "o" || zoneThree[0] == "o" && zoneThree[1] == "o" && zoneThree[2] == "o" || zoneFour[0] == "o" && zoneFour[1] == "o" && zoneFour[2] == "o" || zoneFive[0] == "o" && zoneFive[1] == "o" && zoneFive[2] == "o" || zoneSix[0] == "o" && zoneSix[1] == "o" && zoneSix[2] == "o" || zoneSeven[0] == "o" && zoneSeven[1] == "o" && zoneSeven[2] == "o" || zoneEight[0] == "o" && zoneEight[1] == "o" && zoneEight[2] == "o") {
    resultsMessage.textContent = "O Wins !";
    resultsTab.removeAttribute('id');
  };
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  };
  gameMoves++;
};

const updateGame = (zoneOne, zoneTwo, zoneThree , zoneFour) => {
  if (currentPlayer == 1) {
    zoneOne.push(playerOneSelection);
    zoneTwo.push(playerOneSelection);
    if (zoneThree) {
      zoneThree.push(playerOneSelection);
    };
    if (zoneFour) {
      zoneFour.push(playerOneSelection);
    };
  } else {
    zoneOne.push(playerTwoSelection);
    zoneTwo.push(playerTwoSelection);
    if (zoneThree) {
      zoneThree.push(playerTwoSelection);
    };
    if (zoneFour) {
      zoneFour.push(playerTwoSelection);
    };
  };
}


gameSquares.forEach(square => {
  square.addEventListener('click', function() {

const addShape = () => {
  if (currentPlayer == 1) {
    square.textContent = playerOneSelection;
  } else {
    square.textContent = playerTwoSelection;
  }
}
if (gameMoves == 9 ) {
  addShape();
  resultsMessage.textContent = "Tie Game !";
resultsTab.removeAttribute('id');
resetGame();
} else if (gameMoves != 9) {
  if (square.textContent === '') {
//square 1 -- //
if (square.id == 'one') {
  updateGame(zoneOne, zoneSix, zoneEight);
addShape();

//square 2 -- //
} else if (square.id == 'two') {
  updateGame(zoneTwo, zoneSix);
  addShape();

  //square 3 -- //
} else if (square.id == 'three') {
 updateGame(zoneThree, zoneSix, zoneSeven);
 addShape();

} else if (square.id == 'four') {
  updateGame(zoneOne, zoneFive);
  addShape();

} else if (square.id == 'five') {
  updateGame(zoneTwo, zoneFive, zoneEight, zoneSeven);
  addShape();

} else if (square.id == 'six') {
  updateGame(zoneThree, zoneFive);
  addShape();

} else if (square.id == 'seven') {
  updateGame(zoneOne, zoneFour, zoneSeven);
  console.log(zoneOne);
  addShape();

} else if (square.id == 'eight') {
  updateGame(zoneTwo, zoneFour);
  addShape();
  
} else if (square.id == 'nine') {
  updateGame(zoneThree, zoneFour , zoneEight);
  addShape();
};
checkForWinner();
  }
}
  })
})

startOver.addEventListener('click', function() {
resultsTab.id = "resultsClosed";
chooseShapeScreen.removeAttribute('id');
resetGame();
gameSquares.forEach(square => {
  square.textContent = "";
})
});