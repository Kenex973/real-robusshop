const product = require('../models/Product')
const path = require('path')

module.exports = (req,res) => {
    const body = req.body
    const data = {
        name: req.body.name,
        desc: req.body.desc,
        code: req.body.code,
        price: req.body.price,
        img: req.body.img,
        stock : []
    }


    product.create(data, (err,product) => {
        if(err){
            console.log(err)
            req.flash('error',"มีบางอย่างผิดพลาด")
            return res.redirect('/admin')
        }
        //console.log(user)
        return res.redirect('/admin')
    })
}