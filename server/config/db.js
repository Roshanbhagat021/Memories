import mongoose from "mongoose";

import "dotenv/config";

async function connection() {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while connecting to DB");
  }
}

export default connection;
