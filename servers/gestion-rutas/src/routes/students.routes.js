// /students
const router = require('express').Router();

router.get('/all', (req, res) => {
    res.send('Se recuperan todos toditos los estudiantes');
});

module.exports = router;