const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const mongoURI = "" //URI do mongodb com usuario e senha
const mongoose = require("mongoose")
mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const fraseModel = require("./frase-schema")
const salvarFrase = async (texto)=>{
    const frase = new fraseModel({text:texto})
    return await frase.save()
}
app.post("",(req,res)=>{
    
    console.log("POST requested")
    const resposta = salvarFrase(req.body.texto)
    res.send(resposta)
})

app.get("", async (req,res)=>{
    console.log("GET requested")
    const lista = await fraseModel.find()
    res.send(lista)
})

app.listen(3000,()=>{
    console.log("Server is now running on 3000")
})
module.export = app