const express = require('express');
const User = require('../models/User');
const Expense = require('../models/Expense');



const getAllExpense = async (req, res) => {

    const {user_id} = req.body;

    if(!user_id)
    {
        return res.json({'status':false,'message':'Please send your user ID'})
    }

    let data = await Expense.find({userid:user_id});

    if(data.length > 0)
    {
        return res.json({'status':true,'message':'Retrieved expenses data','data':data})
    }

    return res.json({'status':false,'message':'No expenses data','data':data})
}


const getExpense = async (req, res) => {
    
    const {user_id,exp_id} = req.body;

    if(!user_id || !exp_id)
    {
        return res.json({'status':false,'message':'Please send your user ID or Expense ID'})
    }

    let data = await Expense.find({userid:user_id,_id:exp_id});

    if(data.length > 0)
    {
        return res.json({'status':true,'message':'Retrieved expenses data','data':data})
    }

    return res.json({'status':false,'message':'No expenses data','data':data})
}


const storeExpense = async (req, res) => {
    return res.json({ 'message': 'I am store expenses' })
}


const updateExpense = async (req, res) => {
    return res.json({ 'message': 'I am update expenses' })
}


const deleteExpense = async (req, res) => {
    return res.json({ 'message': 'I am delete expenses' })
}





module.exports = {
    getAllExpense,
    getExpense,
    storeExpense,
    updateExpense,
    deleteExpense
}