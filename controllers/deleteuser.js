const userdb = require('../models/User')


module.exports = async (req,res) => {
    //const product  = await productlist.findById(req.params.id)
    userdb.findByIdAndRemove({_id: req.params.id}, {}, (err, Stock) => {
        if(err) {
            res.redirect('/')
        }
        res.redirect(`/userlist`)
    })
    
}