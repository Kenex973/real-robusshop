const user = require('../models/User')

module.exports = (req,res,next) => {
    user.findById(req.session.userId, (err,user) =>{
        if (err || !user) {
            return res.redirect('/login')
        }
        next()
    })
}