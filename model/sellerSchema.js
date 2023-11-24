const mongoose = require("mongoose");
const sellerSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "phone":{type:String}
},{
    collection: "sellers"
});

module.exports = mongoose.model("sellerSchema", sellerSchema);