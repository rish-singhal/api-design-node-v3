import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send('GET /item')
  })
  .post((req, res) => {
    res.send('POST /item')
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send('GET /item/', req.params.id)
  })
  .put((req, res) => {
    res.send('PUT /item/', req.params.id)
  })
  .delete((req, res) => {
    res.send('DELETE /item/', req.params.id)
  })

export default router
