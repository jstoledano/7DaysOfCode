// Día 1 - Operaciones Booleanas
const description = `
-- [[ Día 1 - Operaciones Booleanas ]] --
Comparar variables
Función que compara dos variables y muestra un mensaje
en consola si los valores son iguales o diferentes.
`;

// -- [[ INICIO ]] --
const numeroUn = 1;
const stringUn = '1';
const numeroTreinta = 30;
const stringTreinta = '30';
const numeroDiez = 10;
const stringDiez = '10';

const compararVariables = (var1, var2) => 
  console.log(var1 == var2 
    ? `Las variables ${var1} tipo ${typeof(var1)} y "${var2}" tipo ${typeof(var2)} tienen el mismo valor, pero tipos diferentes` 
    : `Las variables ${var1} y ${var2} no tienen el mismo valor`);

const run = () => {
  compararVariables(numeroUn, stringUn);
  compararVariables(numeroTreinta, stringTreinta);
  compararVariables(numeroDiez, stringDiez);
};

// Exportar usando sintaxis ES6
export { description, run };