/*  Crear un json con objetos tipo disco con la siguiente información */

const discos = [
    {
        nombre: "Future Nostalgia",
        artista: "Dua Lipa",
        anioPublicacion: 2020,
        tipoMusica: "pop",
        localizacion: 1,
        prestado: false
    },
    {
        nombre: "Nevermind",
        artista: "Nirvana",
        anioPublicacion: 1991,
        tipoMusica: "rock",
        localizacion: 2,
        prestado: false
    },
    {
        nombre: "AM",
        artista: "Arctic Monkeys",
        anioPublicacion: 2013,
        tipoMusica: "indie",
        localizacion: 3,
        prestado: false
    }
];

console.log("Cargando discos...");

new Promise((resolve, reject) => {
    if (discos.length > 0) {
        resolve(JSON.stringify(discos, null, 2));
    } else {
        reject("No hay discos disponibles.");
    }
})
.then((resultado) => {
    console.log("Discos cargados correctamente:");
    console.log(resultado);
})
.catch((resultado) => {
    console.log("Error: " + resultado);
})
.finally(() => {
    console.log("Fin de la carga de discos.");
});