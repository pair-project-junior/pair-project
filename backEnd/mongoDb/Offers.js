const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const offerSchema = new mongoose.Schema({

    name: String,
    imageUrl: String,
    price:Number,
    
  });
  
const Offers = mongoose.model("Offers", offerSchema);

module.exports.Offers = Offers;