const express = require('express')
const ejs = require('ejs')
const app = express()
const mongoose = require('mongoose')
const Esession = require('express-session')
const flash = require('connect-flash')

//render page
const homepage = require('./controllers/home')
const register = require('./controllers/register')
const tablepage = require('./controllers/tables')
const login = require('./controllers/login')
const saveuser = require('./controllers/saveuser')
const getuser = require('./controllers/getuser')
const logout = require('./controllers/logout')
const fix = require('./controllers/productfix')
const topuppage = require('./controllers/topuppage')
const topuphistory = require('./controllers/topuphistory')
const stockpage = require('./controllers/stockpage')
const addstock = require('./controllers/addstock')
const deletestock = require('./controllers/deletestock')
const configpage = require('./controllers/configpage')
const topup = require('./controllers/topup')
const add = require('./controllers/addproduct')
const checklogin = require('./middleware/checkloginmiddleware')
const checkalreadylogin = require('./middleware/checkalreadylogin')
const fixproduct = require('./controllers/savenewproduct')
const deletproduct = require('./controllers/deleteproduct')
const buy = require('./controllers/buy')
const saveconfig = require('./controllers/saveoption')
const adminhis = require('./controllers/adminbuyhis')
const userpage = require('./controllers/userpage')
const userconfig = require('./controllers/userconfig')
const configuser = require('./controllers/configuser')
const deleteuser = require('./controllers/deleteuser')
const idpasspage = require('./controllers/idpasspage')
const addidpasspage = require('./controllers/addpasspage')
const addidpass = require('./controllers/addidpass')
const deleteidpass = require('./controllers/deleteidpass')
const select = require('./controllers/select')
const  buyidpass = require('./controllers/buyidpass')
const configidpass = require('./controllers/configidpass')
const searchq = require('./controllers/findidpass')

const a = require('./middleware/alreadydelete')
mongoose.connect('mongodb+srv://Chanonx:1234@cluster0.5vcn4.mongodb.net/chanonx', { useNewUrlParser: true });

global.loggedIn = null;
global.username = null;

app.use(Esession({
    secret: 'Chanonbux'
}))

app.use(flash());



// check login global
app.use('*',(req ,res ,next) => {

    loggedIn = req.session.userId;
    global.username = req.session.username
    
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const xXssProtection = require("x-xss-protection");
 
// Set "X-XSS-Protection: 0"
app.use(xXssProtection());

app.get('/', homepage)
app.get('/register',checkalreadylogin, register)
app.get('/admin',checklogin,tablepage)
app.get('/login',checkalreadylogin, login)
app.get('/user/logout',checklogin,logout)
app.get('/products/:id',checklogin,fix)
app.get('/topup',checklogin,topuppage)
app.get('/config',checklogin,configpage)
app.get('/admin/his',checklogin,adminhis)
app.get('/config/idpass/:status/:id',checklogin,configidpass)

app.post('/add/idpass',checklogin,addidpass)
app.post('/user/fix/:id',checklogin,configuser)
app.post('/add/stock/:id',checklogin,addstock)
app.post('/user/topup',checklogin,topup)
app.post('/products/add',checklogin,add)
app.post('/user/register',saveuser)
app.post('/config/web',checklogin,saveconfig)
app.post('/user/login',getuser)
app.post('/product/fix/:id',checklogin,fixproduct)
app.get('/delete/:id',checklogin,deletproduct)
app.get('/topup/history',checklogin,topuphistory)
app.get('/delete/:id/:index',checklogin,deletestock)
app.get('/buy/:id',checklogin,buy)
app.get('/listuser',checklogin,userpage)
app.get('/user/delete/:id',checklogin,deleteuser)
app.get('/idpass',checklogin,idpasspage)
app.get('/deleteidpass/:id',checklogin,deleteidpass)
app.get('/select/idpass/:id',checklogin,select)
app.post('/buy/idpass/:id',checklogin,buyidpass)
app.post('/search/idpass',checklogin,searchq)


app.post('/buy/idpass',checklogin, async (req,res) =>{
    console.log(req.body)
    res.redirect('/')
})
app.get('/addidpass',checklogin, addidpasspage)


app.get('/user/config/:id',checklogin,userconfig)

app.get('/add/:id',checklogin,stockpage)

app.listen(80,()=>{
    console.log('listening on port 8000')
})