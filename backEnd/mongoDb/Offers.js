const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const offerSchema = new mongoose.Schema({

    name: String,
    imageUrl: String,
    price:String,
    
    
  });

  const fullNamesSchema = new mongoose.Schema({
    fullName : String,
    email:String,
    age:Number
  })
  
const Offers = mongoose.model("Offers", offerSchema);
const FullName = mongoose.model("fullNames",fullNamesSchema)


module.exports = {
  Offers,
  FullName
}

