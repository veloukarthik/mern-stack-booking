const express = require('express');
const User = require('../models/User');
const Expense = require('../models/Expense');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const getToken = (req) =>{
    const token = req.headers.authorization.split(" ");

    const secret = 'expense-login';

    const decoded = jwt.verify(token[1], secret);

    return decoded.id;
}

const getAllExpense = async (req, res) => {

    let user_id = getToken(req);

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

    const { exp_id } = req.body;

    let user_id = getToken(req);

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

    const {  expense, reason, paymentmethod, type, amount, paid_date } = req.body;

    let user_id = getToken(req);

    const store = await Expense.create({ userid: user_id, expense, reason, paymentmethod, type, amount });

    if (store) {
        return res.json({ 'status': true, 'message': 'Expenses data inserted successfully', 'data': store }).exec;
    }

    return res.json({ 'status': false, 'message': 'No expenses data inserted' })

}


const updateExpense = async (req, res) => {
    const { exp_id, expense, reason, paymentmethod, type, amount, paid_date } = req.body;

    let user_id = getToken(req);

    const expid = new mongoose.Types.ObjectId(exp_id);

    const check = await Expense.find({ userid: user_id, _id: expid })

    if (check.length > 0) {
        const store = await Expense.findOneAndUpdate({ _id: expid }, { expense, reason, paymentmethod, type, amount }, { new: true });

        if (store) {
            return res.json({ 'status': true, 'message': 'Expenses data updated successfully', 'data': store }).exec;
        }

        return res.json({ 'status': false, 'message': 'No expenses data updated' })
    }

    return res.json({ 'status': false, 'message': 'No expenses data found', 'data': check })


}


const deleteExpense = async (req, res) => {

    const { exp_id } = req.body;

    let user_id = getToken(req);

    const expid = new mongoose.Types.ObjectId(exp_id);

    const check = await Expense.find({ userid: user_id, _id: expid })

    if (check.length > 0) {
        const destroy = await Expense.findOneAndDelete({ _id: expid }, { new: true });

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