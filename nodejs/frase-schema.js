const mongoose = require("mongoose")
const Schema = mongoose.Schema
const fraseSchema = new Schema({
    id:{type:Number},
    text:String
})
module.exports = mongoose.model("Frase", fraseSchema)