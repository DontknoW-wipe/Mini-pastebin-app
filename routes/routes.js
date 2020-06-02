const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/controller');

router.post('/user_copy',controller.user_copy_data);
router.get('/:id',controller.getData);
module.exports = router;
