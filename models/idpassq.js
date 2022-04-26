const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    product: {
        type: String,
        require: true
    }
})

const BlogPost = mongoose.model('idpassq', BlogPostSchema);

module.exports = BlogPost;