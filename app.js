const express = require('express')

const fs = require('fs')

const app = express();

app.use(express.json());


app.post("/ContasAReceber", (req, res) => {

    response = {

        Descricao: req.body.Descricao,

        Valor: req.body.Valor,

        DataDeCompetencia: req.body.DataDeCompetencia,

        DataDeCaixa: req.body.DataDeCaixa,

        Contato: req.body.Contato
    };

    return res.send("Conta salva com sucesso!");


});


app.get("/ContasAReceber/Relatorios", (req, res) => {
    // Isso aqui foi um teste.
    fs.readFile('teste.txt', (err, arquivo) => {

        res.writeHead(200, { 'Content-Type': 'text/txt' });

        res.write(arquivo);

        return res.end();

    });

})



app.listen(8083, () => {
    console.log("Servidor rodando!")
})

