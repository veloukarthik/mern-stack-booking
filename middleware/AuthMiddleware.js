
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Auth = async (req, res, next) => {


    try {
        const token = req.headers.authorization.split(" ");

        const secret = 'expense-login';

        const decoded = jwt.verify(token[1], secret);

        if (decoded) {
            const id = new mongoose.Types.ObjectId(decoded.id);

            const user = await User.find({_id:id});

            if(user.length > 0)
            {
                return next();
            }
            return res.status(401).json({'status':false,'message':'Unauthorized access'});
        }



    }
    catch (err) {
        return res.status(401).json({'status':false,'error':err})
    }



}

module.exports = Auth;