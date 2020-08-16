const express = require("express");
const router = express.Router();
let Product = require("../models/product.model");

router.get("/", (req, res) => {
  const querry = req.query;
  Product.find(querry)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  Product.create(req.body)
    .then((products) => {
      res.json({
        confirmation: "success",
        data: products,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

module.exports = router;
