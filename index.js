import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    console.log('Hello!')
    res.send('Hello!')
  })

  
app.get('/active', (req, res) => {
    console.log('Active!')
  res.send('Active!')
})


 
app.get('/inactive', (req, res) => {
    console.log('Inactive!')
  res.send('Inactive!')
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))