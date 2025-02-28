// Día 2 - Variables
const description =  `
-- [[ Día 2 - Variables ]] --
Desarrollar un programa simulando una de esas aplicaciones. 
Debe pedir al usuario responder 3 preguntas:
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté 
usando el programa debe responder cada una de ellas.
Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

PLUS
Vas a complementar el código para que, después de mostrar el
mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para 
SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de 
los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
`
const readline = require('readline');

let nombre = '';
let edad = 0;
let lenguaje = '';
let gusto = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pregunta = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
};

const censoProgramador = async () => {
    nombre = await pregunta('¿Cuál es tu nombre? ');
    edad = await pregunta('¿Cuántos años tienes? ');
    lenguaje = await pregunta('¿Qué lenguaje de programación estás estudiando? ');

    console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

    gusto = await pregunta(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO: `);

    if (gusto == 1) {
        console.log('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
    } else {
        console.log('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
    }

    rl.close();
};

const run = () => {
    censoProgramador()
}

module.exports = {
    description,
    run
}

