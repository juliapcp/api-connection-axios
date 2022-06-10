const axios = require('axios');

class PersonagemController {
    async buscarPersonagem(req, res) {
        const { nomePersonagem } = req.body;
        console.log(nomePersonagem);
        const resultado = await buscaPersonagemAPI(nomePersonagem);
        if (resultado) {
            return res.send({ resultado });
        }
        return res.send("ooops, id nao encontrado");
    }

    
}

const buscaPersonagemAPI = async (nomePersonagem) => {
    const URL = `http://hp-api.herokuapp.com/api/characters/students`;
    try {
        const resposta = await axios.get(URL);
        return resposta.data;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPersonagemAPI, PersonagemController }