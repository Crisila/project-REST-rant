const router = require('express').Router()

//Get /places
router.get('/', (req, res) => {
    // res.send('GET /places')
    //Day3 Part 3
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: 'http://placekitten.com/250/250'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'http://placekitten.com/250/250'
    }]
    
    res.render('places/index', {data: places})
})


// GET /places/new
router.get ('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router
