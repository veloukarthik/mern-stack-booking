const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ExpenseSchema = new Schema(
    {
        userid: {
            type: Schema.Types.ObjectId, ref:'users',
            require:true,
            index:true
        },
        expense: {
            type: String,
            require:[true,'Please enter the expense details'],
            index:true
        },
        reason: {
            type: String,
            require:[true,'Please enter the reason'],
            index:true
        },
        paymentmethod: {
            type: String,
            require:[true, 'Please enter the payment method'],
            index:true
        },
        type:{
            type:String,
            require:[true,'Please enter the payment type'],
            index:true
        },
        amount: {
            type: Number,
            require:[true,'Please enter the amount'],
            index:true
        },
        paid_date:{
            type:Date,
            default:Date.now()
        }
        
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('expenses',ExpenseSchema);