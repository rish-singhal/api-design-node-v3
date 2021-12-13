import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  next() // argument will be treated as error
}

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

app.route('/api').get((req, res) => {
  res.send('GET request to the homepage')
})

// first matching ~kind of routing in router order
// use next() to go to the next controller which matches

// can also use middlewares as [log, log, log, ...] in serial order
app.get('/data', log, (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

// app.put()

// app.delete()

export const start = () => {
  app.listen(3000, () => {
    console.log('Sever listening on port 3000')
  })
}
