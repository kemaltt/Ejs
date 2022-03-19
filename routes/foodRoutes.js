const router = require('express').Router();
const { getAllFoods } = require('../controller/foodController');

router.get('/', getAllFoods);

module.exports = router;