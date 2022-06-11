const axios = require('axios');

class PersonagemController {
    async buscarPersonagem(req, res) {
        const { nomePersonagem } = req.body;
        console.log(nomePersonagem);
        const personagens = await buscaPersonagemAPI(nomePersonagem);
        if (personagens) {
            return res.render('personagens', { personagens });
        }
        return res.send("ooops, id nao encontrado");
    }

    
}

const buscaPersonagemAPI = async (nomePersonagem) => {
    const URL = `http://hp-api.herokuapp.com/api/characters/students`;
    try {
        const resposta = await axios.get(URL);
        const filtrados = resposta.data.filter(personagem => personagem.name.toLowerCase().indexOf(nomePersonagem.toLowerCase()) > -1);
        return filtrados;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPersonagemAPI, PersonagemController }