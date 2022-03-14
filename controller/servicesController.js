const { uuid } = require('uuidv4');
const db = require('../models');
const Services = db.Service;

const list = (req, res) => {
    const name = req.query.name;
    let condicao = name ? { name: { [db.Sequelize.Op.like]: `%${name}%` } } : null;
    Services.findAll({ 
        attributes: {exclude: ['categoria_id']},
        where: condicao,        
        include: [
            {model: db.Categoria, as: 'categoria'}
        ]
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao buscar servicos"
        });
      });
}

const listOne = (req, res) => {
    const uuid = req.params.id    
    Services.findByPk(uuid)
      .then(data => {
          if (data){
            res.status(200).send(data);
          }else{
            res.status(404).send({message: `Não foi possivel encontrar servico com id ${id}`})      
          }
        
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao buscar servico com id " + id
        });
      });
}

const edit = (req, res) => {
    const id = req.params.id;
    Services.update(req.body, {
        where: {uuid: id}
    })
    .then(qtd => {
        if (qtd == 1){
            res.status(200).send({
                message: "Registro atualizado"
            })
        }else{
            res.status(404).send({
                message: `Registro com id ${id} não encontrado`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar servico com id =" + id
        })
    })
}

const create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    let id = uuid();
    const servico = {
        uuid: id,
        name: req.body.name,
        price: req.body.price,
        text: req.body.text,
        email: req.body.email,
        categoria_id: req.body.categoria_id
    }
    Services.create(servico)
    .then(lvr => {
        res.status(201).send(lvr)
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
        })
    })
} 


const del = (req, res) => {
    const id = req.params.id
    Services.destroy({
        where: {uuid: id}
    })
    .then(qtd => {
        if (qtd == 1){
            res.status(200).send({message: "servico deletado com sucesso"})
        }else{
            res.status(404).send({message: "servico Não Encontrado"})
        }
    })
    .catch(erro => {
        res.status(405).send({message: "Não foi possível deletar o servico com id " + id})
    })
}
module.exports = {
    list,
    listOne,
    edit,
    create,
    del   
}