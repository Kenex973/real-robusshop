const list = require('../models/Product')
const path = require('path')

module.exports = async (req,res) => {
    const body = req.body
    //console.log(req.body)
    const getProduct = await list.findById(req.params.id)
    const oldstock = getProduct.stock
    oldstock.push(req.body)
    list.findByIdAndUpdate({_id: req.params.id}, {stock : oldstock}, (err, productss) => {
        if(err){
            console.log(err)
        }
        res.redirect(`/add/${req.params.id}`)
    })
}