import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    console.log('Hello!')
    res.send('Hello!')
  })

  
app.get('/test', (req, res) => {
    console.log('Hello From test!')
  res.send('Hello From test!')
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))