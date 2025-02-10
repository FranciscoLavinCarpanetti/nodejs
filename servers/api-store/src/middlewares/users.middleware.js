const jwt = require('jsonwebtoken');

const User = require('../models/users.model');

const checkToken = async (req, res, next) => {
    // Comprobar si el token viene incluido en las cabeceras
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Debes incluir la cabecera Authorization' });
    }

    let payload;
    try {
        // Comprobar si el token es correcto
        payload = jwt.verify(token, 'clave super secreta')
        // payload tiene las claves userId, userRole
    } catch (error) {
        return res.status(403).json({ message: 'El token es incorrecto' });
    }

    // Recuperar el usuario de la BD
    const user = await User.findById(payload.userId);
    if (!user) {
        return res.status(403).json({ message: 'El usuario es incorrecto' });
    }

    // Incluyo el usuario dentro de la petición
    req.user = user;
    // Si consigo atravesar el método checkToken tengo disponible en la variable req.user los datos del usuario logado.

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'No eres usuario ADMIN' })
    }

    next();
}

module.exports = { checkToken, checkAdmin }