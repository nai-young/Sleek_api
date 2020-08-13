import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Projects route')
})

module.exports = router
