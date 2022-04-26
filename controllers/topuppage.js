const list = require('../models/Product')
const getuserrank = require('../models/User')
const gettopup = require('../models/serverstorage')
const weboption = require('../models/weboption')
module.exports = async (req, res) =>{
    const weboptions = await weboption.find({})
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const alltopup = await gettopup.find({})
    const user = await getuserrank.findById(req.session.userId)
    res.render('topup',{
        topups :req.flash('topup'),
        webop : weboptions[0],
        amounts :req.flash('amount'),
        getProduct,
        listuser,
        user
    })
}