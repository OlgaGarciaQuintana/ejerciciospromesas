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

//Corrección profe:

let records = [
    {name: "El efecto lupa", band: "El niño gusano", year: 1995, genere: "indie", location: "2", borrowed: true},
    {name: "Nevermind", band: "Nirvana", year: 1991, genere: "rock", location: "3", borrowed: false},
    {name: "AM", band: "Arctic Monkeys", year: 2013, genere: "indie", location: "4", borrowed: true},
    {name: "Future Nostalgia", band: "Dua Lipa", year: 2020, genere: "pop", location: "5", borrowed: false}
];

console.log("Discos rock:");
console.log(records.filter(record => record.genere === "rock"));

console.log("Discos ordenados por banda:");
console.log(records.sort((a, b) => a.band.localeCompare(b.band)));

console.log("Discos anteriores a 1970:");
let before1970 = records.filter(record => record.year < 1970);

console.log("Discos posteriores a 1970:");
let after1970 = records.filter(record => record.year >= 1970);