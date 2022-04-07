document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener("click", handleClick);
    })
})

function handleClick(){
    let position = this.id;

    handleMove(position);
    updateSquare(position);
    isWin();
    noWinner();
}

function updateSquare(position){
    let square = document.getElementById(position.toString());

    let symbol = board[position];

    square.innerHTML = `<div class="${symbol}"></div>`;
}
