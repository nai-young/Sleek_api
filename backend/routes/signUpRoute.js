import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('SignUp route')
})

module.exports = router
