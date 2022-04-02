const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cookieParser());

let f = (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        hola:"mundo"
    });
}

let o = (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT");
    res.status(204).send()
}

app.options('/',o);

app.get('/',f);
app.post('/',f);
app.put('/',f);

app.listen(8081, ()=>console.log('Server ON'));