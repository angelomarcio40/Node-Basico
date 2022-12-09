const express = require("express")

const app = express()

const porta = 4200

app.get('/',(req,res)=>{
    res.json({"rota": "index"})
})

app.get('/caastrar/login',(req,res)=>{
    res.json({"rota": "cadastrar login"})
})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhos:${porta}`)
})