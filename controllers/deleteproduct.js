const productlist = require('../models/Product')


module.exports = async (req,res) => {
    const product  = await productlist.findById(req.params.id)
    productlist.findByIdAndRemove(req.params.id,()=>{
        res.redirect('/admin')
    })
}