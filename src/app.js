import http from 'http'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const mongoUri = "mongodb://localhost:27017/COLLEGE_FEST";
const port = 5000;

const app = express('', api)
const server = http.createServer(app)

mongoose.connect(mongoUri)
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, () => {
    console.log(`Express server listening to the port ${port}`);
  })
})

export default app