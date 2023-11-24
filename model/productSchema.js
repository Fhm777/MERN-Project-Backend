const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    "seller_id":{type:mongoose.Types.ObjectId},
    "company":{type:String},
    "model":{type:String},
    "price":{type:Number},
    "stock_quantity":{type:Number},
    "image":{type:String},
    "color":{type:String}
},{
    collection: "products"
});

module.exports = mongoose.model("productSchema", productSchema);