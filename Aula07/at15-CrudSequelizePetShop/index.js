// importa o modulo do express
const express = require('express')

// inicializa o express
const app = express()

// importa o modulo do usuario
const usuario = new require("./model/usuario")

const produto = new require("./model/produto")

const porta = 5000;

// define a pasta publica que armazena o conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))


// Cria a rota padrao /
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')
})

app.get('/cadastrar',(req,res)=>{
    res.sendFile(__dirname+'/views/cadastra-usuarios.html')
})


app.listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})







