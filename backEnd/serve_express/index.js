const express = require('express');
const cors =require('cors');
const port = 3000;
const app = express();
const {db,getAllOffers,update,deletOne,create} = require('../mongoDb/index')




app.use(express.json())
app.use(cors());


app.get('/api/offer',(req,res)=> {
   getAllOffers().then((result)=>{   
    res.status(200).send(result)
   }).catch((error)=>{
    res.status(500).send(error)
   })
})

app.put('/api/offers/:id',(req,res) => { 
   db.update(req.params.id,req.body).then((result)=>{res.status(201).send(result)}).catch((error)=>{
      res.status(500).send(error)
   })
})

app.delete('/api/offers/:id',(req,res) => {
   db.deleteOne(req.params.id).then((result)=>{res.status(201).send(result)}).catch((error)=>{
      res.status(500).send(error)
   })
})

app.post('/api/offers/:id',(req,res) => {
      db.create(req.body).then((result)=>{res.status(201).send(result)}).catch((error)=>{
         res.status(500).send(error)
      })
})


app.listen(port, ()=>{
console.log(`listening on ${port}`);
})