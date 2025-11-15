const { Schema } = require("mongoose");
import {model, models} from 'mongoose';

const OrderSchema = new Schema({
    products: Object,
    name: String,
    address: String,
    city: String,
    email: String,
    paid: {type:Number, default:0},
}, {timestamps: true})

const Order = models?.Order || model('Order', OrderSchema);
export default Order;