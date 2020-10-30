const express = require('express');
const { ArtworkController } = require('../controllers/index.js');

const router = express.Router();
// CREATE
router.post('/artworks', ArtworkController.create);
// GET
router.get('/artworks', ArtworkController.getRandom);

module.exports = router;
