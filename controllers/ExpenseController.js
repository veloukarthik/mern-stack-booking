const express = require('express');
const User = require('../models/User');
const Expense = require('../models/Expense');
const mongoose = require('mongoose');


const getAllExpense = async (req, res) => {

    const { user_id } = req.body;

    if (!user_id) {
        return res.json({ 'status': false, 'message': 'Please send your user ID' })
    }

    let data = await Expense.find({ userid: user_id });

    if (data.length > 0) {
        return res.json({ 'status': true, 'message': 'Retrieved expenses data', 'data': data })
    }

    return res.json({ 'status': false, 'message': 'No expenses data', 'data': data })
}


const getExpense = async (req, res) => {

    const { user_id, exp_id } = req.body;

    if (!user_id || !exp_id) {
        return res.json({ 'status': false, 'message': 'Please send your user ID or Expense ID' })
    }

    let data = await Expense.find({ userid: user_id, _id: exp_id });

    if (data.length > 0) {
        return res.json({ 'status': true, 'message': 'Retrieved expenses data', 'data': data })
    }

    return res.json({ 'status': false, 'message': 'No expenses data', 'data': data })
}


const storeExpense = async (req, res) => {

    const { user_id, expense, reason, paymentmethod, type, amount, paid_date } = req.body;

    const userid = new mongoose.Types.ObjectId(user_id);

    const store = await Expense.create({ userid: userid, expense, reason, paymentmethod, type, amount });

    if (store) {
        return res.json({ 'status': true, 'message': 'Expenses data inserted successfully', 'data': store }).exec;
    }

    return res.json({ 'status': false, 'message': 'No expenses data inserted' })

}


const updateExpense = async (req, res) => {
    const { exp_id, user_id, expense, reason, paymentmethod, type, amount, paid_date } = req.body;

    const userid = new mongoose.Types.ObjectId(user_id);

    const expid = new mongoose.Types.ObjectId(exp_id);

    const check = await Expense.find({ userid: userid, _id: expid })

    if (check.length > 0) {
        const store = await Expense.findOneAndUpdate({_id:expid},{expense, reason, paymentmethod, type, amount },{new:true});

        if (store) {
            return res.json({ 'status': true, 'message': 'Expenses data updated successfully', 'data': store }).exec;
        }

        return res.json({ 'status': false, 'message': 'No expenses data updated' })
    }

    return res.json({ 'status': false, 'message': 'No expenses data found', 'data': check })


}


const deleteExpense = async (req, res) => {
    
    const { exp_id, user_id } = req.body;

    const userid = new mongoose.Types.ObjectId(user_id);

    const expid = new mongoose.Types.ObjectId(exp_id);

    const check = await Expense.find({ userid: userid, _id: expid })

    if (check.length > 0) {
        const destroy = await Expense.findOneAndDelete({_id:expid},{new:true});

        if (destroy) {
            return res.json({ 'status': true, 'message': 'Expenses data deleted successfully' }).exec;
        }

        return res.json({ 'status': false, 'message': 'No expenses data deleted' })
    }

    return res.json({ 'status': false, 'message': 'No expenses data found' })
}





module.exports = {
    getAllExpense,
    getExpense,
    storeExpense,
    updateExpense,
    deleteExpense
}