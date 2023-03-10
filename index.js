// 8. Require express at the top of the file
const express = require('express')

// 9. Initialize the app variable
const app = express()

// 10. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
app.get('/', (req, res) {
    //    d. Call res.send(‘hello world’) 
    res.send('Hello World')

})




// 11. Call app.listen(3000) to keep server open
app.listen(3000, function() {
    console.log('I am awake')
})


