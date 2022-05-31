const axios = require('axios');

module.exports = {
    async pesquisarPerfilGitHub(request, response){
        
        const {name} = request.params;

        var nome,bio,imagem;

        await axios.get('htts://api.github.com/users/' + name).then(function(resposta) {
            console.log(resposta.data);
            
            nome = resposta.data.nome;
            bio = resposta.data.bio;
            imagem = resposta.data.avatar_url

            return response.send('<html>  <head> </head> <body> <h1>' +nome+' </h1> <img scr="'+imagem+'" <h2> '+bio+' </h2> </body> </html>')

        }).catch((err) => {
            response.json({msg: "Não encontrado"});
        })


    }
};