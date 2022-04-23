const express = require('express')

const app = express()

app.use(express.json())

app.post("/array", function (req, res) {
    
    const {SomaArray} = req.body;

    res.send(SomaArray.join(" "))


})

app.listen(8082, () => console.log("Servidor rodando!"))