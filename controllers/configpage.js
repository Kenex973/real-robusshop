const list = require('../models/Product')
const getuserrank = require('../models/User')
const alltopup = require('../models/serverstorage')
const stockdb = require('../models/Stock')
const weboption = require('../models/weboption')


module.exports = async (req, res) =>{
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const weboptions = await weboption.find({})
    const user1 = await getuserrank.find({_id: req.session.userId})
    //first time create data
    if(weboptions.length == 0){
        weboption.create({

            name: 'Chanon bux',
            desc: 'ยินดีต้อนรับสู่ Chanon bux ร้านขายไก่ตันและเติมID-PASS สุดคุ้ม',
            tel: '0984766939'

        },()=>{
            res.redirect('/config')
        })
    }

    const user = await getuserrank.findById(req.session.userId)
   // console.log(req.session)
    res.render('configweb',{
        webop : weboptions[0],
        getProduct,
        listuser,
        user
    })
}