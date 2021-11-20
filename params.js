const express = require('express')
const app = express()
const porta = 3000

app.get('/:nome', (req, res) => {
    let valor = req.params.nome

    let subs = ''

    for(let nome of valor){
        subs += nome.replace('_', ' ')
    }

    res.send(`Seu nome é ${subs}`)
   
}).listen(porta, () => {console.log('Servidor http://localhost:3000/Mateus Rodando ')})