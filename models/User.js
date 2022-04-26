const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BlogPostSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    rank: {
        type: String,
        require: true
    },
    point: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

BlogPostSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err,hash)=>{
        user.password = hash;
        next()
    })
})

const BlogPost = mongoose.model('Users', BlogPostSchema);

module.exports = BlogPost;