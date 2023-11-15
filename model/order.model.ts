import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderId : {
        type : Number,
        required : true
    },
    menuName : {
        type : String, 
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        required : true
    },
    updatedAt : {
        type : Date,
        required : true
    },
    userId : {
        type : Date,
        required : false
    }
})

const orderModel =  mongoose.model('Order', orderSchema)

export default orderModel