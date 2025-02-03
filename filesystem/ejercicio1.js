/**
 * 1. Crear una carpeta 'ficheros' con muchos ficheros. Cada uno de ellos con diferente extensión (Ej: notas.txt, cv.csv, modulo1.md...). Varios ficheros con extensión md
 * 2. Recuperar el contenido del directorio 'ficheros'
 * 3. De los ficheros anteriores mostramos el contenido de aquellos que tengan extensión .md
 * 
 * readdir y readFile
 */

const fs = require('node:fs/promises');

// (async () => {
//     const files = await fs.readdir('./ficheros');
//     for (let file of files) {
//         if (file.endsWith('.md')) {
//             const content = await fs.readFile(`./ficheros/${file}`, 'utf-8');
//             console.log(content);
//         }
//     }
// })();

(async () => {
    (await fs.readdir('./ficheros'))
        .filter(file => file.endsWith('.md'))
        .forEach(async file => {
            const content = await fs.readFile(`./ficheros/${file}`, 'utf-8');
            console.log(content);
        })
})();