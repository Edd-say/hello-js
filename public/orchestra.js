
function plays ( kc ) {
    const audio = document.querySelector( 'audio[data-key="' + kc + '"]' );
    const divkey = document.querySelector( 'div[data-key="' + kc + '"]' ) ;
    if (!audio) { return; }
    if (!divkey) { return; }
    audio.currentTime = 0;
    audio.play();
    divkey.className = 'active';
} 
function clearS ( kc ) {
    const divkey = document.querySelector( 'div[data-key="' + kc + '"]'  ); 
    if (!divkey) {return; }
    divkey.className = '';
}
function myKeysDW( e ){
    playS ( e.keyCode ) ;
}
Function myKeysup( e ) {
    claers ( e.keyCode );
}