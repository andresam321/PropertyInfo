import React, {useState} from 'react'
import "./Property.css"
import { NavLink } from 'react-router-dom'

const ViewingCrestaProperty = () => {
  return (
    <div>
      <div>
        <p className='title' > <NavLink to="/"><img src="Amerc Rentals-1.png" className='sign'></img></NavLink> VIEWING PROPERTY: 4477 La Cresta Way, Stockton, CA 95207
        </p>
        <div className='header-display'>
        {/* <img src="Amerc Rentals-1.png" className='sign'></img> */}
        <button> <NavLink className="workingLink" to="/">Home</NavLink></button>
        <button> <NavLink className="workingLink" to="/crestaContactForm">Contact</NavLink></button>
        </div>

        </div>
        <div className='display-flexTwo'>
            <div className='top-half'>
                <div className='small-1'>
                <img src="4477 la crsta 0.jpg" className='backImage'></img>
                </div>
                <div className='small-2'>
                <img src="4477 la crsta 1.jpg"className='backImage'></img>
                </div>
                <div className='small-3'>
                <img src="4477 la crsta 2.jpg" className='backImage'></img>
                </div>
                <div className='small-4'>
                <img src="4477 la crsta 3.jpg" className='backImage'></img>
            </div>
          </div>
        <div className='display-flextwo'>
            <div className='bottom-half'>
                
                <div className='small-5'>
                <img src="image-coming-soon.jpg" className='backImage'></img>
                </div>
                <div className='small-6'>
                <img src="image-coming-soon.jpg" className='backImage'></img>
                </div>
                <div className='small-7'>
                <img src="image-coming-soon.jpg" className='backImage'></img>
                </div>
                <div className='small-8'>
                <img src="image-coming-soon.jpg" className='backImage'></img>
              </div>
            </div>
            </div>
        </div>
        <div classname="">
          <div className='MainpropBox'>
            <div className='propertyBox2'>
              <div className='inisdeBox'>
              <label className='unitTitle'>Unit: Unavailable!</label>
              <label className='propLabels'>Price: Contact For Price</label>
              <label className='propLabels'>Bedrooms: 2</label>
              <label className='propLabels'>Bathrooms: 1</label>
              <label className='propLabels'>Sqft: Tbd</label>
              {/* <label className='propLabels'>On Sight Laundry!</label> */}
              <label className='propLabels'>New Paint, Applicanes, Carpet!</label>
              <label className='propLabels'>Ac Unit!</label>
              <label className='propLabels'>Garage parking!</label>
              </div>
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default ViewingCrestaProperty