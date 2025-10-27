let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; // playerO playerX
let btnCount = 0;


const wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    })
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
    })
    enableBoxes();
    msgContainer.classList.add('hide');
    turnO = true;
    btnCount = 0;
    game();
    checkWin();
}   

reset.addEventListener('click', resetGame);
newBtn.addEventListener('click', resetGame);

const showMsg = (winner) => {
    disabledBoxes();
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.classList.remove('hide');
}


const checkWin = () => {
    for(let pattern of wins){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !== '' && pos1Val === pos2Val && pos2Val === pos3Val){
            showMsg(pos1Val);
        }
    }
        if(btnCount === 8){
            msg.innerText = "It's a draw!";
            msgContainer.classList.remove('hide');
        }
}



let game = boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWin();
        btnCount++;
        console.log(btnCount);

        if(box.innerText === 'X'){
            box.classList.add('color');
        }else{
            box.classList.remove('color');
        }
    })
})
