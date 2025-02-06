const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios.model');


/**
 * Registra un nuevo usuario en la base de datos.
 * 
 * Esta función recibe los datos del usuario desde la solicitud (`req.body`),
 * encripta la contraseña utilizando `bcrypt`, y luego crea un nuevo registro 
 * en la base de datos con los datos proporcionados.
 * 
 * @async
 * @function registro
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} req.body - Datos del usuario enviados en la solicitud.
 * @param {string} req.body.nombre - Nombre del usuario.
 * @param {string} req.body.email - Correo electrónico del usuario.
 * @param {string} req.body.password - Contraseña en texto plano (será encriptada).
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para manejar errores en Express.
 * @returns {Promise<void>} Envía una respuesta JSON con un mensaje de éxito o un error.
 * @throws {Error} Si ocurre un error en la creación del usuario.
 */
const registro = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        const result = await Usuario.create(req.body);
        res.json({ message: 'usuario creado' });

    } catch (error) {
        next(error);

    }
}

/**
 * Autentica a un usuario en la aplicación.
 * 
 * Esta función verifica si el usuario existe en la base de datos mediante su email,
 * compara la contraseña ingresada con la almacenada en la base de datos y, 
 * si es correcta, genera un token de autenticación con `JWT` y lo devuelve en la respuesta.
 * 
 * @async
 * @function login
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} req.body - Datos del usuario enviados en la solicitud.
 * @param {string} req.body.email - Correo electrónico del usuario.
 * @param {string} req.body.password - Contraseña ingresada por el usuario.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para manejar errores en Express.
 * @returns {Promise<void>} Devuelve un objeto JSON con un token si la autenticación es exitosa.
 * @throws {Error} Si ocurre un error en la validación del usuario.
 */
const login = async (req, res, next) => {
    // Comprobar si el EMAIL existe en BBDD??
    const usuario = await Usuario.selectByEmail(req.body.email);
    if (!usuario) {
        return res.status(401).json({ message: 'Error en Email y/o contraseña' });
    }
    // Comprobar si la contraseña es correcta
    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (!iguales) {
        return res.status(401).json({
            message: ' Error en Email y/ o contraseña'
        });

    }
    const token = jwt.sign({ usuarioId: usuario.id, usuarioRole: usuario.role }, 'clave secreta');
    res.json({ message: 'Usuario logeado', token });





}








module.exports = { registro, login }