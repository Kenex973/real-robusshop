const bcrypt = require('bcrypt');
const user = require('../models/User')

module.exports = (req,res) => {
    const { username , password } = req.body

    user.findOne({username: username}, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err,same) => {
                if (same) {
                    req.session.userId = user._id
                    req.session.username = user.username
                    res.redirect('/')
                }else {
                    req.flash('error',"error")
                    res.redirect('/login')
                    
                }
            })
        }else {
            req.flash('error',"error")
            res.redirect('/login')
        }
    })
}