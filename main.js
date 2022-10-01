const squares = document.querySelector("#squares");
const body = document.querySelector("body");


for (let i = 0; i <= 16; i++) {

    for (let j = 0; j <= 16; j++) {

        // make four squares
        const square = document.createElement('div');
        square.setAttribute("id", "individualSquare");
        squares.appendChild(square);

    }
}