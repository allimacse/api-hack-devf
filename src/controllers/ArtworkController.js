const { ArtworkService } = require('../services/index.js');

module.exports = {
  // CREATE
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const artwork = await ArtworkService.create(body);
      res.status(201).json({ message: 'artwork created', payload: artwork });
    } catch (error) {
      next(error.message);
    }
  },
  getRandom: async (req, res, next) => {
    try {
      const artwork = await ArtworkService.getRandom();
      res.json({ payload: artwork });
    } catch (error) {
      next(error.message);
    }
  },
};
