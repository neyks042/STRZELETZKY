const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const path = require("path")

const app = express()

app.use(express.json())
app.use(cors())

const DataBase= "ArkhamDB"
const url = `mongodb://localhost:27017/${DataBase}`
mongoose.connect(url)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log("Connection error: ", err.message))
    
    
    const arkhamSchema = new mongoose.Schema({
        main: String,
        info: String,
        specinfo: String,
    })


    const Arkham= mongoose.model("ArkhamDB",arkhamSchema,"arkham")


    app.get("/api/gotham", async (req,res)=>{
        try{
            const criminals = await Arkham.find({})
            res.json(criminals)
    
        }catch(err){
            res.status(500).json({message: err.message})
        }
    })


    app.get("/api/gotham/:main", async (req,res)=>{
        try{
            const criminals = await Arkham.findOne({main:req.params.main})
            res.json(criminals)
    
        }catch(err){
            res.status(500).json({message: err.message})
        }
    })


    const PORT = 8000
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))