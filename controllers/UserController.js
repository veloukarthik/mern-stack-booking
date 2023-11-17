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


const register =  async (req,res) =>{
    
    const {name,email,mobile,password,gender,token} = req.body;

    const check = await User.find({email:email,mobile:mobile});

    if(check.length > 0)
    {
        return  res.json({'status':false,'message':'Users already exists',});
    }

    let user = await User.create({name:name,email:email,mobile:mobile,password:password,token:token,gender:gender})

    if(user)
    {
        return res.json({'status':true,'message':"You account is registered successfully"});
    }
}

module.exports = {
    login,
    register
}