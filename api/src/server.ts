import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import general from './routes/general'
import * as database from './db/config'

const app = express()

const port = process.env.SERVER_PORT || 3000
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(general)

database.run().then(() => {
  app.listen(port, () => console.log(`API running in port ${port}`))
})
export default app
