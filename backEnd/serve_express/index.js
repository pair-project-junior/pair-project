const express = require('express');
const cors =require('cors');
const port = 3000;
const app = express();
const {db,getAllOffers,update,deleteOne,create, addName} = require('../mongoDb/index')




app.use(express.json())
app.use(cors());


app.get('/api/offer',(req,res)=> {
   getAllOffers().then((result)=>{   
    res.status(200).send(result)
   }).catch((error)=>{
    res.status(500).send(error)
   })
})

app.put('/api/offer/:id',(req,res) => { 
   update(req.params.id,req.body).then((result)=>{res.status(201).send(result)}).catch((error)=>{
      res.status(500).send(error)
   })
})

app.delete('/api/offer/:id',(req,res) => {
   deleteOne(req.params.id).then((result)=>{res.status(201).send(result)}).catch((error)=>{
      res.status(500).send(error)
   })
})

app.post('/api/offer',(req,res) => {
   console.log(req.body)
      create(req.body)
      .then((result)=>{res.status(201).send(result)})
      .catch((error)=>{
         res.status(500).send(error)
      })
})

app.post("/api/fullNames",(req,res)=>{
   addName(req.body).then((result)=>{
      res.status(200).send(result)
   }).catch((error)=>{
      res.status(500).send(error)
   })
})


app.get("/api/fullNames",(req,res)=>{
   addName().then((result)=>{
      res.status(200).send(result)
   }).catch(()=>{
      res.status(500).send(error)
   })
})

app.listen(port, ()=>{
console.log(`listening on ${port}`);
})