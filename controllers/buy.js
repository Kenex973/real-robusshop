const Product = require('../models/Product')
const userdb = require('../models/User')
const buyhis = require('../models/buyhistory')

module.exports = async (req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const product = await Product.findById({_id: req.params.id})
    const user = await userdb.findById(req.session.userId)
    const currentpoint = user.point
    

    
    const stocks = product.stock
    if(stocks.length > 0) {
        const finalproduct = stocks.pop()
        if (stocks != []) {
            if(currentpoint >= product.price ){
                const finalprice = currentpoint - product.price
                userdb.findByIdAndUpdate({_id: req.session.userId}, {point : finalprice}, (err, result) => {
                    Product.findByIdAndUpdate({_id: req.params.id}, {stock: stocks}, (e, r) => {
                        buyhis.create({name : user.username, amount: product.price, date: new Date(), productname: product.name, id: finalproduct.username, pass:finalproduct.password }, (ee, rr) => {
                            res.redirect('/topup/history')
                        })
                    })
                })
            }else {
                res.redirect('/')
            }
        }else {
            res.redirect('/')
        }
    }else {
        res.redirect('/')
    }
   



   
    

}