const server = require('./models/serverstorage')
const weboption = require('./models/weboption')

weboption.create({

    name: 'Chanon bux',
    desc: 'ยินดีต้อนรับสู่ Chanon bux ร้านขายไก่ตันและเติมID-PASS สุดคุ้ม',
    tel: '0984766939'
    
    
},(err, data) => {
    console.log(data,err)
   
})

server.create({alltopup: 0},()=>{
    
})