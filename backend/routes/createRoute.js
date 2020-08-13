import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Create route')
})

export default router
