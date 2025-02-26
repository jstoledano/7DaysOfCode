// Lógica JS
// Día 1 de 7 - Operaciones Booleanas 

// Por lo tanto, tu tarea de hoy es reescribir el código a 
// continuación para que imprima la información de manera 
// correcta, que tenga sentido y sin errores:

let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'


// Comparar variables
// Función que compara dos variables y muestra un mensaje en consola  
// si los valores son iguales o diferentes
function CompararVariables(var1, var2) {
  if (var1 == var2) {
    console.log(`Las variables ${var1} tipo ${typeof(var1)} y "${var2}" tipo ${typeof(var2)} tienen el mismo valor, pero tipos difernetes`)
    } else {
    console.log(`Las variables ${var1} y ${var2} no tienen el mismo valor`)
  }
}

CompararVariables(numeroUn, stringUn)
CompararVariables(numeroTreinta, stringTreinta)
CompararVariables(numeroDiez, stringDiez)
