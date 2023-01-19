// importa o modulo do express
const express = require('express')

// inicializa o express
const app = express()

// importa o modulo do usuario
const usuario = new require("./model/usuario")

const produto = new require("./model/produto")

const porta = 5000;

// --------------------------MIDELWARE------------------------------------
// define a pasta publica que armazena o conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))

// decodifica os parametros enviados para a rota
app.use(express.urlencoded({ extended: true }))

// converte os valores- para fomato JSON
app.use(express.json())

// -------------------------FINAL MIDLEWARE--------------------------------

// Cria a rota padrao /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname + '/views/cadastra-usuarios.html')
})

app.post('/cadastrar/usuarios', (req, res) => {
    let dados = req.body
    usuario.create(dados)
        .then(respBd => {
            res.json({
                retorno: "ok",
                mensagem: "Cadastro Realizado com Sucesso!"
            })
        })
        .catch(respBd => {
            res.json({
                retorno: "erro",
                mensagem: `Erro ao Cadastrar! ${respBd}`
            })
        })
})
    .get("/listar/usuarios", (req, res) => {
        // 
        usuario.findAll()
            .then(respBd => {
                res.json(respBd)
            })
            .catch(respBd => {
                res.json({
                    retorno: "erro",
                    mensagem: `Erro ao çistar ${respBd}`
                })
            })
    })

app.post('/cadastrar/usuarios', (req, res) => {
    let dados = req.body
    usuario.create(dados)
        .then(respBd => {
            res.json({
                retorno: "ok",
                mensagem: "Cadastro Realizado com Sucesso!"
            })
        })
        .catch(respBd => {
            res.json({
                retorno: "erro",
                mensagem: `Erro ao Cadastrar! ${respBd}`
            })
        })
})
    .get("/listar/usuarios/:id", (req, res) => {

        let id = req.params.id

        usuario.findOne({ where: { id: id } })
            .then(respBd => {
                res.json(respBd)
            })
            .catch(respBd => {
                res.json({
                    retorno: "erro",
                    mensagem: `Erro ao listar ${respBd}`
                })
            })
    })

app.delete('/exluir/usuarios/:id', (req, res) => {

    let id = req.params.id

    usuario.destroy({ where: (id: id)})
        .then(respBd => {
            res.json({
                retorno: "ok",
                mensagem: "Usuário removido com sucesso!"
            })
        })
        .catch(respBd => {
            res.json({
                retorno: "erro",
                mensagem: `Erro ao deletar ${respBd}`
            })
        })
})

app
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})








