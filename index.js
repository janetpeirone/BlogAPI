const express = require('express');
const bodyParser = require('body-parser');
const postRouter = require('./routes/posts-routes')

const app = express();

require('./db');

// parse requests of content-type: application/json
app.use(bodyParser.json()); 
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('',postRouter);

app.listen(3000, () => {
    console.log('Server running in port 3000');
});