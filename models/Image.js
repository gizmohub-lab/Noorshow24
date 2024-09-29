// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imagePaths: [{ type: String, required: true }] // Array of strings to store image paths
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
