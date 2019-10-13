const express = require('express');
const users = require('../controllers/user');

const router = express.Router();

router.post('/', users.gitHubList);

module.exports = router;
