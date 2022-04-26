const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    alltopup: {
        type: Number,
        require: true
    }
})

const BlogPost = mongoose.model('ServerStorage', BlogPostSchema);

module.exports = BlogPost;