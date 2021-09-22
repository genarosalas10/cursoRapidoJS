'use strict'
console.log('Cargado correctamente')

//objetos
let objeto = {
  atributo1:78,
  nombre: 'Perico Palotes',
  parejas: ['María', 'Pedro', 'Mariano'],
  metodo2: function(num){
    console.log('metodo 2:' +num *2)
  }
};
console.log(objeto)
console.log('Me llamo' +objeto.nombre)
console.log('Una de mis parejas es '+objeto.parejas[2])

function funcion1(){
  document.write('Me encanta JavaScript')
}
funcion1();
//------------------------
let num= 7 //declaro num y le asigno 7. Es tipo number
num= funcion1 //Le asigno funcion1. Es function
num() //La ejecuto

objeto.metodo = funcion1
objeto.metodo()
objeto.metodo2(88)

//Parametros de funciones
function suma (a,b=6){
  return a + b
}
console.log(suma(5,8))
console.log(suma(2))

function ejecuta(callback) {
  console.log('Ejecutando...');
  callback()
}

ejecuta(funcion1)

//Excepciones

try {
  let num1=45
  console.log(num1 * 'Zapato')
  ejecuta(funcion1)

} catch (excepcion) { //Solo entra cuando falla
  console.log(excepcion)

} finally { //falla siempre
  console.log('ejecuto el Finally')
}

try {
  let nombre='Miguel'
  console.log(nombre.substr(2,4))//Muestra desde la posicion 2 y coge 4 letras del string
  ejecuta(funcion1)

} catch (excepcion) { //Solo entra cuando falla
  console.log(excepcion)

} finally { //falla siempre
  console.log('ejecuto el Finally')
}

// Arrays
let vector = [1,2,3,5,7,9,15,19,21]
let guarreria = [1,2,'aaaadsgf',function () {console.log('pfffffffff')}, true]
let matriz = [[1,2,3],
 [4,5,6],
 [7,8,9]]

 console.log(matriz[1][2])

 //Recorrer Arrays
 for (let i=0; i<vector.length;i++)
 {
   console.log(vector[i])
 }

 for(let elemento of vector) //Recorrer un vector
 console.log(elemento)

 for(let atributo in objeto) //Recorre los atributos de un objeto
//console.log('El atributo \'' + atributo +'\'vale ' +objeto.atributo)

console.log(`El atributo '${atributo}' vale ${objeto[atributo]}`)


let matriz2=[
  [1,2,3],
  [4,5,18,19],
  [7,8],
]
for(let fila of matriz2)
  for(let elemento of fila)
    console.log(elemento)
