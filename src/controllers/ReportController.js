const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){
        //Encontrar todos os usuários que tem o e-mail gmail 
        //Desses usuários quero buscar todos que moram em Av Caetano Gornati
        //Deses usuários quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where:{
                email: {
                    //Precisa colocar em colchetes para identificar como variavel
                    [Op.iLike]: '%@gmail%'
                }
             },
             include:[
                 { association: 'addresses', 
                   where: { street:'Av Caetano Gornati'}
                 }, //Endereços
                 {
                     //Aplica o filtro, mas não impacta o retorno da listagem
                     association: 'techs',
                     required: false,
                     where: { 
                        name: {
                            //Precisa colocar em colchetes para identificar como variavel
                            [Op.iLike]: 'Node%'
                        }
                     }
                 }, //Tecnologias
             ]
        });

        return res.json(users); 
    }
};