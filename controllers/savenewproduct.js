const productdb = require('../models/Product')

module.exports = async (req,res) => {
    const id = req.params.id
    const newdata = req.body
    productdb.findByIdAndUpdate({_id: id}, newdata, (err, data) => {
        res.redirect('/admin')
    })
}