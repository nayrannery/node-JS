const express = require('express');
const app = express();
app.use(express.json());

/***
 * GET: Buscar / listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar as informações no backend
 * DELETE: Apagar informações no backend
 * Request Body parametros para identificação do recurso 
 * Query: Parametros nomeados enviados na rota apos simbolo?
 * Request body: corpo da requisição: nome, email, cpf
 */

app.post('/users', (req, res) => {
    const params = req.query;
    console.log(params)
        res.json({
            nome: 'Lucas',
            empresa: 'UESB'
        })
})

app.post('/user', (req, res) => {
    const params = req.body;
    console.log(params)
        res.json({
            id: '1234'            
        })
})

app.post('/user/:id', (req, res) => {
    const params = req.params;
    console.log(params)
        res.json({
            Mensagem: 'Sucesso'            
        })
})

app.listen(3001);