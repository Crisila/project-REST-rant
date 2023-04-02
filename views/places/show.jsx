const React = require('react')
const Def = require('../default.jsx')

function show (data) {
    return (
        <Def>
          <main>
          <div> 
          <img src={data.place.pic} alt={data.place.name} className="img-max" />
          <p>Located in {data.place.city}, {data.place.state}</p>
          </div> 

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
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                
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
