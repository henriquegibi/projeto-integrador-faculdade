const express = require("express")
const app = express()
app.use(express.json())
const mongoURI = "mongodb+srv://xxx:yyy@cluster0.zaebtn0.mongodb.net/?retryWrites=true&w=majority"
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
    const resposta = salvarFrase(req.body.texto)
    res.send(resposta)
    console.log("POST requested")
})

app.get("", async (req,res)=>{
    const lista = await fraseModel.find()
    res.send(lista)
    console.log("GET requested")
})

app.listen(3000,()=>{
    console.log("Server is now running")
})
module.export = app