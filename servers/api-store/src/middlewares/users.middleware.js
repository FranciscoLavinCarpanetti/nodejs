const jwt = require('jsonwebtoken');
const User = require('../models/users.model');




const checkToken = async (req, res, next) => {
    // Comprobamos si existe el token en la cabecera de la petición
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Debes incluir la cabecera authorization' });
    }

    // Comprobamos si el token es válido
    let payload;
    try {
        payload = jwt.verify(token, 'clave secreta');

    } catch (error) {
        return res.status(403).json({ message: 'Token incorrecto' });
    }

    // Recuperar el usuario de la BD
    const user = await User.findById(payload.userId);
    if (!user) {
        return res.status(403).json({ message: 'Usuario incorrecto' });
    }

    // Incluir el usuario en la request
    req.user = user;

    next();
};


const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'No tienes permiso Admin' });
    }






    next();

};



module.exports = { checkToken, checkAdmin };