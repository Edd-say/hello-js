function setbg ( c ){
    document.bgColor = c;
}
function mykeys( e ) {
    console.log( e );
    switch (e.keyCode) {
        case 65: setbg ('red');
            break;
        case 83:setbg ('blue');
            break;
        case 68:setbga ('yellow');
            break;
        default:console.log ( e );
            break;
    }
}
