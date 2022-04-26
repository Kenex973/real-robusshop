const server = require('../models/serverstorage')

server.create({alltopup: 0},()=>{
    console.log("create")
});
