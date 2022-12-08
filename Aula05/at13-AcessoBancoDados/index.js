// importação express
const express = require('express')
const con = require("./conexao")
// importação das funções
const validaCampoVazio = require('./validaCampoVazio')

// inicialização do express
const app = express()

// porta servidor
const porta = 3900

// define a pasta public com conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'));

// middlware
// rota que toda requisição passa por ela
// rota padrão

// decodifica os parametros enviados para rota
app.use(express.urlencoded({ extende: true }))

// converteos valores para formato JSON
app.use(express.json())

// criar as rotas
// rotaprincipal / (index)
app.get('/', (req, res) => {
    res.status(200)
    res.sendFile(__dirname + '/views/login.html')
})

// cria a rota cadastrar
app.get('/cadastrar', (req, res) => {
    res.status(200)
    res.sendFile(__dirname + '/views/cadastrar.html')
})

app.get('/consultar/:id?', (req, res) => {
    res.status(200)

    try {
        // capptura o id enviado ou não via url
        var id = req.params.id
        if (typeof id == '') {
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login`
        } else {
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login WHERE id = ${id}`
        }

        con.query(sql, (error, result) => {
            if (error) {
                res.send(`Não foi pssivel listar os registros ${error}`)
            }
            res.send(result)
        })

    } catch (error) {
        res.send(`Não foi possivel listar os registros ${error}`)
    }
})

// cria a rota para cadastrar login
app.post('/cadastrar/login', (req, res) => {
    // let nome = req.body.nome

    let { nome, email, senha, confirmar } = req.body

    // valida os campos vazios
    // validaCampoVazio(Nome,'Nome')

    if (nome == '' || email == '' || senha == '' || confirmar == '')
        return res.jason({
            "retorno": "erro",
            "mensagem": "Preencha os campos obrigatórios!"
        })

    if (senha != confirmar) {
        return res.json({ "retorno": "erro", "mensagem": "Senhas não conferem!" })
    }

    // monta o commando SQL que sera executado no banco de dados

    try {
        let sql = `INSERT INTO tb_login(nome,email,senha)VALUES('${nome}','${email}','${senha}')`
        // executa o comando SQL no banco de dados
        // esculta um calback quando comando é executado
        con.query(sql, (error, result) => {
            if (error) {
                return res.json({
                    "retorno": "erro",
                    "mensagem": `Erro ao cadastrar ${error}`
                })
            }
            // retorna a msg de sucesso
            res.json({
                "retorno": "ok",
                "mensagem": `Cadastro realizado com sucesso! ${error}`
            })
        })

    } catch (error) {
        res.json({
            "retorno": "erro",
            "mensagem": `Erro ao cadastrar ${error}`
        })

    }

    // res.send(`Nome:${nome} Email:${email}`)
})

// rota para atualização de registros
app.patch('/atualizar/login', (req, res) => {
    // cria a var e email e atribui os valores enviados via parametro
    let { id, nome, email } = req.body

    try {
        let sql = `UPDATE tb_login SET nome='${nome}', email='${email}' WHERE id=${id}`;
        con.query(sql, (error, result) => {
            if (error) {
                return res.send(`Não foi possivel atualizar os dados ${error}`)
            }
            res.send(`Dados atualizado com sucesso!`)
        })
    } catch (error) {
        return res.send(`Não foi possivel atualizar os dados ${error}`)
    }
})

// rota para remover registros(deletar)
app.delete('/deletar/login', (req, res) => {
    let id = req.body.id

    try {
        // comando sql que sera executado
        let sql = `DELETE FROM tb_login WHERE id = ${id}`

        con.query(sql, (error, result) => {
            if (error) {
                return res.send(`Não foi possível deletar o registro! ${error}`)
            }
            res.send(`Não foi deletado com sucesso! ${error}`)
        })
    } catch (error) {
        return res.send(`Não foi possível deletar o registro! ${error}`)
    }
})

// rota que valida Login
app.post('/validar/login',(req,res)=>{
    let (email,senha) = req.body

    try {
        let sql = `SELECT email,senha FROM tb_login WHERE email='${email} and BINARY senha = '{senha}' AND ativo=1`;

        con.query(sql,(error,resukt)=>{
            if(error){
                res.json({
                    "retorno": "erro",
                    "mensagem": `Não foi possível validar usuário! ${error}`
                })
            }

            res.json(result)
        })
    }
})

// rota para retorno de pagina de erro
// muito importante -> ficar no final das rotas
app.use((req, res) => {
    res.status(404)
    res.send('<h1>Página não emcontrada!</h1>')
})

// Lista servidor.. final do arquivo
app.listen(porta, () => {
    console.log(`Servidor rodando: http://localhost:${porta}`)
})