import express from 'express'
import mongoose from 'mongoose'
import db from './db'

// connection to database
const mongoUrl = db.MONGODB_URL
mongoose.connect(mongoUrl, {

}).catch(err => console.error(err.reason))

const app = express.Router()
app.use('/users', usersRoute)
app.use('/createproject', createProjectRoute)
app.use('/profile', profileRoute)


app.get('/projects', (req, res) => {
  res.send('Projects')
})
app.get('/projects/:id', (req, res) => {
  const projectId = req.params.id
  res.send(projectId)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}`))
