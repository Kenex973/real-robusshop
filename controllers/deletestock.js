const productlist = require('../models/Product')


module.exports = async (req,res) => {
    const product  = await productlist.findById(req.params.id)
    console.log(req.params.id)
    const index = req.params.index
    const stocks = product.stock
    stocks.splice(index,1)
    productlist.findByIdAndUpdate({_id: req.params.id}, {stock : stocks}, (err, Stock) => {
        if(err) {
            res.redirect('/admin')
        }
        res.redirect(`/add/${req.params.id}`)
    })
    
}