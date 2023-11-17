const express = require('express');
const Home = require('../controllers/HomeController');
const User = require('../controllers/UserController');
const router = express.Router();

router.get('/',Home.home)

router.get('/login',User.login);

router.get('/register',User.register);


module.exports = router;