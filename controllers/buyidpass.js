const Product = require('../models/idpassdb')
const q = require('../models/idpassq')
const userdb = require('../models/User')
const buyhis = require('../models/buyhistory')

module.exports = async (req,res) => {
    const product = await Product.findById({_id: req.params.id})
    const user = await userdb.findById(req.session.userId)
    const currentpoint = user.point
    
    if(currentpoint < product.price) {
        res.redirect('/idpass')
    }
    if(req.body['g-recaptcha-response'] != ''){
        const userdata = req.body
    console.log(userdata)
    

    const newpoint = currentpoint - product.price

    userdb.findByIdAndUpdate({_id: req.session.userId} ,{point :newpoint},(err,data) => {
        if(err) {
            console.log(err)
        }
        console.log(data)
        const savedate = {
            id: req.body.username,
            pass: req.body.password,
            status: "รอดำเนินการ",
            user: user.username,
            product: product.name
        }
        q.create(savedate,(err, result) => {
            if(err) {
                console.log(err)
            }
            res.redirect('/idpass')
        })
    })

    
    }
    
}