const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/travelAgency";
const {Offers} = require("./Offers")
const data  = require ("./../../react-client/src/data.json")
mongoose.connect(mongoUri).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
 
const getAllOffers = () => {
return Offers.find()
};

const update = (id,data) => {
  return Offers.findByIdAndUpdate({_id:id},data,{new:true})
}

const deletOne = (id) =>{
  return Offers.findByIdAndDelete({_id:id})
}

const create = () => {
  return Offers.create()
}


module.exports = {
  db,
  getAllOffers,
  update,
  deletOne,
  create
};
