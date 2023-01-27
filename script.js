//crea di default una board con 16 div al primo caricamento della pagina

let board = document.querySelector('#board');

function initializeBoard () {
    for (let i = 1; i <= 256; i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style','box-sizing: border-box; border: solid black 1px; height: 40px; width: 40px;'); 
        board.appendChild(pixel);
        pixel.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
          });
    }

}

initializeBoard();

let newGridButton = document.querySelector('#newGrid');
newGridButton.addEventListener('click', function () {

    let userChoice = +prompt("How many squares? Please choose a number between 2 and 180", " ");

    if (typeof userChoice !== "number") {
        alert("Insert a number!");
    } else if (userChoice < 2 || userChoice > 180) {
        alert("Insert a valid number!");
    } else {
    let squareMeter = 640 / userChoice;

    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
      }

    for (let i = 1; i <= (+userChoice*+userChoice); i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style',`height: ${squareMeter}px; width: ${squareMeter}px;`); 
        board.appendChild(pixel);
        pixel.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
          });
    };
};
}
)