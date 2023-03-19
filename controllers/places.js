const router = require('express').Router()
const places = require('../models/places.js')

//Get /places
router.get('/', (req, res) => {
    // res.send('GET /places')
    //Day3 Part 3
    // let places = [{
    //   name: 'H-Thai-ML',
    //   city: 'Seattle',
    //   state: 'WA',
    //   cuisines: 'Thai, Pan-Asian',
    //   pic: 'http://placekitten.com/250/250'
    // }, {
    //   name: 'Coding Cat Cafe',
    //   city: 'Phoenix',
    //   state: 'AZ',
    //   cuisines: 'Coffee, Bakery',
    //   pic: 'http://placekitten.com/250/250'
    // }]
    
    res.render('places/index', {data: places})
})

// not sure why I found two version. Original is above?
router.get('/', (req, res) => {
  res.render('places/index', {places})
})


//---------------NEW------------------
// PART 5-2: GET /places/new
router.get ('/new', (req, res) => {
  res.render('places/new')
})

// PART 5-5
router.post('/', (req, res) => {
  // console.log(req.body) -- for debugging
  if (!req.body.pic) {
    //default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.bidy.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// ------------------SHOW-----------------
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', {place: places[id], id})
  }
})

// -------------------EDIT-----------------------
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})


// -------------DELETE----------------------

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    // res.send('STUB DELETE places/:id')
    res.redirect('/places')
  }
})



module.exports = router
