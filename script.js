//crea di default una board con 16 div al primo caricamento della pagina

let board = document.querySelector('#board');
let userChoice = 16;
let squareMeter = 640 / userChoice;

function rainbowMode () {
    let variableR = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let variableG = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let variableB = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let randomColor = `rgb(${variableR}, ${variableG}, ${variableB})`;
    return randomColor;
}

function classic (event) {
    event.target.style.background = 'black';
}

function rainbow (event) {
    event.target.style.background = rainbowMode();
}

function darken (event) {
    let baseBrightness = event.target.style.background;
    let rgbVariable = baseBrightness.slice(4, (baseBrightness.length-1));
    let rgbArray = rgbVariable.split(",");
    let newRgbValue = 'rgb('
    for (let i = 0; i <= 2; i++) {
        if (i === 2) {
          newRgbValue += `${rgbArray[i]-15})`
        } else {
            newRgbValue += `${rgbArray[i]-15},`
        }
      }
      event.target.style.background = newRgbValue;
}

function initializeBoard () {
    for (let i = 1; i <= (+userChoice*+userChoice); i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style',`background: rgb(255,255,255); height: ${squareMeter}px; width: ${squareMeter}px;`); 
        board.appendChild(pixel);
        pixel.addEventListener('mouseover', classic);
    }

}

initializeBoard();

//Pulsante con funzione che permette all'utente di resettare l'ultima grid

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {

    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
      }

    for (let i = 1; i <= (+userChoice*+userChoice); i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style',`background: rgb(255,255,255); height: ${squareMeter}px; width: ${squareMeter}px;`); 
        board.appendChild(pixel);
        pixel.addEventListener('mouseover', classic); 
    };
})

//Pulsante con funzione che richiede l'input di un numero all'utente per la creazione di una nuova grid

let newGridButton = document.querySelector('#newGrid');
newGridButton.addEventListener('click', function () {

    let newChoice = +prompt("How many squares? Please choose a number between 2 and 100", " ");
    let newSquareMeter = 640 / newChoice;

    if (typeof newChoice !== "number") {
        alert("Insert a number!");
    } else if (newChoice < 2 || newChoice > 100) {
        alert("Insert a valid number!");
    } else {

    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
      }

    for (let i = 1; i <= (+newChoice*+newChoice); i++) {
        let pixel = document.createElement('div')
        pixel.setAttribute("class", "board-pixel");
        pixel.setAttribute('style',`background: rgb(255,255,255); height: ${newSquareMeter}px; width: ${newSquareMeter}px;`); 
        board.appendChild(pixel);
        pixel.addEventListener('mouseover', classic);
    };
    };

    userChoice = newChoice;
    squareMeter = newSquareMeter;
}
)

// Pulsante che permette lo switch al rainbow mode

let rainbowModeButton = document.querySelector('#rainbowMode');
rainbowModeButton.addEventListener('click', function () {
    let rainbowPixels = document.querySelectorAll('.board-pixel');
    rainbowPixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', classic);
        pixel.removeEventListener('mouseover', darken);
        pixel.addEventListener('mouseover', rainbow)
            }
        );
    })

//Pulsante che permette lo switch al classic mode

let classicModeButton = document.querySelector('#classicMode');
classicModeButton.addEventListener('click', function () {
    let classicPixels = document.querySelectorAll('.board-pixel');
    classicPixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', rainbow);
        pixel.removeEventListener('mouseover', darken);
        pixel.addEventListener('mouseover', classic)
    });
    })

//Pulsante che permette lo switch al darken mode

let darkenModeButton = document.querySelector('#darken');
darkenModeButton.addEventListener('click', function () {
    let darkenedPixels = document.querySelectorAll('.board-pixel');
    darkenedPixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', classic);
        pixel.removeEventListener('mouseover', rainbow);
        pixel.addEventListener('mouseover', darken);
    })
})