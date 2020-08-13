const clientsRoute = require('../routes/clientsRoute')
const createRoute = require('../routes/createRoute')
const profileRoute = require('../routes/profileRoute')
const signInRoute = require('../routes/signInRoute')
const homeRoute = require('../routes/homeRoute')
const adminRoute = require('../routes/adminRoute')
const projectsRoute = require('../routes/projectsRoute')
const signUpRoute = require('../routes/signUpRoute')

const db = require('./db')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
  origin: 'http://localhost:5001'
}
app.use(cors(corsOptions))

// parse the request and create the req.body object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// handlers for routes
app.use('/', homeRoute)
app.use('/projects', projectsRoute)
app.use('/clients', clientsRoute)
app.use('/create', createRoute)
app.use('/profile', profileRoute)
app.use('/admin', adminRoute)
app.use('/signin', signInRoute)
app.use('/signup', signUpRoute)

// connection to database
const mongoUrl = db.MONGODB_URL
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err.reason))

// define routes
app.get('/', (req, res) => {
  res.send('Home')
})

// connection to server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}`))
