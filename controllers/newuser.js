const User = require('../models/User')
const path = require('path')
const weboption = require('../models/weboption')

module.exports = (req,res) => {
    const weboptions = weboption.find({})
    res.render('register',{
        webop : weboptions[0]
    })
}