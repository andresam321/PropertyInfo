import React, { useState } from 'react'
import "./Property.css"
import { NavLink } from 'react-router-dom'

const DisplayProperties = () => {

const [toggle, setToggle] = useState(false)
const [toggleOne, setToggleOne] = useState(false)
const [toggleTwo, setToggleTwo] = useState(false)



  return (
    <div>  
        <div className='pic'>
          <img src="Amerc Rentals-1.png" className='logo'></img>
        </div>
        <div className='display-flex'>
            <div className='MainBox1'>
                <div className='boxOne'>
                <label className='addressInfo'>Click to View Property</label>
                <button className='addressClick' onClick={() => setToggle(!toggle)}>Property Address: View Triplex</button>
                {toggle && (
                <label className='address smaller-text'>319 E Flora St, Stockton, CA 95202 </label>
                  )}
                <label className='unitInfo'>Unit Availability:</label>
                <label className='unitInfo'>Contact for unit Availability</label>
                </div>
                <div className='boxTwo'>
                <img src="319_image_0_A.jpg" className='frontImage'></img>
                </div>
                <div className="boxThree">
                  <div className='small-flex'>
                    <NavLink className="links" to="/viewingFlora">View Property</NavLink>
                    <NavLink className="links" to="/viewingCresta">See in person Tour Dates </NavLink>
                    <NavLink className="links" to="/floraContactForm">Contact</NavLink>
                  </div>
                </div>
            
            </div>
            <div className='MainBox2'>
            <div className='boxOne'>
                <label className='addressInfo'>Click to View Property</label>
                <button className='addressClick' onClick={() => setToggleOne(!toggleOne)}>Property Address: Unavailable</button>
                {toggleOne && (
                <label className='address smaller-text'>Unavailable</label>
                  )}
                <label className='unitInfo'>Unit Availability:</label>
                <label className='unitInfo'>Contact for unit Availability</label>
                </div>
                <div className='boxTwo'>
                <img src="4477 la crsta 0.jpg" className='frontImage'></img>
                </div>
                <div className="boxThree">
                  <div className='small-flex'>
                    <NavLink className="links" to="/viewingCresta">View Property</NavLink>
                    <NavLink className="links" to="/">See in person Tour Dates </NavLink>
                    <NavLink className="links" to="/crestaContactForm">Contact</NavLink>
                  </div>
                </div>
            </div>
            <div className='MainBox3'>
              <div className='boxOne'>
                <label className='addressInfo'>Click to View Property</label>
                <button className='addressClick' onClick={() => setToggleTwo(!toggleTwo)}>Property Address: Unavailable</button>
                {toggleTwo && (
                <label className='address smaller-text'>Unavailable</label>
                  )}
                <label className='unitInfo'>Unit Availability:</label>
                <label className='unitInfo'>Contact for unit Availability</label>
                </div>
                <div className='boxTwo'>
                <img src="34 la pera 7.jpg" className='frontImage'></img>
                </div>
                <div className="boxThree">
                  <div className='small-flex'>
                    <NavLink className="links" to="/viewingPera">View Property</NavLink>
                    <NavLink className="links" to="/">See in person Tour Dates </NavLink>
                    <NavLink className="links" to="/peraContactForm">Contact</NavLink>
                  </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default DisplayProperties