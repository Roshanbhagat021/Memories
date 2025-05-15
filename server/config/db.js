import mongoose from "mongoose";

import "dotenv/config";
import e from "express";

async function connection() {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error,"Error while connecting to DB");
  }
}

export default connection;
