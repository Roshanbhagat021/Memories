import express from 'express';
import multer from 'multer';
import { storage } from "../configCloudnary/cloudinary.js";

const upload = multer({ storage });
const Router = express.Router();

Router.post('/', upload.single('image'), (req, res) => {
  res.json({ imageUrl: req.file.path });
});

export default Router;
