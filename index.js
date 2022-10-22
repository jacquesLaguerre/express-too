import express from 'express' //pulling  express from node_modules,
// calling library from npm i express
import people from './data.js' //import people from data file (Just to test our api)

const PORT = 3033 //declared port 3000-4000 only local in our computer

const app = express() // calls express function express() and 
//puts new Expresss application inside the app variable 
app.use(express.json())/*when we get data in we're getting in json format 
line 15 won't work if this is left out, read request in json */

app.get('/people', (req, res) => {
res.send(people)
}) //getting information from data file, routing method

app.post('/people', (req, res) => {
    const newPerson = req.body
    people.push(newPerson)
    res.send(people)
})
app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}...`)) //listens through port 3033