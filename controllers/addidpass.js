const list = require('../models/idpassdb')
const path = require('path')

module.exports = async (req,res) => {
    const body = req.body
    //console.log(req.body)
    list.create(req.body,(err,result) => {
        if(err){
            res.redirect('/')
        }

        res.redirect('/addidpass')
    })

}