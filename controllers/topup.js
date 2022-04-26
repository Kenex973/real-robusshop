//how to use api
// 
const list = require('../models/Product')
const getuserrank = require('../models/User')

const axios = require('axios')
const cheerio = require('cheerio')
const userdb = require('../models/User')
const alltopups = require('../models/serverstorage')
const topuphistory = require('../models/topuphistory')
const weboption = require('../models/weboption')
const result = {
  res: ""
}
const lic = 'dTzEX0O_TmJYyB66MOdZR_v5Uj42u7Mu_GGzEzY6UHA'



module.exports = async (req, res) => {
  const atel = await weboption.find({})
  const tel = atel[0].tel
  const user = await getuserrank.findById(req.session.userId)
  const oldall = await alltopups.find({})
  const link = req.body.link
  const link_req = link.split('https://gift.truemoney.com/campaign/?v=')
  //console.log(link)
  const url1 = `http://localhost:4433?link=${link_req[1]}&phone=${tel}`


  var twconfig = {
    method: 'GET',
    url: url1,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  axios(twconfig)
    .then(function (response) {
      console.log(response.data.code)
      if (response.data.code == 200) {
        console.log('Success')
        const newpoint = user.point + parseInt(response.data.amount)
        userdb.findByIdAndUpdate({ _id: req.session.userId }, { point: newpoint }, (err, data) => {
          //alltopups.findByIdAndUpdate({ _id: '625bd062b324ed7b927aa1ee' }, { alltopup: newold }, (err, data) => {
            topuphistory.create({username: user.username, amount: parseInt(response.data.amount), date: new Date(), link: response.data.link}, (errs, datas) => {
              console.log('topup')
              console.log(errs, datas)
              req.flash('topup', 'yes')
              req.flash('amount', response.data.amount)
              res.redirect('/topup')
            })

          //})
        })
        

        //console.log(newold)
        
      } else {
        //console.log('faild')
        req.flash('topup', 'no')
        req.flash('amount', 0)
        res.redirect('/topup')
      }

      //console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
     console.error(error);
     res.redirect('/topup')
    });
}