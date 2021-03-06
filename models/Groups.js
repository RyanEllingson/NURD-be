const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GroupSchema = new Schema({
  organizer: {
    type: String,
    required: true
  },
  groupTitle: {
    type: String,
    required: true
  },
  gameTitle: {
    type: String,
    required: true
  },
  location: {
      type: String,
      required: true
  },
  gameType: {
    type: String,
    required: true
  },
  minimumAge: {
    type: Number
  },
  requiredGender: {
    type: String
  },
  maxMembers: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  currentMembers: {
    type: Array,
    default: []
  }
});

module.exports = Group = mongoose.model("groups", GroupSchema);
