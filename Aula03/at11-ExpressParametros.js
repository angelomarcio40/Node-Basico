const express = require('express')

const app = express()

const porta = 4500

app.get('/',(req,res)=>{
    res.send('<h1>Página Principal</h1>')
})

// rota que recebe parametros
// http://localhost:4500/cadastrar/parametros
// captura de parametros via GET
app.get('/cadastrar/:pagina',(req,res)=>{
    // ,captura a pagina de cadastro
    let pagina = req.params.pagina
    
    let url = ''
    let stausCode = 404

    if(pagina == 'usuarios'){
        statusCode = 200
        url = '/cadastrar-usuarios.html'
    }else if(pagina == 'produtos'){
        statusCode = 200
        url = '/cadstrar-produtos.html'
    }else{
        url = '404.html'
    }

    // devolve um arquivo
    res.status(statusCode)
    res.sendFile(__dirname+url)
})

app.get('/consultar',(req,res)=>{

})

app.listen(porta,()=>{
    console.log(`Servidor rodando: htt://localhost:${porta}`)
})