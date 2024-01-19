import express from 'express'
//import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('Hello!')
  })

  
app.get('/closed/:time', (req, res) => {
  console.log('Door is closed', req.params.time)
  res.sendStatus(200)
})


 
app.get('/open/:time', (req, res) => {
    console.log('Door is open', req.params.time) 
  res.sendStatus(200)
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))