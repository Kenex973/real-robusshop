const idpassq = require('../models/idpassq')

const list = require('../models/Product')
const getuserrank = require('../models/User')
const weboption = require('../models/weboption')

module.exports = async (req, res) => {
    const getProduct = await list.find({})
    const listuser = await getuserrank.find({})


    if (req.body.user == '') {
        const q = await idpassq.find({ product: req.body.product })

        console.log(q, req.body)
        const user1 = await getuserrank.findById(req.session.userId)
        const user = await getuserrank.findById(req.session.userId)
        const weboptions = await weboption.find({})
        if (user1.rank != "owner") {
            return res.redirect('/')
        }
        res.render('finalresidpass', {
            q,
            webop: weboptions[0],
            user,
            listuser,
            getProduct
        })
    } else if (req.body.product == '') {
        const q = await idpassq.find({ user: req.body.user })

        console.log(q, req.body)
        const user1 = await getuserrank.findById(req.session.userId)
        const user = await getuserrank.findById(req.session.userId)
        const weboptions = await weboption.find({})
        if (user1.rank != "owner") {
            return res.redirect('/')
        }
        res.render('finalresidpass', {
            q,
            webop: weboptions[0],
            user,
            listuser,
            getProduct
        })
    } else {
        const q = await idpassq.find(req.body)

        console.log(q, req.body)
        const user1 = await getuserrank.findById(req.session.userId)
        const user = await getuserrank.findById(req.session.userId)
        const weboptions = await weboption.find({})
        if (user1.rank != "owner") {
            return res.redirect('/')
        }
        res.render('finalresidpass', {
            q,
            webop: weboptions[0],
            user,
            listuser,
            getProduct
        })
    }


}