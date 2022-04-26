const idpassq = require('../models/idpassq')
const idpassdb = require('../models/idpassdb')
const user = require('../models/User')

module.exports = async (req,res) => {
    
    const thisq = await idpassq.findById(req.params.id)
    const a = await idpassdb.find({name: thisq.product})
    const thisproduct = a[0]
    const thisuser1  = await user.find({username: thisq.user})
    const thisuser = thisuser1[0]
    if(req.params.status == "success"){
        idpassq.findByIdAndUpdate({_id:req.params.id},{status: 'สำเร็จ'},(err,data) => {
            if(err) {
                res.redirect('/idpass')
            }
            res.redirect('/addidpass')
        })
    }
    if(req.params.status == "refund"){
        idpassq.findByIdAndUpdate({_id:req.params.id},{status: 'ดำเนินการไม่สำเร็จ คืนเงินแล้ว'},(err,data) => {
            user.findByIdAndUpdate({_id:thisuser._id},{point: thisuser.point + thisproduct.price},(errs,datas) => {
                if(errs){
                    console.log(errs)
                }else{
                    console.log(datas)
                }
            })

            if(err) {
                res.redirect('/idpass')
            }
            res.redirect('/addidpass')
        })
    }
}