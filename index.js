const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./db');

// parse requests of content-type: application/json
app.use(bodyParser.json()); 
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.json('Bienvenido a Blog API')
});

app.listen(3000, () => {
    console.log('Server running in port 3000');
});