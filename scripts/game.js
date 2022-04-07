let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position){
    if(board[position] == '' && !gameOver){
        board[position] = symbols[playerTime];
        
        playerTime = (playerTime == 0)? 1 : 0;
    }
}

function isWin(){
    for(let i = 0; i < winState.length; i++){
        let sequence = winState[i];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if(board[position1] == board[position2] && 
           board[position1] == board[position3] && 
           board[position1] != ''){
               
            setTimeout(() => {
                alert(`Player ${playerTime + 1} Wins!`)
            }, 1)

            gameOver = true;
        }
    }
}

function noWinner(){
    
}