const list = require('../models/Product')
const getuserrank = require('../models/User')
const weboption = require('../models/weboption')
const listpass = require('../models/idpassdb')
const idpassq = require('../models/idpassq')
module.exports = async (req, res) =>{
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const idpasslist = await listpass.find({})
    const q = await idpassq.find({})
    const user1 = await getuserrank.findById(req.session.userId)
    const user = await getuserrank.findById(req.session.userId)
    const weboptions = await weboption.find({})
    if(user1.rank != "owner"){
        return res.redirect('/')
    }
    res.render('addidpass',{
        q,
        idpasslist,
        webop: weboptions[0],
        user,
        listuser,
        getProduct
    })
}