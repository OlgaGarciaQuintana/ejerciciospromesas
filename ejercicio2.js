/* Crear una promesa portero de discoteca que deje pasar a los mayores de 18 y al resto 
los rechace. */

const edad = 20;

console.log("Comprobando la edad...");

new Promise((resolve, reject) => {
    if (edad >= 18) {
        resolve("Puedes entrar a la discoteca.");
    } else {
        reject("No puedes entrar, eres menor de edad.");
    }
})
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((resultado) => {
        console.log(resultado);
    })
    .finally(() => {
        console.log("Fin de la comprobación.");
    });