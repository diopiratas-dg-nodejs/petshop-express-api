const bcrypt = require('bcrypt')
const db = require('../models')

const createUser = (req, res) => {
    let {nome, email, senha} = req.body
    let senhaHash = bcrypt.hashSync(senha, 10)
    let novoUsuario = {
        nome,
        email,
        senha: senhaHash
    }

    db.Usuario.create(novoUsuario)
    .then((result) => {
      res.status(201).send('OK');
    })
    .catch((e) => {
        console.log(e)
      res.status(500).send('Erro ao inserir na base');
    });
};


module.exports = {
    createUser
};