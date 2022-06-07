const mongoose = require('mongoose');

const allData = new mongoose.Schema({
    name: String,
    details: String,
    image: String,
    price: Number,
    ratings: Number
})


module.exports = mongoose.model('Products', allData)