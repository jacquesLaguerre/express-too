import express from 'express'
import people from './data.js'

const PORT = 3033

const app = express()
app.use(express.json())/*when we get data in we're getting in json format 
line 15 won't work if this is left out*/

app.get('/people', (req, res) => {
res.send(people)
})

app.post('/people', (req, res) => {
    const newPerson = req.body
    people.push(newPerson)
    res.send(people)
})
app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}...`))