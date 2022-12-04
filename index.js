const express=require('express')
const product = require('./product')
const app=express()
require('./config')
app.use(express.json())

//GET API method
app.get('/list',async(req,res)=>{
    let data=await product.find()
    res.send(data)
})

//DELETE API method
app.delete('/delete/:_id',async(req,res)=>{
    console.log(req.params)
    let data=await product.deleteOne(req.params)
    res.send('done')
})

//PUT API method
app.put('/update/:_id',async(req,res)=>{
     let data=await product.updateOne(
        req.params,
        { 
            $set:req.body
        }
     )
     res.send(data)
})

app.listen(5000)