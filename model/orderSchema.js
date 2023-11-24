const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    "product_id":{type:mongoose.Types.ObjectId, ref:"products"},
    "seller_id":{type:mongoose.Types.ObjectId},
    "company":{type:String},
    "model":{type:String},
    "price":{type:Number},
    "quantity":{type:Number},
    "image":{type:String},
    "color":{type:String},
    "newColor":{type:String}
});
const orderSchema = new mongoose.Schema({
    "customer_id":{type:mongoose.Types.ObjectId, ref:"customers"},
    "order_date":{type:Date},
    "total_amount":{type:Number},
    "address":{type:String},
    "products":[productSchema],
    "isCart":{type:Boolean}
},{
    collection: "orders"
});

module.exports = mongoose.model("orderSchema", orderSchema);