const userdb = require('../models/User')
const list = require('../models/Product')
const getuserrank = require('../models/User')
const gettopup = require('../models/serverstorage')
const weboption = require('../models/weboption')
module.exports = async (req, res) =>{
    const weboptions = await weboption.find({})
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const alltopup = await gettopup.find({})
    const user1 = await getuserrank.findById(req.session.userId)
    const user = await userdb.findById(req.params.id)
    if(user1.rank != "owner"){
        return res.redirect('/')
    }
    res.render('userconfig',{
        user,
        webop : weboptions[0]
    })
}