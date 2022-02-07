const express = require('express')

const app = express()
app.use(express.json())
const porta = 3000

app.get('/', (req,res,next)=>res.send("OK"))
app.listen(porta, ()=>console.log(`O servidor está rodando na porta ${porta}`))