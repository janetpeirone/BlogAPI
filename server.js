const express = require('express');
const bodyParser = require('body-parser');
const postRouter = require('./routes/posts-routes');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: '*'
  }

// parse requests of content-type: application/json
app.use(bodyParser.json()); 
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', cors(corsOptions), postRouter);

app.listen(3000, () => {
    console.log('Server running in port 3000');
});