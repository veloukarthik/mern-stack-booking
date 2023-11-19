
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const Auth = (req,res,next) =>{

    // return  res.json(req.headers);
    // return res.json({'message':'Unauthorized Access'});
    return next();

}

module.exports = Auth;