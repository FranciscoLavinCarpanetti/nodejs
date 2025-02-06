// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');
const dayjs = require('dayjs');

const app = express();
app.use(express.json());
app.use(cors());



app.use((req, res, next) => {
   
    const currDate = dayjs().format('DD-MM-YYYY HH:mm:ss');
    console.log (currDate)
    next();
});




// app.use((req, res, next) => {
//     const randomNum= Math.random();
//     if (randomNum < 0.6) {
//         return res.status(401).json({ message: 'Error aleatorio' });
//     } else {
//         next();
//     }
// });






// Route configuration
app.use('/api', require('./routes/api.routes'));

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