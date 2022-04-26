const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    }
})

const BlogPost = mongoose.model('idpassdb', BlogPostSchema);

module.exports = BlogPost;