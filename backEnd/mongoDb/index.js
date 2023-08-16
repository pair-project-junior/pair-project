const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/travelAgency";
const {Offers} = require("./Offers")
const {FullName} = require ("./Offers")
const data  = require ("./../../react-client/src/data.json")
mongoose.connect(mongoUri).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
 
const getAllOffers = () => {
return Offers.find()
};

const update = (id,data) => {
  return Offers.findByIdAndUpdate({_id:id},data,{new:true})
}

const deleteOne = (id) =>{
  return Offers.findByIdAndDelete({_id:id})
}

const create = (offer) => {
  return Offers.create(offer)
}


const addName = (nameData) =>{
  return FullName.create(nameData)
}

module.exports = {
  db,
  getAllOffers,
  update,
  deleteOne,
  create, 
  addName

};
