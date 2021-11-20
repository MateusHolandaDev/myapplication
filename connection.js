const mongodb = require('mongodb').MongoClient
const url = 'mongodb+srv://MateusHolandaDev:M1375577506@cluster0.c82br.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new mongodb(url)

async function conexao(){
    try{
        await client.connect()
        console.log('Servidor conectado com sucesso !')
    }catch{
        if(erro) throw erro
    }
}
conexao()

module.exports = client