const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./config/route')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(routes)


app.listen(8083, () => {
    return console.log("Servidor rodando!");
});
