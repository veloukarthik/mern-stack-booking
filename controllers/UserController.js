const express = require('express');


const login = (req,res) =>{
    res.json('I am login API');
}


const register = (req,res) =>{
    res.json({'message':'I am register API'});
}

module.exports = {
    login,
    register
}