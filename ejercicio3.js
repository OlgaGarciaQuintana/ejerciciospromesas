/* Crear una promesa que compare una cadena con otra y se resuelva en caso de que 
sean iguales. */

const cadena1 = "Hola";
const cadena2 = "Hola";

console.log("Comparando cadenas...");

new Promise((resolve, reject) => {
    if (cadena1 === cadena2) {
        resolve("Las cadenas son iguales.");
    } else {
        reject("Las cadenas son diferentes.");
    }
})
.then((resultado) => {
    console.log(resultado);
})
.catch((resultado) => {
    console.log(resultado);
})
.finally(() => {
    console.log("Fin de la comparación.");
});