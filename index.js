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



// app.get('/', async (req, res) => {

//     // https://swapi.dev/api/films/NUMERO

//     // const numero = Math.floor(1 + Math.random() * 6);
//     const urlBusca = `https://swapi.dev/api/films/${req.query.filme}`; 

//     try {
//         const responseApi = await axios.get(urlBusca);

//         res.send({
//             // numero,
//             urlBusca,
//             statusBusca: responseApi.status,
//             dataBusca: responseApi.data
//         });
//     } catch (error) {
//         console.log({error})
//         if (error.response.status == 404)
//             res.send('NAO FOI POSSIVEL LOCALIZAR O RECURSO NA API');
//         else
//             res.send('ERRO DESCONHECIDO...');
//     }
    
// });

app.listen(3000, () => console.log("Escutando na porta 3000"));