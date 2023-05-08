const cells = document.querySelectorAll('.cell');
const gstatus = document.querySelector('.status');
const restartBtn = document.querySelector('.restart');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameWon = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cellIndex = parseInt(e.target.id);
    if (gameBoard[cellIndex] === '' && !gameWon) {
        e.target.textContent = currentPlayer;
        gameBoard[cellIndex] = currentPlayer;
        if(!checkWin()){
            switchPlayer();
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gstatus.textContent = `Current player: ${currentPlayer}`;
}

function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            
            console.log('Game over 1');
            gstatus.textContent = `Player ${currentPlayer} wins!`;
            gameWon = true;
            return true;
        }

        if (!gameBoard.includes('')) {           
            gstatus.textContent = 'Tie game!';
            gameWon = true;
            return true;
        }
    }
}

function restartGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameWon = false;
    gstatus.textContent = `Current player: ${currentPlayer}`;
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
restartBtn.addEventListener('click', restartGame);


