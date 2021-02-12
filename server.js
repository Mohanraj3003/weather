import express from 'express'
import axois from 'axios';
import dotenv from 'dotenv'
import path from 'path';
let __dirname = path.resolve();
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine', 'ejs');

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.redirect('')
// })

app.get('/', (req, res) => {
    res.render('pages/intro', { response: null });
})

app.get('/:city', async (req, res) => {
    await axois.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.apikey}`).then((response) => {
        res.render('pages/intro', { response: response.data })
    }).catch(e => {
        console.log("Error | " + e.message)
    })
})


app.listen(PORT, () => {
    console.log('Server is Running on: ' + PORT)
})


