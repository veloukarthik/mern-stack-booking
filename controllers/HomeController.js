const express = require('express');


const home = (req,res) =>{
        res.json({'message':'I am homecontroller home method'});
}


module.exports = {
    home
}