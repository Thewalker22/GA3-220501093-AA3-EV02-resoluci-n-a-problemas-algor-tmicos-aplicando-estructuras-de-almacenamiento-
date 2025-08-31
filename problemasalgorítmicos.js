
/*----------SOLUCIÓN EJERCICIO1----------------*/ 
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

/*----------SOLUCIÓN EJERCICIO #2----------------*/ 
/*--------------Edades de un grupo de 10 personas -------------------- */
let totaledad = 0;
function guardarEdades() {
    let contadorMenores = 0; 
    let contadorMayores = 0;
    let adultosMayores = 0;
    let promedio = 0;
    let totaledad = 0;
    let edad = 0;
    const edades = [];
    let verificarInput;

    for (let i = 1; i <= 10; i++) {

        verificarInput = document.getElementById('edad-1');
        verificarInput.addEventListener('input', function(){
            if (this.value < this.min || this.value > this.max){
                alert('El valor debe estar entre' + this.min + 'y' + this.max);
            }
        });

        let dato = document.getElementById(`edad-${i}`).value;
        edad = parseInt(dato); 
        edades.push(edad);

        totaledad += edad;
        promedio = totaledad/[i];

        if (edad < 18) {
            contadorMenores++;
        } else if (edad > 60){
            adultosMayores++;
        } else if (edad >= 18){
            contadorMayores++;
        } 
        
    }
    const edadMenor = Math.min(...edades);
    const edadMayor = Math.max(...edades);

    document.getElementById('menorde18').innerText = `Menores de edad = ${contadorMenores}`;
    document.getElementById('mayorde18').innerText = `Mayores de edad = ${contadorMayores}`;
    document.getElementById('adultomayor').innerText = `Adultos mayores = ${adultosMayores}`;
    document.getElementById('promedioEdades').innerText = `Promedio edades = ${promedio}`;
    document.getElementById('menorEdad').innerText = `Manor edad = ${edadMenor}`;
    document.getElementById('mayorEdad').innerText = `Mayor edad = ${edadMayor}`;
    
    console.log("Cantidad de menores de edad: " + contadorMenores);
    console.log("Cantidad de mayores de edad: " + contadorMayores);
    console.log("Cantidad de mayores de edad: " + adultosMayores);
    console.log("PROMEDIO " + promedio);
    console.log(`Edad Menor = ${edadMenor}`);
    console.log(`Edad Mayor = ${edadMayor}`);

}
 /*--------------Edades de un grupo de 10 personas -------------------- */   

 /*----------SOLUCIÓN EJERCICIO #3----------------*/ 

/*--------------vectores de números enteros ordenados ascendentement-------------------- */   
function enterosOrdenamiento (){
    const nums1 = [1,2,3,4,5];
    const nums2 = [1,2,3,5,5];
    let dato = 0;
    
    for (let i = 0; i< nums1.length; i++){
        console.log(nums1 + nums2);  
    }


    for(let i = 0; i < nums1.length; i++){
        if (nums1[i] < nums1[i+1]){
            dato = nums1[i+1]
            nums1[i] = nums1[i+1]
            nums1[i+1] = dato;
    console.log(nums1 + nums2);  
        }
    }
}
/*--------------vectores de números enteros ordenados ascendentement-------------------- */   

/*----------SOLUCIÓN EJERCICIO #4----------------*/ 

/*------[Ejercicio 4] registro de personas para emisora-------------*/
const formulario = document.getElementById('form-encuesta');
const registros = [];

formulario.addEventListener('submit', function(event){
event.preventDefault();

const datosformulario = new FormData(formulario);
const datosObjeto = Object.fromEntries(datosformulario);

registros.push(datosObjeto);
console.log(registros);
console.log(registros[2]);
})
/*------[Ejercicio 4] registro de personas para emisora-------------*/




































