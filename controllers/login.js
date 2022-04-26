const weboption = require('../models/weboption')

module.exports = async (req, res) =>{
    const weboptions = await weboption.find({})
    res.render('login',{
        webop : weboptions[0],
        errors:  req.flash('error')
    })
}