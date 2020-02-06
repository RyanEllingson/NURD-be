const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Groups = require("../../models/Groups");

// Create a new group
router.post("/", (req, res) => {
  console.log(req.body);
  Groups.create(req.body).then(group => {
    res.json(group);
  });
});

// Retrieve all groups
router.get("/", (req, res) => {
  Groups.find({
  }).then(groups => {
    res.json(groups);
  });
});

// Retrieve all groups with specified game type
router.post("/type", (req, res) => {
  Groups.find({ gameType: req.body.gameType })
  .then(groups => {
    res.json(groups);
  });
});

// Add a member to a group
router.put("/add-member/:id", (req, res) => {
  Groups.find({ _id: mongojs.ObjectId(req.params.id) }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      const members = found[0].currentMembers;
      members.push(req.body.name);
      Groups.updateOne(
        {
          _id: mongojs.ObjectId(req.params.id)
        },
        {
          $set: {
            currentMembers: members
          }
        },
        (error, edited) => {
          if (error) {
            console.log(error);
          } else {
            res.send(edited);
          }
        }
      );
    }
  });
});

router.delete("/:id", (req, res) => {
  Groups.deleteOne({ _id: mongojs.ObjectId(req.params.id) }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

module.exports = router;
