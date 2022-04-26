const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    productname: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    }
})

const BlogPost = mongoose.model('BuyHistory', BlogPostSchema);

module.exports = BlogPost;