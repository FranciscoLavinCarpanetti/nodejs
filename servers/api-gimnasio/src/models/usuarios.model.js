const pool = require('../config/db');


const create = async ({ username, email, password }) => {
    const [result] = await pool.query('INSERT INTO usuarios (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, password, role, 'regular']

    );
    return result;
}

const selectByEmail = async (email) => {
    const [result] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]

    );
    if (result.length === 0) return null;
    return result[0];


}




module.exports = { create, selectByEmail }