let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];//Generamos el arreglo para guardar los numeros aleatoreos
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {//el metodo include revisa si algo existe en un arreglo
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

/*Manejo de arreglos
-Declcara un arreglo vacio
let numerosSorteados =[];
-Declara un arreglo con elementos
let frutas = ["Manzana", "Uva", "Naranja"];

-Agregar elementos a la lista o arreglo al final
numerosSorteados.push(8); el metodo push agrega elemetos al final

-Ademas de agregar elementos a una lista tambien podemos consultar el 
 tamaño de la lista
console.log(numerosSorteados.length);

-Cada elemento de una lista tiene un indice, es un numero que indica
la posición (Todos los arreglos inician con la posición 0).
console.log(numeroSorteados[0]); la posición 0 se refiere al primer elemento
-La posición final va a ser el tamaño de la lista menos 1
console.log(numerosSorteados[numerosSorteados.length-1]);

--RECURSIVIDAD--
Es cuando una funcion sigue llamandose a si misma
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {//el metodo include revisa si algo existe en un arreglo
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
*/


//Desafíos

//1.  Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion
// con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion =["JavaScript","C", "C++", "Kotlin","Python"];
console.log(lenguajesDeProgramacion);

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
// 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby","GoLang");

//4. Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion.
function muestraLenguajes(){
        for (let i=0; i<lenguajesDeProgramacion.length; i++){
            console.log(lenguajesDeProgramacion[i]);

        }
}
muestraLenguajes();

//5. Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.
function muestraLenguajeInverso(){
    for (let i=lenguajesDeProgramacion.length-1; i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);

    }
}
muestraLenguajeInverso();

 //6. Crea una función que calcule el promedio de los elementos en una lista de números.
let calificaciones=[10,8,7];
let suma=0;
console.log(calificaciones);
let numeroEvaluaciones = calificaciones.length;
console.log(numeroEvaluaciones);
function sumaValores(calificaciones=[]){
    console.log(calificaciones);

}
for (var i= 0; i < calificaciones.length; i++){
    numero = calificaciones[i];
    console.log(`El numero es ${numero}`);
    suma += numero;
}

function promedio (a,b){
    return a/b;
}
console.log(`el promedio es: ${promedio(suma,numeroEvaluaciones)}`);



 //7. Crea una función que muestre en la consola el número más grande y el número
//   más pequeño en una lista.
function evaluaNumeroMayor(calificaciones){
    let numeroMayor=0;
    console.log(`Los numero a evaluarse son: ${calificaciones}`);

    for (var i= 0; i < calificaciones.length; i++){
        numero = calificaciones[i];
        if(numero > numeroMayor){
            return numeroMayor=numero;
        }else{
            return numeroMayor
        }
        
    }return numeroMayor;
   
    

}
console.log(evaluaNumeroMayor(calificaciones));

//8.Crea una función que devuelva la suma de todos los elementos en una lista.
let listaNumeros = [10,90,80,70,60,50,40,30,20];

function sumaValoresNumericos(listaNumeros){
    sumaTodos=0;
    for (var i= 0; i < listaNumeros.length; i++){
        valor = listaNumeros[i];
        sumaTodos += valor;
    }return sumaTodos;

}
console.log(sumaValoresNumericos(listaNumeros));
//9.Crea una función que devuelva la posición en la lista donde se encuentra 
//un elemento pasado como parámetro, o -1 si no existe en la lista.
let listaValores   = [3,5,6];
function encuentraNumero(arreglo1){
    
    let numeroBuscado =5;
        for (var i=0; i< arreglo1.length; i++){
            if (numeroBuscado == arreglo1[i]){
                return console.log(i);
            }
            
        }return console.log("-1");
    }
console.log(encuentraNumero(listaValores));

//10.Crea una función que reciba dos listas de números del mismo 
//tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas(arreglo1,arreglo2){
   valor1=sumaValoresNumericos(arreglo1);
   valor2=sumaValoresNumericos(arreglo2);
   return valor1+valor2; 
}
console.log(sumaListas(listaValores,listaNumeros));



//11.Crea una función que reciba una lista de números y devuelva una 
//nueva lista con el cuadrado de cada número.
function duplica(arreglo){
    arreglo3=[];
    for (var i=0; i<arreglo.length; i++){
        cuadrado= arreglo[i]*arreglo[i];
        arreglo3.push(cuadrado);
    }return arreglo3;
        

}
console.log(duplica(listaValores));


