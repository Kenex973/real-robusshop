const user = require('../models/User')

module.exports = (req,res,next) =>{
   

    user.find({_id: req.session.userId}, (err, users) =>{
        if(users.length <= 0){
            console.log('usernotfound')
            console.log(req.session)
            req.session.destroy(()=>{
                res.redirect('/')
            })
        }else{
            console.log('founduser')
        }
        next()
    })

}