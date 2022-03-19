const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../models/data.json`))

exports.getAllFoods = (req, res) => {
    res.render('foods', { data : data})
}