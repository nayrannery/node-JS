const express = require('express');

const app = express();
/***
 * GET: Buscar / listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar as informações no backend
 * DELETE: Apagar informações no backend
 */
app.post('/users',(req, res)=>{
    res.json({
nome: 'Lucas',
empresa:'UESB'
    })
})
app.listen(3001);