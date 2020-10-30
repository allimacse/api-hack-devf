const express = require('express');
const UserRouter = require('./UserRouter.js');
const ArtworkRouter = require('./ArtworkRouter.js');

const router = express.Router();

router.use(UserRouter);
router.use(ArtworkRouter);

module.exports = router;
