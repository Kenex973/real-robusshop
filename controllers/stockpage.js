const list = require('../models/Product')
const getuserrank = require('../models/User')
const stockdb = require('../models/Stock')
const weboption = require('../models/weboption')
module.exports = async (req, res) =>{
    const getProduct = await list.findById(req.params.id)
    const listuser = await getuserrank.find({})
    const weboptions = await weboption.find({})
    //console.log(getProduct.code)
    const user1 = await getuserrank.findById(req.session.userId)
    const user = await getuserrank.findById(req.session.userId)
    if(user1.rank != "owner"){
        return res.redirect('/')
    }
    res.render('addstock',{
        cardid: req.params.id,
        webop : weboptions[0],
        user,
        listuser,
        getProduct
    })
}