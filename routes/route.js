const express = require('express');
const Home = require('../controllers/HomeController');
const User = require('../controllers/UserController');
const Auth = require('../middleware/AuthMiddleware');
const router = express.Router();

router.get('/',Auth,Home.home)

router.post('/login',Auth,User.login);

router.post('/register',Auth,User.register);


module.exports = router;