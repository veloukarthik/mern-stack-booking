const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ExpenseSchema = new Schema(
    {
        userid: {
            type: Schema.Types.ObjectId, ref:'users'
        },
        expense: {
            type: String,
        },
        reason: {
            type: String,
        },
        paymentmethod: {
            type: String
        },
        type:{
            type:String
        },
        amount: {
            type: Number
        },
        paid_date:{
            type:Date
        }
        
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('expenses',ExpenseSchema);