const list = require('../models/Product')
const getuserrank = require('../models/User')
const alltopup = require('../models/serverstorage')
const stockdb = require('../models/Stock')
const weboption = require('../models/weboption')
const listpass = require('../models/idpassdb');


module.exports = async (req, res) =>{
    const idpasslist = await listpass.find({})
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const getall = await alltopup.find({})
    const stock = await stockdb.find({})
    const weboptions = await weboption.find({})
    const user = await getuserrank.findById(req.session.userId)

    

   // console.log(req.session)
    res.render('index',{
        idpasslist,
        webop : weboptions[0],
        stock,
        getall,
        getProduct,
        listuser,
        user
    })
}