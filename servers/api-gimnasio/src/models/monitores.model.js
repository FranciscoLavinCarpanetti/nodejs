const pool = require('../config/db');

const selectAll = async (tableName) => {
    const result = await pool.query('select * from monitores');
    return result[0];
}

module.exports = {
    selectAll
}