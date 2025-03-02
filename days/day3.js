/* ** [[ Día 3 - Estructuras de control de flujo ]] ** */

import inquirer from 'inquirer';

const description = `
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el
usuario pueda elegir:

- Si quiere seguir hacia el área de Front-End o seguir hacia el área de
  Back-End.

- Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si
  está en el área de Back-End, podrá aprender C# o aprender Java.

- Después, independientemente de las elecciones anteriores, el usuario podrá
  elegir entre seguir especializándose en el área elegida o desarrollarse para
  convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para
  cada elección.

- Finalmente, pregunta en qué tecnologías le gustaría a la persona
  especializarse o conocer. Aquí, la persona puede responder N
  tecnologías, una a la vez. Entonces, mientras continúe respondiendo
  **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría
  aprender?", sigue presentando el Prompt, para que complete el nombre
  de la tecnología en cuestión. Y, justo después, presenta un mensaje
  comentando algo sobre la tecnología ingresada.

Lo importante es que la persona que esté jugando siempre pueda elegir qué
decisión tomar para aprender y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda ingresar tantas
tecnologías como desee en la lista de aprendizaje.
`

// Función genérica para seleccionar una opción
const seleccionarOpcion = async (promptMessage, choices) => {
  const respuesta = await inquirer.prompt([{
      type: 'list',
      name: 'opcionSeleccionada',
      message: promptMessage,
      choices: choices
  }]);
  return respuesta.opcionSeleccionada
}

const tecnologiasText = async () => {
  const respuesta = await inquirer.prompt([{
    type: 'input',
    name: 'listaTecnologias',
    message: '¿Qué tecnologías usarás? (Separadas por comas)'
  }])
  return respuesta.listaTecnologias
}



const run = async () => {
  const rutasDisponibles = ['Front-End', 'Back-End']
  const frontsDisponibles = ['React', 'Vue']
  const backsDisponibles = ['C#', 'Java']
  const fullstackDisponible = ['Especialidad', 'Full-Stack']

  let rutaSeleccionada = await seleccionarOpcion('¿Qué ruta vas a tomar?', rutasDisponibles)
  let especialidadSeleccionada = await seleccionarOpcion(
    '¿Cuál será tu especialidad?', 
    rutaSeleccionada === 'Front-End' ? frontsDisponibles : backsDisponibles
  )
  let fullstackSeleccion = await seleccionarOpcion('¿Te especializarás o serás Fullstack?', fullstackDisponible)
  let tecnologiasList = await tecnologiasText()


  console.log(`La ruta seleccionada es ${rutaSeleccionada}`)
  console.log(`La especialidad seleccionada es ${especialidadSeleccionada}`)
  console.log(`Haz decidido tomar ${fullstackSeleccion}`)
  console.log(`Las tecnologías que usarás son: ${tecnologiasList}`)

}

export {description, run}
