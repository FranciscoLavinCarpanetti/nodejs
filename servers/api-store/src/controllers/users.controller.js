const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users.model');

const register = async (req, res, next) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8);

    try {
        const user = await User.create(req.body);
        res.json({
            success: 'Registro correcto',
            user
        })
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    // body: email, password
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({ message: 'Error email y/o contraseña' });
    }

    const equals = bcrypt.compareSync(req.body.password, user.password);
    if (!equals) {
        return res.status(401).json({ message: 'Error email y/o contraseña' });
    }

    res.json({
        success: 'Login correcto',
        token: jwt.sign({
            userId: user._id,
            userRole: user.role
        }, 'clave super secreta')
    });
}

const profile = (req, res, next) => {
    res.json(req.user);
}

module.exports = { register, login, profile };