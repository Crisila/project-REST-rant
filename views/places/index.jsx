const React = require('react')
const Def = require('../default')

function index ({data}) {
    let placesFormatted = data.map((place, index) => {
        return (
            <div className='col-sm-6'>
                    <h2>
                        <a href={`/places/${index}`}>
                            {place.name}
                        </a>
                    </h2>
                    <p className='text-center'>
                        {place.cuisines}
                    </p>
                    <img src={place.pic} alt={place.nam}/>
                    <p className='text-center'>
                        Located in {place.city}, {place.state}
                    </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>placess to be and placess to go!</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )

}

module.exports = index