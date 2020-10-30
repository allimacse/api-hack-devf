const { Artwork } = require('../models/index.js');

module.exports = {
  create: (body) => new Artwork(body).save(),
  getRandom: () => Artwork.findOne(),
};
