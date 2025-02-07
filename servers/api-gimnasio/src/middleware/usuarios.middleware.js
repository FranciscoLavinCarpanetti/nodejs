const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios.model');


const checkToken = async (req, res, next) => {
    //1. Comprobar si ¿existe la cabecera de autenticación?
    if (!req.headers['authorization']) {
        return res.status(403).json({ message: 'Falta cabecera de autenticación' });
    }
    const token = req.headers['authorization'];

    //2. Comprobar si ¿el token es correcto?
    let payload;
    try {
        payload = jwt.verify(token, 'clave secreta');
        console.log(payload);
    } catch (error) {
        return res.status(403).json({ message: 'Token incorrecto' });
    }

    //3. Comprobar si ¿el usuario es valido?
    const usuario = await Usuario.selectById(payload.usuarioId);
    if (!usuario) {
        return res.status(403).json({ message: 'Usuario incorrecto' });
    }


    next();
};




module.exports = {
    checkToken
}