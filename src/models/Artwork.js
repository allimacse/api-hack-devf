const { Schema, model } = require('mongoose');

const artworkSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, { timestamps: true, versionKey: false });

const Artwork = model('Artwork', artworkSchema);
module.exports = Artwork;
