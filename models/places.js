// module.exports = [{
//       name: 'H-Thai-ML',
//       city: 'Seattle',
//       state: 'WA',
//       cuisines: 'Thai, Pan-Asian',
//       pic: 'http://placekitten.com/250/250'
//     }, {
//       name: 'Coding Cat Cafe',
//       city: 'Phoenix',
//       state: 'AZ',
//       cuisines: 'Coffee, Bakery',
//       pic: 'http://placekitten.com/250/250'
//     }]

const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)