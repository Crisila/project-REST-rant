const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div>
                    <h2>{places.name}</h2>
                    <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )

}

module.exports = index