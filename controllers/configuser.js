const userdb = require('../models/User')

module.exports = async (req,res) => {
    const id = req.params.id
    const newdata = req.body
    userdb.findByIdAndUpdate({_id: id}, newdata, (err, data) => {
        console.log(err,data)
        res.redirect('/listuser')
    })
}