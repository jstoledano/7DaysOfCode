/* ** [[ Día 4 - Cíclos y Repeticiones ]] ** */

import number from '@inquirer/number';

const description = `
Debes crear un  pequeño programa que comience con  un valor específico
predefinido  entre 0  y 10  para  el número  que vas  a adivinar  (por
ejemplo, el 7).

A continuación, el programa te preguntará  cuál es el valor que deseas
adivinar y,  si aciertas, te  felicitará. Si  te equivocas, te  dará 2
intentos más.

Al final,  si no aciertas en  ninguno de los intentos,  imprimirá cuál
era el número inicial.

Después de  que el programa  esté funcionando, intenta usar  un número
aleatorio en lugar de uno predefinido.
`;

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 3;
let respuesta;

const run = async () => {
    while (intentos > 0) {
        const respuesta = await number({ message: `Adivina el número (${numeroAleatorio})` });
        if (respuesta === numeroAleatorio) {
            console.log("¡Felicidades! Haz acertado.");
            break;
        } else {
            intentos--; // Decrementa primero
            if (intentos > 0) {
                console.log(`No haz adivinado. Te quedan ${intentos} intento(s).`);
            } else {
                console.log(`No adivinaste. El número era ${numeroAleatorio}`);
            }
        }
    }
}

export { description, run }

