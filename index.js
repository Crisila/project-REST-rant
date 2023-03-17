// ------------------------MODULES AND GLOBALS----------------------
require('dotenv').config()
// 8. Require express at the top of the file
const express = require('express')

// 9. Initialize the app variable
const app = express()

// -----------------------EXPRESS SETTINGS--------------------------
//from part 4 and not sure where this came from
app.set('views', __dirname + '/views')
//from Part 3, Day 3
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Part 4: part 2 - to let Express know what you're going to call your static folder
app.use(express.static('public'))

// -----------------------CONTROLLERS & ROUTES-------------------------
app.use('/places', require('./controllers/places'))
// 10. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
app.get('/', (req, res) => {
    //    d. Call res.send(‘hello world’) 
    // res.send('Hello World')
    //code below is from day 3 part 3
    res.render('home')

})


app.get('*', (req, res) => {
    // res.status(404).send(`<h1>404 Page</h1>`)
    //code below is for Day 3 Part 3
    res.render('error404')
})

// ---------------------------LISTEN FOR CONNECTIONS----------------------
// 11. Call app.listen(3000) to keep server open
app.listen(process.env.PORT)

//THIS IS INCORRECT ---------------------------
// app.listen(process.env.PORT, function() {
//     console.log('I am awake')
// })
// ---------------------------------------------

