const express = require("express");
const customerSchema = require("../model/customerSchema");
const customizeSchema = require("../model/customizeSchema");
const orderSchema = require("../model/orderSchema");
const productSchema = require("../model/productSchema");
const sellerSchema = require("../model/sellerSchema");
const createRoute = new express.Router();

// create customer
createRoute.post("/create-customer", (req, res) => {
    customerSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// create customization
createRoute.post("/create-customize", (req, res) => {
    customizeSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// create order
createRoute.post("/create-order", (req, res) => {
    orderSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// create product
createRoute.post("/create-product", (req, res) => {
    productSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// create seller
createRoute.post("/create-seller", (req, res) => {
    sellerSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = createRoute;