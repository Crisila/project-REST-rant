const React = require('react')
const Def = require('../default.jsx')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
                    <h4>
                        {c.content}
                    </h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        }) 
    }
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
                    {comments}
            
            </div>

            <br />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a> 
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>


          </main>
        </Def>
    )
}

module.exports = show
