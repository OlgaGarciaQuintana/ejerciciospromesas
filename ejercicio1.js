/* Crear una promesa que simule el lanzamiento de una moneda al aire. La promesa se 
resolverá si sale cara (un 0 ) y se rechazará si sale cruz (un 1). Para ello usar las 
funciones de Javascript Math.floor y Math. Random */

console.log("Lanzando la moneda...");

new Promise((resolve, reject) => {
    const lanzamiento = Math.floor(Math.random() * 2);

    if (lanzamiento === 0) {
        resolve("Cara");
    } else {
        reject("Cruz");
    }
})
    .then((resultado) => {
        console.log("Resultado: " + resultado);
    })
    .catch((resultado) => {
        console.log("Resultado: " + resultado);
    })
    .finally(() => {
        console.log("Fin del lanzamiento de la moneda.");
    });