document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square");
    let newGame = document.querySelector("#reset")

    squares.forEach((square) =>{
        square.addEventListener("click", handleClick);
    })

    newGame.addEventListener("click", resetSquares);
})

function handleClick(){
    let position = this.id;

    handleMove(position);
    updateSquare(position);
    isWin();
    if(noWinner()){
        resetSquares();
    }
}

function updateSquare(position){
    let square = document.getElementById(position.toString());

    let symbol = board[position];

    square.innerHTML = `<div class="${symbol}"></div>`;
}

function resetSquares(){
    setTimeout(() =>{
        board = ['','','','','','','','',''];
        playerTime = 0;
        gameOver = false;
        move = 0;

        
        let squares = document.querySelectorAll(".square");

        squares.forEach((square) =>{
            square.innerHTML = '';
        })
    }, 20)
       
}