const express = require('express');
const path = require('path');
const fs = require('fs');

const foodRouter = require('./routes/foodRoutes')

// const foods = JSON.parse(fs.readFileSync(`${__dirname}/models/data.json`))

const app = express();


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/foods', foodRouter)


app.get('/', (req, res) => {
    //res.send('HELLLOOOOOO !!!')
    res.render('home')
})


app.get('/welcome/:name', (req, res) => {
    const { name } = req.params
    res.render('welcome', { name: name })
})

// app.get('/foods', (req, res) => {
//     console.log(foods)
//     res.render('foods', {data : foods})
// })


module.exports = app;