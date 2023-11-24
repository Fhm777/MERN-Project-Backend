const express = require("express");
const customerSchema = require("../model/customerSchema");
const customizeSchema = require("../model/customizeSchema");
const orderSchema = require("../model/orderSchema");
const productSchema = require("../model/productSchema");
const sellerSchema = require("../model/sellerSchema");
const getRoute = new express.Router();

// get customer
getRoute.get("/get-customer", (req, res) => {
    customerSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

getRoute.get("/get-customer/:id", (req, res) => {
    customerSchema.findById(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get customer by email
getRoute.get("/get-customer-by-email/:email", (req, res) => {
    customerSchema.findOne({"email": req.params.email}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get customization
getRoute.get("/get-customize", (req, res) => {
    customizeSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

getRoute.get("/get-customize/:id", (req, res) => {
    customizeSchema.findById(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get customization by customer
getRoute.get("/get-customize-by-customer-product/:idc/:idp", (req, res) => {
    customizeSchema.find({"product_id":req.params.idp, "customer_id":req.params.idc}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});


// get order
getRoute.get("/get-order", (req, res) => {
    orderSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

getRoute.get("/get-order/:id", (req, res) => {
    orderSchema.findById(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get orders from customer
getRoute.get("/get-order-by-customer/:id", (req, res) => {
    orderSchema.find({"customer_id":req.params.id, "isCart":false}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get cart from customer
getRoute.get("/get-cart-by-customer/:id", (req, res) => {
    orderSchema.find({"customer_id":req.params.id, "isCart":true}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

//get order from seller
getRoute.get("/get-order-from-seller/:id", (req, res) => {
    orderSchema.find({"products": {$elemMatch: {"seller_id": req.params.id}}, "isCart":false}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

//get products
getRoute.get("/get-product", (req, res) => {
    productSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

getRoute.get("/get-product/:id", (req, res) => {
    productSchema.findById(req.params.id ,(err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

//get product from seller
getRoute.get("/get-product-from-seller/:id", (req, res) => {
    productSchema.find({"seller_id": req.params.id} ,(err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

//get seller
getRoute.get("/get-seller", (req, res) => {
    sellerSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

getRoute.get("/get-seller/:id", (req, res) => {
    sellerSchema.findById(req.params.id ,(err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// get seller by email
getRoute.get("/get-seller-by-email/:email", (req, res) => {
    sellerSchema.findOne({"email": req.params.email}, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = getRoute;