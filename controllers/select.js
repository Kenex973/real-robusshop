const list = require('../models/Product')
const getuserrank = require('../models/User')
const alltopup = require('../models/serverstorage')
const stockdb = require('../models/Stock')
const weboption = require('../models/weboption')
const idpassdb = require('../models/idpassdb')

module.exports = async (req, res) =>{
    const getproductid = await idpassdb.findById(req.params.id)
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})
    const getall = await alltopup.find({})
    const stock = await stockdb.find({})
    const weboptions = await weboption.find({})
    const user = await getuserrank.findById(req.session.userId)

    console.log(user.point,getproductid.price)

   if(user.point >= getproductid.price){
    res.render('idpasspage',{
        getproductid,
        webop : weboptions[0],
        stock,
        getall,
        getProduct,
        listuser,
        user
    })
   }else{
       res.redirect('/idpass')
   }
   
   // console.log(req.session)
    
}