const axios = require('axios');
const colors = require('colors');
const dayjs = require('dayjs');

const { sumar, mult, dividir } = require('./operaciones');

console.log('Hola Mundo'.trap.rainbow);

(async () => {
    const response = await axios.get('https://peticiones.online/api/products');
    // console.log(response.data);
})();

const currentDate = dayjs().add(47, 'days').format('DD-MM-YYYY HH:mm');
console.log(currentDate);

console.log(dividir(4, 78));