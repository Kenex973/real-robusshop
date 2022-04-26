const weboption = require('../models/weboption');

module.exports = async (req,res) => {
    const list = await weboption.find({})
    const list1 = list[0]
    weboption.findByIdAndUpdate({_id: list1._id},req.body,()=>{
        res.redirect('/config')
    })
}