const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateGroupInput = require("../../validation/group");

// Load group model
const Groups = require("../../models/Groups");

module.exports = {
  createGroupApi: async function(req, res) {
    // Form validation
    const { errors, isValid } = validateGroupInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const group = await Groups.create(req.body);
    res.json(group);
  },
  getGroupsApi: async function(req, res) {
    const groups = await Groups.find({});
    res.json(groups);
  },
  getGroupsByTypeApi: async function(req, res) {
    const groups = await Groups.find({ gameType: req.body.gameType });
    res.json(groups);
  },
  addMemberApi: function(req, res) {
    Groups.find({ _id: mongojs.ObjectId(req.params.id) }, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        const members = found[0].currentMembers;
        members.push(
          {
            id: req.body.id,
            name: req.body.name
          });
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
    })
  },
  deleteGroupApi: function(req, res) {
    Groups.deleteOne({ _id: mongojs.ObjectId(req.params.id) }, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  },
  api: function(router) {
    // Create a new group
    router.post("/api/groups", this.createGroupApi);

    // Retrieve all groups
    router.get("/api/groups", this.getGroupsApi);

    // Retrieve all groups with specified game type
    router.post("/api/groups/type", this.getGroupsByTypeApi);

    // Add a member to a group
    router.put("/api/groups/add-member/:id", this.addMemberApi);

    router.delete("/api/groups/:id", this.deleteGroupApi);
  }
};











