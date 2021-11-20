const express = require('express')
const handlebars = require('express-handlebars')
const Banco = require('./connection')
const hbs = handlebars.create({
    layoutDir: 'main',
    partialsDir: 'views/partials'
})
const app = express()
const dbo = Banco.db('Login')
const porta = 3000

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/adicionando', (req, res) => {
    let obj = {
        usuário: req.body.usuario,
        senha: req.body.senha
    }

    dbo.collection('Usuários').insertOne(obj, (err, resul) => {
        if(err) throw err
        res.redirect(`/usuario/${req.body.usuario}`)
    })

})

app.get('/usuario', (req, res) => {
    dbo.collection('Usuário').find({usuario: req.params.nome}, {senha: 1}).toArray((err, result) => {
        if(err) throw err
        res.render('usuario', {result})
    })
})

app.listen(porta, () => {console.log(`Servidor http://localhost:${porta}/ Rodando`)})