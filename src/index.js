const express = require("express");
const axios = require('axios');
const { buscaPostNaAPI } = require("./harrypotterapi/detail-post");
const { createPostNaAPI } = require("./harrypotterapi/create-post");
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded());

const PersonagemRouter = require('./routes/personagem-routes');
app.use('/personagem', PersonagemRouter);

app.post('/buscar', async (req, res) => {
    const { postId } = req.body;
    const resultado = await buscaPostNaAPI(postId);
    if (resultado) {
        return res.send({ resultado });
    }
    return res.send("ooops, id nao encontrado");
})


app.get('/', async (req, res) => {

    // https://swapi.dev/api/films/NUMERO

    // const numero = Math.floor(1 + Math.random() * 6);
    const urlBusca = `https://swapi.dev/api/films/${req.query.filme}`; 

    try {
        const responseApi = await axios.get(urlBusca);

        res.send({
            // numero,
            urlBusca,
            statusBusca: responseApi.status,
            dataBusca: responseApi.data
        });
    } catch (error) {
        console.log({error})
        if (error.response.status == 404)
            res.send('NAO FOI POSSIVEL LOCALIZAR O RECURSO NA API');
        else
            res.send('ERRO DESCONHECIDO...');
    }
    
});

app.listen(3000, () => console.log("Escutando na porta 3000"));