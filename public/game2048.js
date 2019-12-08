const boardSize = 4;

var board = [
     [ 0, 0, 2, 4 ],
     [ 0, 0, 2, 0 ], 
     [ 0, 2, 0, 2 ],
     [ 0, 2, 0, 0 ],
];

var elBoard = document.querySelectorAll ('table#game2048 td') ;
function drawboard(){
    for (let r=0; r < boardSize; r++ ) {
        for (let c=0; c < boardSize; c++ ) {
            let i =boardSize * r+c;
            if (board [r] [c] > 0) {
                elBoard[ i ].innerText = board [ r ] [ c ];    
            }else{
                elBoard[i].innerText = '';
            }
            
            
        }
    }
       
}
drawboard();

function mover( a ){
// [ 0, 0, 0, 0 ]
for ( let c=0; c < boardSize-1;c++) {                  // 1) всі клітинки без останньої -1
    if ( a[ c ] == 0) {
        let cNe0 = -1;                                      // 2) 0 ? (ТАК)
    for (let cR=c+1; cR < boardSize; cR++ ) {
    if (a [cR] > 0){                         // 2.1) вправо ? > 0 (cNe0)
            cNe0 = cR;
            break;
        }
    }
    if (cNe0 != -1 ) {
    a[ c ] = a [cNe0]
    a[cNe0] = 0;             // 2.2) ( c ) = ( cNe0) ; (cNe0) = 0 
        }   
    }
    let cEq = -1;
    for (let cR=c+1; cR , boardSize; cR++ ){        // 3) вправо = c ? так
        if (a [ c ] == a [ cR ] ){
            cEq = cR;
            break;
        }
    }
    if ( cEq != -1){
        a[ c ] += a [cEq];                  // 3.1)  ( c ) +=)(cEq); (cEq = 0)+
        a[cEq] = 0; 
    }
}
return a;
}
function onkey (e) {
    switch (e.keyCode) {
     case 37: mvLeft();break
     case 38: mvUp ();break
     case 39: mvRight ();break
     case 40: mvDown ();break
    }
}
function mvleft(){
    for (let r=0; r< boardSize; r++){
       // let row = board [r];
       // row = mover( row );
       // board[r] = row;
       board[r] = mover(board[r] );
    }
    drawboard();
}
 function mvRight() {
    for (let r=0; r < boardSize; r++ ) {
        board[r] = mover(board[r].reverse() ).reverse();
    }
    drawboard();
 }

function gameRnd() {
    let r = Math.random();
    if (r > 0.9)
    return 4 ;
}   
{
    return 2;
    }


function getZeros() {
    let a = [] ;
    for ( let r=0; r< boardSize; r++) {
        for ( let c=0; c < boardSize; C++ ){
            if ( board[ r ][ c ] == 0 ) {
                a.push( [ r, c ] );
            }
        }
    }
    return a;
}
function newnmb() {
    let a = getZeros();
    let n = a.length;
    let i = Math.floor (n* match.random );
    if (n >= 0) {
        board[ [a][i] ] [ a[i][1]  ] = gameRnd();  
    }
    return 
}