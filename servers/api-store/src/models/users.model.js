const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: 'regular'
    }
}, {
    timestamps: true, versionKey: false
});

const User = model('user', userSchema);
module.exports = User;
