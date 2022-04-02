const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(morgan('tiny'));

let f = (req, res)=> {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    console.log(req.cookies);
    res.send({
        hola:"mundo"
    });
}

let o = (req, res)=> {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Methods", "PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authentication");
    res.header("Access-Control-Allow-Credentials", "true");
    res.status(204).send()
}

app.options('/',o);

app.get('/',f);
app.post('/',f);
app.put('/',f);

app.listen(8081, () => console.log('Server ON'));