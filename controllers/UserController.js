const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = (req,res) =>{

    const {email,password} = req.body;

    const saltRounds = 10;

    let encryptPassword = bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        return hash;
    });
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

    res.json({"email":email,"password":token});
}


const register = (req,res) =>{
    
    const {email,password} = req.body;



    res.json({'message':'I am register API'});
}

module.exports = {
    login,
    register
}