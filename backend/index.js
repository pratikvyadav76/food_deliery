const express = require('express')
const { signup, signin, updateCart, getCart, updateProfile, getProfile, updateAddress, getAddress, updatePayment, getPayment } = require('./routes')
const app = express()
const router  = express.Router()
const multer = require('multer')
const cors = require('cors')

const upload = multer({})

const allowedOrigin = 'https://food-deliery-ui.vercel.app';


app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
    credentials: true // If you need to allow credentials (cookies, authorization headers, etc.)
}));


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 4000
require('./routes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', upload.any() ,signup)
app.post('/signin', signin)
app.post('/cart/:id', updateCart)
app.get('/cart/:id', getCart)

app.post('/profile/:id', updateProfile)
app.get('/profile/:id', getProfile)

app.post('/address/:id', updateAddress)
app.get('/address/:id', getAddress)

app.post('/payment/:id', updatePayment)
app.get('/payment/:id', getPayment)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
