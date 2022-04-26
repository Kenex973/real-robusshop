const list = require('../models/topuphistory')
const buyhistory = require('../models/buyhistory')
const getuserrank = require('../models/User')
const weboption = require('../models/weboption')

module.exports = async (req, res) =>{
    const weboptions = await weboption.find({})
    const user = await getuserrank.findById(req.session.userId)
    const buyhis = await buyhistory.find({})
    const listhis = await list.find({})
   // console.log(listhis)
   if(user.rank != "owner"){
    return res.redirect('/')
}
    res.render('alltopuphistory',{
        webop : weboptions[0],
        buyhis,
        user,
        listhis
    })
}