const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>
                {data.place.name}
            </h1>
            <br />
            <div>
                <h2 className='text-center'>
                    Rating
                </h2>
                    <p>Not yet rated.</p>

                <br />

                <h2 className='text-center'>
                    Description
                </h2>
                    <p>No description</p>
                    <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                
                <br />
                <h2 className='text-center'>Comments</h2>
                    <p>No comments yet.</p>
            
            </div>

            <br />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a> 
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>


          </main>
        </Def>
    )
}

module.exports = show
