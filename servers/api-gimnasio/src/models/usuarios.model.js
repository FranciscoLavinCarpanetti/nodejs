const pool = require('../config/db');

/**
 * Crea un nuevo usuario en la base de datos.
 * 
 * Esta función inserta un nuevo usuario en la tabla `usuarios` con los datos 
 * proporcionados. Se asigna automáticamente el rol "regular" a los nuevos usuarios.
 * 
 * @async
 * @function create
 * @param {Object} usuario - Objeto con los datos del usuario a registrar.
 * @param {string} usuario.username - Nombre de usuario.
 * @param {string} usuario.email - Correo electrónico del usuario.
 * @param {string} usuario.password - Contraseña del usuario (debe estar encriptada antes de llamar a esta función).
 * @returns {Promise<Object>} Un objeto con información sobre la operación de inserción, incluyendo `insertId`.
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta SQL.
 */
const create = async ({ username, email, password }) => {
    const [result] = await pool.query(
        'INSERT INTO usuarios (username, email, password, role) VALUES(?, ?, ?, ?)', [username, email, password, 'regular']

    );
    return result;
}

/**
 * Busca un usuario en la base de datos por su correo electrónico.
 * 
 * Esta función consulta la base de datos para obtener los datos de un usuario cuyo
 * email coincida con el proporcionado. Si el usuario existe, devuelve el objeto con 
 * sus datos; si no, retorna `null`.
 * 
 * @async
 * @function selectByEmail
 * @param {string} email - Correo electrónico del usuario a buscar.
 * @returns {Promise<Object|null>} Un objeto con los datos del usuario si se encuentra, o `null` si no existe.
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta.
 */
const selectByEmail = async (email) => {
    const [result] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]

    );
    if (result.length === 0) return null;
    return result[0];


}

/**
 * Busca un usuario en la base de datos por su ID.
 * 
 * Esta función consulta la base de datos para obtener los datos de un usuario cuyo
 * identificador único (`id`) coincida con el proporcionado. Si el usuario existe, 
 * devuelve un objeto con sus datos; si no, retorna `null`.
 * 
 * @async
 * @function selectById
 * @param {number} usuarioId - Identificador único del usuario a buscar.
 * @returns {Promise<Object|null>} Un objeto con los datos del usuario si se encuentra, o `null` si no existe.
 * @throws {Error} Si ocurre un error durante la ejecución de la consulta.
 */
const selectById = async (usuarioId) => {
    const [result] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [usuarioId]);
    if (result.length === 0) return null;
    return result[0];
}


module.exports = {
    create, selectByEmail, selectById
}