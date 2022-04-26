const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    }
})


const BlogPost = mongoose.model('Stock', BlogPostSchema);

module.exports = BlogPost;