//crea di default una board con 16 div al primo caricamento della pagina

let board = document.querySelector('#board');

function initializeBoard () {
    for (let i = 1; i <= 256; i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style','background-color: blue; height: 40px; width: 40px;'); 
        board.appendChild(pixel);
    }
}

initializeBoard();