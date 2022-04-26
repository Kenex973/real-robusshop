const weboption = require('../models/weboption')


module.exports = (req, res) =>{
    const weboptions = weboption.find({})
    res.render('register',{
        errors: req.flash('error'),
        webop: weboptions
        
})
}
