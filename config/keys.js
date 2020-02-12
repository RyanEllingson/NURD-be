module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/nurddb",
  secretOrKey: process.env.SECRET_KEY,
  videoApiKey: process.env.VIDEO_APIKEY || "6e8c7cd85d2a38d0c9484d9a593046a7"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI);
