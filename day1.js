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

function CompararVariables(var1, var2) {
  if (var1 === var2) {
    console.log(`Las variables ${var1} y ${var2} tienen el mismo valor y el mismo tipo`)
  } else {
    console.log(`Las variables ${var1} y ${var2} no tienen el mismo tipo`)
  }
}

CompararVariables(numeroUn, stringUn)
CompararVariables(numeroTreinta, stringTreinta)
CompararVariables(numeroDiez, stringDiez)



// Comparar numeroUn y stringUn
if (numeroUn == stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}


// Comparar numeroTreinta y stringTreinta
if (numeroTreinta == stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

 
// Comparar numeroDiez y stringDiez
if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}