import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
    type: String,
        required: true, //поле обязательно для заполнения
    },
    quantity: {
        type: String,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now ,// текущее время по умолчанию
        required: true,
    }

})

const Product = mongoose.model('Product', productSchema)

export default Product