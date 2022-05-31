const axios = require('axios');

module.exports = {
    async pesquisarPerfilGitHub(req, res){
        const {name} = req.params;

        await axios.get('htts://api.github.com/users/' + name).then(function(res){
            console.log(res)
            
        }).catch((err) => {
            res.json({msg: 'Não encontrado'})
        })


    }
}