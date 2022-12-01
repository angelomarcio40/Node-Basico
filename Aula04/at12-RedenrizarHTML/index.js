// importação express
const express = require('express')

// inicialização do express
const app = express()

// porta servidor
const porta = 3600

// define a pasta public com conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'));

// criar as rotas
app.get('/',(req,res)=>{
    res.status(200)
    res.send('<h1>Index</h1>')
})

// cria a rota cadastrar
app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

app.get('/consultar',(req,res)=>{
    res.status(200)
    res.send('<h1>Consultar</h1>')
})

// rota para retorno de pagina de erro
// muito importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não emcontrada!</h1>')
})

// Lista servidor.. final do arquivo
app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})