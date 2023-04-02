const router = require('express').Router()
const db = require('../models')


// -------------INDEX ROUTE-------------

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// -------------POST-------------

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err, err')
    res.render('error404')
  })
})

// -------------NEW-------------

router.get('/new', (req, res) => {
  res.render('places/new')
  db.Place.create(req.body)
  .then()
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// -------------SHOW-------------

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// -------------PUT/UPDATE-------------

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
  db.Place.create(req.body)
  .then()
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// -------------DELETE-------------

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
  db.Place.create(req.body)
  .then()
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// -------------EDIT-------------

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
  // db.Place.create(req.body)
  // .then()
  // .catch(err => {
  //   console.log(err)
  //   res.render('error404')
  // })
})

// -------------create rant (comment)-------------

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
  // db.Place.create(req.body)
  // .then()
  // .catch(err => {
  //   console.log(err)
  //   res.render('error404')
  // })
})

// -------------delete rant (comment)-------------

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
  // db.Place.create(req.body)
  // .then()
  // .catch(err => {
  //   console.log(err)
  //   res.render('error404')
  // })
})

module.exports = router

// ---------------------------------------------------------------------------------------------------------------------------------------------

// const router = require('express').Router()
// const places = require('../models/places.js')

// //Get /places
// router.get('/', (req, res) => {
//     // res.send('GET /places')
//     //Day3 Part 3
//     // let places = [{
//     //   name: 'H-Thai-ML',
//     //   city: 'Seattle',
//     //   state: 'WA',
//     //   cuisines: 'Thai, Pan-Asian',
//     //   pic: 'http://placekitten.com/250/250'
//     // }, {
//     //   name: 'Coding Cat Cafe',
//     //   city: 'Phoenix',
//     //   state: 'AZ',
//     //   cuisines: 'Coffee, Bakery',
//     //   pic: 'http://placekitten.com/250/250'
//     // }]
    
//     res.render('places/index', {data: places})
// })

// // not sure why I found two version. Original is above?
// router.get('/', (req, res) => {
//   res.render('places/index', {places})
// })


// //---------------NEW------------------
// // PART 5-2: GET /places/new
// router.get ('/new', (req, res) => {
//   res.render('places/new')
// })

// // PART 5-5
// router.post('/', (req, res) => {
//   // console.log(req.body) -- for debugging
//   if (!req.body.pic) {
//     //default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.bidy.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// // ------------------SHOW-----------------
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//   res.render('places/show', {place: places[id], id})
//   }
// })

// // -------------------EDIT-----------------------
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// })

// // -----------------PUT-----------------------------
// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })





// // -------------DELETE----------------------

// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     // res.send('STUB DELETE places/:id')
//     res.redirect('/places')
//   }
// })



// module.exports = router
