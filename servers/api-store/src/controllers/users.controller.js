const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users.model');

const register = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);

    try {
        const user = await User.create(req.body);
        res.json({
            success: 'registro exitoso',
            user
        });
    } catch (error) {

        next(error);

    }


};


const login = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({
            message: 'error email y/o contraseña incorrectos'
        });
    }
    const equals = bcrypt.compareSync(req.body.password, user.password);
    if (!equals) {
        return res.status(401).json({
            message: 'error email y/o contraseña incorrectos'
        });
    }
    res.json({
        success: 'login exitoso', token: jwt.sign({
            userId: user._id,
            userRole: user.role
        }, 'clave secreta')
    });

};

const profile = async (req, res, next) => {
    res.json(req.user);

};















module.exports = { register, login, profile };