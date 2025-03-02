/* ** [[ Arrays y colecciones ]] ** */

import inquirer from 'inquirer';

const description = `
debes crear un  programa en Javascript que pregunte  si deseas agregar
un alimento a tu lista de compras,  y debes poder responder con "sí" o
"no".

A continuación,  preguntará qué alimento deseas  agregar, y escribirás
su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con
algunas opciones  ya predefinidas,  como frutas,  lácteos, congelados,
dulces y lo  que más creas interesante. Así podrás  separar todo en su
respectivo grupo.

Por último, en caso  de que ya no quieras agregar nada  más a la lista
de compras  y respondas "no"  a la  primera pregunta, se  mostrará una
lista con todos los ítems agrupados, de la siguiente manera: 

Si añades a tu lista:

banana, leche en polvo, tomate, leche vegetal, chicle, gominola,
manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:

Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola
`;

let frutas     = [];
let lacteos    = [];
let congelados = [];
let dulces     = [];

let cats = ['frutas', 'lacteos', 'congelados', 'dulces'];

let confirmar  = async () => {
    const answer = await inquirer.prompt([{
        type: 'confirm',
        message: `¿Quieres agregar un alimento a tu lista de compras?`,
        default: false,
        name: 'payload'
    }]);
    return answer.payload;
}

const seleccionarCategoria = async () => {
    const respuesta = await inquirer.prompt([{
        type: 'list',
        name: 'payload',
        message: 'Selecciona la categoría',
        choices: cats
    }]);
    return respuesta.payload;
}

const agregarAlimento = async () => {
    const alimento = await inquirer.prompt([{
        type: 'input',
        message: 'Escribe el alimento que quieres agregar',
        name: 'payload'
    }]);
    return alimento.payload;
}

const run = async () => {
    let yes;
    do {
        yes = await confirmar();
        if (yes) {
            let alimento = await agregarAlimento();
            let cat = await seleccionarCategoria();
            switch (cat) {
                case 'frutas':
                    frutas.push(alimento);
                    break;
                case 'lacteos':
                    lacteos.push(alimento);
                    break;
                case 'congelados':
                    congelados.push(alimento);
                    break;
                case 'dulces':
                    dulces.push(alimento);
                    break;
            }
            console.log(`Agregaste ${alimento} a la categoría ${cat}`);
        }
    } while (yes);

    console.log('\nLista de compras:');
    console.log(`Frutas: ${frutas.join(', ')}`);
    console.log(`Lácteos: ${lacteos.join(', ')}`);
    console.log(`Congelados: ${congelados.join(', ')}`);
    console.log(`Dulces: ${dulces.join(', ')}`);
};

export { description, run };