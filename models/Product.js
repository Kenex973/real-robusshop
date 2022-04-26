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
    price: {
        type: Number,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    stock: {
        type: Array,
        require: true
    }
})


const BlogPost = mongoose.model('Product', BlogPostSchema);

module.exports = BlogPost;