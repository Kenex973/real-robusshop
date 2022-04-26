const productdb = require('../models/Product')
const getuserrank = require('../models/User')
const weboption = require('../models/weboption')
module.exports = async (req,res) => {
    const id = req.params.id
    const product = await productdb.findById(id)
    const weboptions = await weboption.find({})
    const user1 = await getuserrank.findById(req.session.userId)
    if(user1.rank != "owner"){
        return res.redirect('/')
    }
    res.render('fixproduct',{
        webop : weboptions[0],
        product
    })
}