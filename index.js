import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

// Encuentra los archivos de los días
const daysDir = path.join(process.cwd(), 'days');

async function main() {
  // Encuentra los días disponibles
  const diasDisponibles = fs.readdirSync(daysDir)
    .filter(file => file.startsWith('day') && file.endsWith('.js'))
    .map(file => file.replace('.js', ''));

  // Pregunta al usuario qué día quiere
  const { diaSeleccionado } = await inquirer.prompt([{
    type: 'list',
    name: 'diaSeleccionado',
    message: 'Selecciona el día que quieres ejecutar:',
    choices: diasDisponibles
  }]);

  // Importa el día seleccionado
  const dia = await import(`./days/${diaSeleccionado}.js`);
  
  // Limpia la pantalla y muestra la descripción del día
  console.log('\n'.repeat(process.stdout.rows)); // Limpiar pantalla
  console.log(`\n=== ${diaSeleccionado.toUpperCase()} ===`);
  console.log(dia.description);
  console.log('\nEjecutando solución...\n');
  
  dia.run();
}

main().catch(console.error);