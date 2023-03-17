const React = require('react')
const Def = require('./default')

function home() {
   return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/Crisila/Software-Dev-Bootcamp/Backend/rest-rant/public/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="Chia Fruit Shake" />
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
            </div>

            {/* <div>            
                Photo by <a href="https://unsplash.com/fr/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div> */}

  
            <a href="/places">
                <button className='btn-primary'>Places Page</button>
                </a>
        </main>
    </Def>
    )
}
module.exports = home