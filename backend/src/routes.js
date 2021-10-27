const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserControler');

routes.get('/users',UserController.list);
routes.get('/users/:id',UserController.show);
routes.post('/users',UserController.create);  
routes.put('/users/:id',UserController.update);
routes.delete('/users/:id',UserController.delete);

/***
 * GET: Buscar / listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar as informações no backend
 * DELETE: Apagar informações no backend
 * Request Body parametros para identificação do recurso 
 * Query: Parametros nomeados enviados na rota apos simbolo?
 * Request body: corpo da requisição: nome, email, cpf
 */

        

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