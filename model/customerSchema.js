const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "phone":{type:String}
},{
    collection: "customers"
});

module.exports = mongoose.model("customerSchema", customerSchema);