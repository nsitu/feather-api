import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 80

app.get('/test', (req, res) => {
  res.send('Hello From NodeJS!')
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))