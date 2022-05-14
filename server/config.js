const mongoose = require("mongoose");

const connectToMongoAtlas = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Atlas connected: ${connect.connection.host}`.blue);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1); // exit the process with a failure
  }
};

module.exports = { connectToMongoAtlas };
