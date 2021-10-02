const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connections');
const routes = express.Router();

routes.get('/users',async (req, res) =>{
    const users = await connection ('users').select('*');
    res.json(users);
})

/***
 * GET: Buscar / listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar as informações no backend
 * DELETE: Apagar informações no backend
 * Request Body parametros para identificação do recurso 
 * Query: Parametros nomeados enviados na rota apos simbolo?
 * Request body: corpo da requisição: nome, email, cpf
 */

routes.post('/users',async (req, res) => {
        const {nome, email, idade, empresa} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
    await connection('users').insert({
        id,
        nome,
        email,
        idade,
        empresa
    })
        res.json({id})
})

/*** 
routes.post('/user', (req, res) => {
    const params = req.body;
    console.log(params)
        res.json({
            id: '1234'            
        })
})

routes.post('/user/:id', (req, res) => {
    const params = req.params;
    console.log(params)
        res.json({
            Mensagem: 'Sucesso'            
        })
})
*/


module.exports = routes;