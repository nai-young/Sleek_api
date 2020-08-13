import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('SignIn route')
})

module.exports = router
