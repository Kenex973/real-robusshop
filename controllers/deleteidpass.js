const productlist = require('../models/idpassdb')


module.exports = async (req,res) => {
    console.log(req.params.id)


    productlist.findByIdAndRemove(req.params.id,()=>{
        res.redirect('/addidpass')
    })
}