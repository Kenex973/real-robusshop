const user = require('../models/User')
const path = require('path')

module.exports = (req,res) => {
    const body = req.body
    if(req.body['g-recaptcha-response'] == ''){
        req.flash('error',"ไม่ใส่cap")
        return res.redirect('/register')
    }else{
        const data = {
            username: req.body.username,
            password: req.body.password,
            point: 0,
            purchasehistory: {},
            rank: "user"
        }
    
    
    
        user.create(data, (err,user) => {
            if(err){
                req.flash('error',"มีบางอย่างผิดพลาด")
                return res.redirect('/register')
            }
            //console.log(user)
            return res.redirect('/login')
        })
    }
    
}