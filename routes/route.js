const express = require('express');
const Home = require('../controllers/HomeController');
const User = require('../controllers/UserController');
const router = express.Router();

router.get('/',Home.home)

router.post('/login',User.login);

router.post('/register',User.register);


module.exports = router;