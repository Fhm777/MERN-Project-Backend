const mongoose = require("mongoose");
const customizeSchema = new mongoose.Schema({
    "product_id":{type:mongoose.Types.ObjectId},
    "customer_id":{type:mongoose.Types.ObjectId},
    "color":{type:String}
},{
    collection: "customization"
});

module.exports = mongoose.model("customizeSchema", customizeSchema);