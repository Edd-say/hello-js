var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0],
];
var elBoard = document.querySelectorAll ('table#game2048 td') ;
function drawboard(){
    for (let r=0; r < bRow; r++ ) {
        for (let c = 0; c < bCol; c++ ) {
            let i = bCol * r + c;
            if(board[r][c]== 0){
                elBoard[i].className = '';
            }else{
                elBoard[i].className = 'box-' + board[r] [c]
            }
        }
    }
}
function boardClick(e){
    console.log(e.target)
}
drawboard();

function move(){
if (selbox.length>0 && sellbox[1]>0 ){
let r = selbox[0]
let c = selbox[1]    }
}