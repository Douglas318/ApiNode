const api = require("./poke")
const express = require('express')
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    return res.send({ mensagem: "Douglas"});
})

app.get('/pokemon/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const {data} = await api.get(`pokemon/${id}`)
        
        return res.send({nome: data.name});
    } catch (error) {
        res.send({error: error.message})
    }
});

app.listen(8083, () =>{
    return console.log('Servidor rodando!!')
});