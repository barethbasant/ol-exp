const express = require("express");

const router = express.Router();

const feedController = require("../constrollers/feed");

router.get("/post", feedController.getPost);

module.exports = router;
