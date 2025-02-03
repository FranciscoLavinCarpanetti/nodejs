// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Route configuration
app.get('/api/empleados', (req, res) => {
    res.send('Se recuperan todos los empleados');
});

app.post('/api/empleados', (req, res) => {
    res.send('Se recuperan todos los empleados');
});

app.put('/api/empleados', (req, res) => {
    res.send('Se recuperan todos los empleados');
});

app.delete('/api/empleados', (req, res) => {
    res.send('Se recuperan todos los empleados');
});


// POST /estudiantes/creacion
app.post('/estudiantes/creacion', (req, res) => {
    console.log(req.method, req.url, req.headers, req.body);
    res.send('Se crea un nuevo estudiante');
});

app.delete('/api/productos', (req, res) => {
    res.send('Se borra un producto');
});









// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found'
    });
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: err.message });
})

module.exports = app;