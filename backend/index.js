const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connection, sql } = require('./db/config');
const router = require('./routes/route');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

const port = process.env.PORT || 3030;

const start = async () => {
     await connection.connect()
    .then(
        app.listen(port, '', console.log(`server is listening on url http://localhost:${port} ...`))
    ).catch(err => console.log(err))
}

start();