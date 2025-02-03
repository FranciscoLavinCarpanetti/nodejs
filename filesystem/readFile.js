const fs = require('node:fs/promises');

fs.readFile('../basicos/operaciones.js', 'utf-8')
    .then((content) => {
        console.log(content.toUpperCase());
    })
    .catch((error) => {
        console.log(error);
    });