const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: true
    },
    tel: {
        type: String,
        require: true
    }
})

const BlogPost = mongoose.model('weboption', BlogPostSchema);

module.exports = BlogPost;