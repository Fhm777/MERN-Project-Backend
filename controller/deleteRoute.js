const express = require("express");
const customerSchema = require("../model/customerSchema");
const customizeSchema = require("../model/customizeSchema");
const orderSchema = require("../model/orderSchema");
const productSchema = require("../model/productSchema");
const sellerSchema = require("../model/sellerSchema");
const deleteRoute = new express.Router();

// delete customer
deleteRoute.delete("/delete-customer/:id", (req,res) => {
    customerSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// delete customize
deleteRoute.delete("/delete-customize/:id", (req,res) => {
    customizeSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// delete order
deleteRoute.delete("/delete-order/:id", (req,res) => {
    orderSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// delete product
deleteRoute.delete("/delete-product/:id", (req,res) => {
    productSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// delete seller
deleteRoute.delete("/delete-seller/:id", (req,res) => {
    sellerSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = deleteRoute;