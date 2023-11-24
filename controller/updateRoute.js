const express = require("express");
const customerSchema = require("../model/customerSchema");
const customizeSchema = require("../model/customizeSchema");
const orderSchema = require("../model/orderSchema");
const productSchema = require("../model/productSchema");
const sellerSchema = require("../model/sellerSchema");
const updateRoute = new express.Router();

// update customer
updateRoute.route("/update-customer/:id")
.get((req, res) => {
    customerSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req, res) => {
    customerSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// update customize
updateRoute.route("/update-customize/:id")
.get((req, res) => {
    customizeSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })

})
.put((req, res) => {
    customizeSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// update order
updateRoute.route("/update-order/:id")
.get((req, res) => {
    orderSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })

})
.put((req, res) => {
    orderSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// update product
updateRoute.route("/update-product/:id")
.get((req, res) => {
    productSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })

})
.put((req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// update seller
updateRoute.route("/update-seller/:id")
.get((req, res) => {
    sellerSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })

})
.put((req, res) => {
    sellerSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = updateRoute;