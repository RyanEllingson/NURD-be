const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Game model
const Groups = require("../../models/Groups");

router.post("/", (req, res) => {
  console.log(req.body);
  Groups.create(req.body).then(group => {
    res.json(group);
  });
});

router.get("/", (req, res) => {
  Groups.find({
  }).then(groups => {
    res.json(groups);
  });
});

router.get("/type", (req, res) => {
  Groups.find({ gameType: req.body.gameType })
  .then(groups => {
    res.json(groups);
  });
});

module.exports = router;
