const express = require('express')

const app = express()

const porta = 4500

app.get('/',(req,res)=>{
    res.send('<h1>Página Principal</h1>')
})

// rota que recebe parametros
// http://localhost:4500/cadastrar/parametros
// captura de parametros via GET
app.get('/cadastrar/:nome',(req,res)=>{
    // cria a variavel nome e atribui o valor enviado pelo usuario
    let nome = req.params.nome
    // cria a varialvel email e captura o valor email
    let email = req.params.email
    res.send(req.params.email)
})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http//localhost:${porta}`)
})