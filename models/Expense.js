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
            require:true,
            index:true
        },
        reason: {
            type: String,
            require:true,
            index:true
        },
        paymentmethod: {
            type: String,
            require:true,
            index:true
        },
        type:{
            type:String,
            require:true,
            index:true
        },
        amount: {
            type: Number,
            require:true,
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