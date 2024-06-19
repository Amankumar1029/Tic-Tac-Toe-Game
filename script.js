let boxes = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('#resetBtn');
let newBtn = document.querySelector('#newBtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;
let cnt = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        let isWinner = checkWinner();
        if(cnt===9 && !isWinner){
            msg.innerHTML=`Game is Draw`;
            msgContainer.classList.remove('hide');
            disableBoxes();
        }
    });
});

const resetGame = () => {
    turnO=true;
    cnt=0;
    enableBoxes();
    msgContainer.classList.add('hide');
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
};
const showWinner = (winner) => {
    msg.innerHTML=`Congratulations, Winner is "${winner}"`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let ist= boxes[pattern[0]].innerHTML;
        let second=boxes[pattern[1]].innerHTML;
        let third=boxes[pattern[2]].innerHTML;

        if(ist!="" && second!="" && third!=""){
            if(ist === second && second === third){
               showWinner(ist);
               return true;
            }
            
        }
    }
    
}

newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
