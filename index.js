const express = require("express");
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/harrypotterapi/view');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const PersonagemRouter = require('./src/harrypotterapi/routes/personagem-routes');
app.use('/personagem', PersonagemRouter);

const CasaRouter = require('./src/harrypotterapi/routes/casa-routes');
app.use('/casa', CasaRouter);

app.listen(3000, () => console.log("Escutando na porta 3000"));