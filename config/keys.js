module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/nurddb",
  secretOrKey: "secret"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI);
