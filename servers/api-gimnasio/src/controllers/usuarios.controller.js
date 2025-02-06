const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios.model');


const registro = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);


        const result = await Usuario.create(req.body);
        res.json({ message: 'Usuario creado' });

    } catch (error) {
        next(error);

    }
}


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