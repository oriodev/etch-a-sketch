const board = document.querySelector("#board");
const sizeBtn = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const colourbtn = document.querySelector("#colour");
const body = document.querySelector("body");

let number = 16;


function createBoard(num, bgColour, newColour) {

    let numOfSquares = num;
    let boardSize = numOfSquares * numOfSquares;

    board.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;


    for (let i = 0; i < boardSize; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = bgColour;
        square.setAttribute('id', 'square')
        
        board.appendChild(square);
    }

    const squares = document.querySelectorAll("#square");

    squares.forEach((squares) => {
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = newColour;
        });
    });

}

// change the board size

sizeBtn.addEventListener('click', () => {
    number = prompt("enter board size: ");

    if (number === null) {
        return;
    } else {

        createBoard(number);

        const squares = document.querySelectorAll("#square");
        squares.forEach((squares) => {
            squares.style.backgroundColor = "black";
        });

    }

})

// reset board

resetBtn.addEventListener('click', () => {

    const squares = document.querySelectorAll("#square");
    squares.forEach((squares) => {
        squares.style.backgroundColor = "black";
    });

    colourbtn.style.backgroundColor = "black";
    createBoard(number, "black", "white");

});

// generate a random colour

let listOfColours = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

function colourGen() {
    let randomIndex = Math.floor(Math.random() * listOfColours.length);
    return listOfColours[randomIndex]; 
}

// change to a different colour

colourbtn.addEventListener('click', () => {
    let tempColourVar = colourGen()
    createBoard(number, "white", tempColourVar);
    colourbtn.style.backgroundColor = tempColourVar;

})


// setup initial board

createBoard(number, "black", "white");