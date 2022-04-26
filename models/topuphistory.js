const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    username: {
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
    link: {
        type: String,
        require: true
    }
})

const BlogPost = mongoose.model('TopupHistory', BlogPostSchema);

module.exports = BlogPost;