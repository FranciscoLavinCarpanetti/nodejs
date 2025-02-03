const fs = require('node:fs');
const fsPromise = require('node:fs/promises');

// La función readdir lee el contenido de un directorio

// síncrona
const files = fs.readdirSync('../basicos');
console.log(files);

// asíncrona con callback
fs.readdir('../basicos', (err, files) => {
    console.log(err, files);
});

// asíncrona con promesas
fsPromise.readdir('../basicos')
    .then((files) => {
        console.log(files);
    })
    .catch((error) => {
        console.log(error);
    });

// asíncrona con promesas (async-await)
async function leerDirectorio() {
    const files = await fsPromise.readdir('../basicos')
    console.log(files);
}
leerDirectorio();