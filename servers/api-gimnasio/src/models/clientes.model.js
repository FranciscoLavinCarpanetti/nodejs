// En el modelo incluimos funciones para ejecutar queries sobre nuestra BD

// El resultado de la ejecución de una query nos retorna un array con dos posiciones
// - En la primera posición tenemos el RESULTADO del select
// - En la segunda posición tenemos una descripción de los campos de la tabla

const pool = require('../config/db');

const selectAll = async () => {
    const [result] = await pool.query('select * from clientes');
    return result; // array de clientes
}

const selectByDni = async (clienteDni) => {
  const [result] = await pool.query('select * from clientes like dni = ?',
     [`%${clienteDni}%`],
 ); 
return result;

}













/**
 * Obtiene un cliente por su ID desde la base de datos.
 * 
 * Esta función realiza una consulta a la base de datos para recuperar un cliente 
 * cuyo identificador coincida con el proporcionado. Si el cliente existe, 
 * se devuelve el objeto correspondiente. Si no existe, se retorna `null`.
 * 
 * @async
 * @function selectById
 * @param {number} clienteId - El identificador único del cliente que se desea buscar.
 * @returns {Promise<Object|null>} Un objeto con los datos del cliente si existe, o `null` si no se encuentra.
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta.
 */
const selectById = async (clienteId) => {
    const [result] = await pool.query('select * from clientes where id = ?', [clienteId]);
    // result es el resultado de la ejecución de la query
    // Puede ser un array con 1 elemento si el cliente existe
    // Puede ser un array con 0 elementos si el cliente no existe
    if (result.length === 0) return null;
    return result[0];
}

/**
 * Obtiene una lista de clientes cuya edad es mayor o igual a la especificada.
 * 
 * Esta función realiza una consulta a la base de datos para recuperar todos los clientes
 * cuya edad sea igual o superior al valor proporcionado en `minEdad`.
 * 
 * @async
 * @function selectMayores
 * @param {number} minEdad - La edad mínima para filtrar los clientes.
 * @returns {Promise<Object[]>} Un array de objetos con los datos de los clientes que cumplen el criterio.
 *                               Si no hay clientes que cumplan la condición, se devuelve un array vacío.
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta.
 */
const selectMayores = async (minEdad) => {
    const [result] = await pool.query(
        'select * from clientes where edad >= ?',
        [minEdad]
    );
    return result;
}

const selectByProfesorId = async (profesorId) => {
    const [result] = await pool.query('select * from clientes where profesor_id = ?', [profesorId]);
    return result;
}

/**
 * Inserta un nuevo cliente en la base de datos.
 * 
 * Esta función ejecuta una consulta SQL para agregar un nuevo registro en la tabla `clientes`
 * con la información proporcionada en el objeto de entrada.
 * 
 * @async
 * @function create
 * @param {Object} cliente - Objeto con los datos del cliente a insertar.
 * @param {string} cliente.nombre - Nombre del cliente.
 * @param {string} cliente.apellidos - Apellidos del cliente.
 * @param {string} cliente.direccion - Dirección del cliente.
 * @param {string} cliente.email - Correo electrónico del cliente.
 * @param {number} cliente.edad - Edad del cliente.
 * @param {string} cliente.sexo - Género del cliente (por ejemplo, 'M' o 'F').
 * @param {number} cliente.cuota - Cuota mensual del cliente.
 * @param {string} cliente.fecha_nacimiento - Fecha de nacimiento del cliente en formato 'YYYY-MM-DD'.
 * @param {string} cliente.dni - Documento Nacional de Identidad del cliente.
 * @returns {Promise<Object>} Un objeto con información sobre la operación de inserción (por ejemplo, `insertId`).
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta.
 */
const create = async ({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    const [result] = await pool.query(
        'insert into clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_nacimiento, cuota, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, direccion, email, edad, sexo, fecha_nacimiento, cuota, dni]
    );
    return result;
}

const updateById = async (clienteId, { nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    const [result] = await pool.query(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
        [nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni, clienteId]
    );
    return result;
}

const deleteById = async (clienteId) => {
    const [result] = await pool.query('delete from clientes where id = ?', [clienteId]);
    return result;
}

module.exports = {
    selectAll,selectById, selectMayores, create, updateById, deleteById, selectByProfesorId, selectByDni
}