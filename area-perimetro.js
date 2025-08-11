
/*------------------Traingle Start------------- */
function calcultPerimeterTriangle(){

const ladoAperimeter = parseInt(document.getElementById('ladoA-peri-triangle').value);
const ladoBperimeter = parseInt(document.getElementById('ladoB-peri-triangle').value);
const ladoCperimeter = parseInt(document.getElementById('ladoC-peri-triangle').value);

const result = ladoAperimeter+ladoBperimeter+ladoCperimeter;

document.getElementById('result-perimeter').innerText = "Perimetro = " + result;
}

function calcultAreaTriangle(){
const baseArea = parseInt(document.getElementById('base-triangle').value);
const heightArea = parseInt(document.getElementById('height-triangle').value);

const resultAreaTriangle = (baseArea * heightArea)/2;

document.getElementById('result-area-triangle').innerText = resultAreaTriangle + "m2";
}
/*------------------Traingle End-------------*/

/*------------------Rectangle Start------------- */
function calcultPerimeterRectangle(){

const ladoAperiRectang = parseInt(document.getElementById('ladoA-peri-rectangle').value);
const ladoBperiRectang = parseInt(document.getElementById('ladoB-peri-rectangle').value);

const resultPeriRectang = 2*(ladoBperiRectang + ladoAperiRectang);

document.getElementById('result-perimeter-rectangle').innerText = "perimetro = " + resultPeriRectang;
}

function calcultAreaRectangle(){
const baseRectangle = parseInt(document.getElementById('base-rectangle').value);
const heightRectangle = parseInt(document.getElementById('height-rectangle').value);

const resultAreaRectangle = baseRectangle * heightRectangle;

document.getElementById('result-area-rectangle').innerText = resultAreaRectangle + "m2";
}
/*------------------Rectangle End-------------*/

/*------------------Square Start------------- */
function calcultPeriSquare(){

const ladoAsquare = parseInt(document.getElementById('ladoA-peri-square').value);
const resultPeriSquare = 4 * ladoAsquare;

document.getElementById('result-perimeter-square').innerText = "Perimetro = " + resultPeriSquare;
}

function calcultAreaSquare(){
const ladoAareaSquare = parseInt(document.getElementById('ladoA-square').value);

const resultAreaSquare = ladoAareaSquare ** 2

document.getElementById('result-area-square').innerText = resultAreaSquare + "m2";
}
/*------------------Square End------------- */

/*------------------Circle Start------------- */

const numpi = 3.14;

function calcultPeriCircle(){
const radioCicrlePeri = parseInt(document.getElementById('radio-circle').value);
const resultPeriCircle = (2*numpi)*(radioCicrlePeri**2);
document.getElementById('result-perimeter-circle').innerText = "Peri = " + resultPeriCircle;
}

function calcultAreaCircle(){
const radioAreaCircle = parseInt(document.getElementById('radio-circle-area').value);
const resultAreaCircle = (2*numpi)*(radioAreaCircle**2);

document.getElementById('result-area-circle').innerText = "Área = " + resultAreaCircle 
}
/*------------------Circle End------------- */