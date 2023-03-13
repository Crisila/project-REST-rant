const React = require('react')
const Def = require('./default')

function index(data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <Def>
                <main>
                    <h1>{places.name}</h1>
                    <img src={place.pic} alt={place.name}/>
                </main>
            </Def>
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