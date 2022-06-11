const axios = require('axios');

class CasaController {
    async buscarPersonagensDaCasa(req, res) {
        const { casa } = req.params;
        const estudantes = await buscaPersonagensDaCasaAPI(casa);
        if (estudantes) {
            return res.render('estudantes', { estudantes, casa });
        }
        return res.send("ooops, id nao encontrado");
    }


}

const buscaPersonagensDaCasaAPI = async (casa) => {
    const URL = `http://hp-api.herokuapp.com/api/characters/house/${casa}`;
    console.log(URL);
    try {
        const resposta = await axios.get(URL);
        const estudantes = resposta.data;
        return estudantes;
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { buscaPersonagensDaCasaAPI, CasaController }