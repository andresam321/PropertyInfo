import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Input from 'react-phone-number-input/input'

const LaCrestaContactForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [unitInterestedIn, setUnitInterestedIn] = useState("")
    const [howManyAdults, setHowManyAdults] = useState("")
    const [howManyKids, setHowManyKids] = useState("")
    const [creditScoreRange, setCreditScoreRange] = useState("")
    const [work, setWork] = useState("")
    const [proofOfIncome, setProofOfIncome] = useState("")
    const [evictionOnRecord, setEvictionOnRecord] = useState("")
    const [timeOnPreviousResidence, setTimeOnPreviousResidence] = useState("")
    const [reasonForMoving, setReasonForMoving] = useState("")
    const [typeOfPet, setTypeOfPet] = useState("")
    const [additionalInformation, setAdditionalInformation] = useState("")
    const [propertyApplyingFor, setPropertyApplyingFor] = useState("")
    const [error, setErrors] = useState({})
    
    const navigate = useNavigate()
    
    const submitHandler = (e) => {
      e.preventDefault()
      axios.post("http://localhost:8000/api/laCresta",{
        firstName,
        lastName,
        phoneNumber,
        email,
        age,
        unitInterestedIn,
        howManyAdults,
        howManyKids,
        creditScoreRange,
        work,
        proofOfIncome,
        evictionOnRecord,
        timeOnPreviousResidence,
        reasonForMoving,
        typeOfPet,
        additionalInformation,
        propertyApplyingFor,
        error
      },
      )
      .then((res)=>{
        console.log(res)
        navigate("/")
      })
      .catch((err)=>{
        console.log(err)
        console.log("err.response.data.errors", err.response.data.errors)
        setErrors(err.response.data.errors)
      })
    
    }

  return (
    <div>
       <div className='form-pic'>
         <NavLink className="" to="/"><img src="Amerc Rentals-1.png" className='form-logo'></img></NavLink>
      </div>
      <div className='form-row form-display'>
        <form onSubmit={submitHandler}>
      
          <div className="col-md-4 mb-4 left" >
            <label>Property Inquiry For:</label>
            <select value ={propertyApplyingFor} name="propertyApplyingFor" className='form-control' onChange={(e)=> setPropertyApplyingFor(e.target.value)}>
                <option>Select an option</option>
                <option value="4477 La Cresta Way, Stockton, CA 95207">4477 La Cresta Way, Stockton, CA 95207</option>
            </select>
            {
              error.propertyApplyingFor?
              <span>{error.propertyApplyingFor.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-3 right">
            <label>First Name:</label>
            <input onChange={(e)=>{setFirstName(e.target.value)}}
              value={firstName} type="text" name="firstName" className='form-control'
            />
            {
              error.firstName?
              <span>{error.firstName.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-3 right">
            <label>Last Name:</label>
            <input onChange={(e)=>{setLastName(e.target.value)}}
              value={lastName} type="text" name="lastName" className='form-control'
            />
            {
              error.lastName?
              <span>{error.lastName.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label>Phone Number:</label>
            <Input onChange={setPhoneNumber}
              value={phoneNumber} country='US' name="phoneNumber" placeholder="000-000-0000"
              className='form-control'/>
            {
              error.phoneNumber?
              <span>{error.phoneNumber.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label>Email:</label>
            <input onChange={(e)=>{setEmail(e.target.value)}}
              value={email} type="text" name="email" className='form-control'
            />
            {
              error.email?
              <span>{error.email.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right" >
            <label className="">Age Range:</label>
            <select value ={age} name="age" className='form-control' onChange={(e)=> setAge(e.target.value)}>
                <option>Select an option</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-49">36-49</option>
                <option value="50+">50+</option>
            </select>
            {
              error.age?
              <span>{error.age.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right" >
            <label className="">Unit Interested In:</label>
            <select value ={unitInterestedIn} name="unitInterestedIn" className='form-control' onChange={(e)=> setUnitInterestedIn(e.target.value)}>
                <option>Select an option</option>
                <option value="Unit Unavailable">Unit Unavailable</option>
            </select>
            {
              error.unitInterestedIn?
              <span>{error.unitInterestedIn.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right" >
            <label className="">How Many Adults:</label>
            <select value ={howManyAdults} name="howManyAdults" className='form-control' onChange={(e)=> setHowManyAdults(e.target.value)}>
                <option>Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {
              error.howManyAdults?
              <span>{error.howManyAdults.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right" >
            <label className="">How Many Kids:</label>
            <select value ={howManyKids} name="howManyKids" className='form-control' onChange={(e)=> setHowManyKids(e.target.value)}>
                <option>Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {
              error.howManyKids?
              <span>{error.howManyKids.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label className="">Credit Score Range:</label>
            <select value ={creditScoreRange} name="creditScoreRange" className='form-control' onChange={(e)=> setCreditScoreRange(e.target.value)}>
                <option>Select an option</option>
                <option value="100-199">100-199</option>
                <option value="200-299">200-299</option>
                <option value="300-399">300-399</option>
                <option value="400-499">400-499</option>
                <option value="500-599">500-599</option>
                <option value="600-699">600-699</option>
                <option value="700+">700+</option>
                <option value="Rather Not Answer">Rather Not Answer</option>
            </select>
            {
              error.creditScoreRange?
              <span>{error.creditScoreRange.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label className="">Work:</label>
            <select value ={work} name="work" className='form-control' onChange={(e)=> setWork(e.target.value)}>
              <option>Select an option</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Rather Not Answer">Rather Not Answer</option>
            </select>
            {
              error.work?
              <span>{error.work.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label className="">Proof Of income:</label>
            <select value ={proofOfIncome} name="proofOfIncome" className='form-control' onChange={(e)=> setProofOfIncome(e.target.value)}>
                <option>Select an option</option>
                <option value="Cash">Cash</option>
                <option value="Check">Check</option>
                <option value="PayStubs">PayStubs</option>
                <option value="Electronically">Electronically</option>
                <option value="Rather Not Answer">Rather Not Answer</option>
            </select>
            {
              error.proofOfIncome?
              <span>{error.proofOfIncome.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label className="">Eviction on Record:</label>
            <select value ={evictionOnRecord} name="evictionOnRecord" className='form-control' onChange={(e)=> setEvictionOnRecord(e.target.value)}>
                <option>Select an option</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Rather Not Answer">Rather Not Answer</option>
            </select>
            {
              error.evictionOnRecord?
              <span>{error.evictionOnRecord.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label className="">Time on Previous Resience:</label>
            <select value ={timeOnPreviousResidence} name="timeOnPreviousResidence" className='form-control' onChange={(e)=> setTimeOnPreviousResidence(e.target.value)}>
                <option>Select an option</option>
                <option value="Less Then 1 Year">Less Then 1 Year</option>
                <option value="Between 1 and 2 years">Between 1 and 2 years</option>
                <option value="3 Years or more">3 Years or more</option>
            </select>
            {
              error.timeOnPreviousResidence?
              <span>{error.timeOnPreviousResidence.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 right">
            <label>Reason For Moving:</label>
            <textarea onChange={(e)=>{setReasonForMoving(e.target.value)}}
              value={reasonForMoving} type="text" name="reasonForMoving" className='form-control'
            />
          </div>
          <div className="col-md-4 mb-4 left">
            <label className="">Type Of Pet:</label>
            <select value ={typeOfPet} name="typeOfPet" className='form-control' onChange={(e)=> setTypeOfPet(e.target.value)}>
                <option>Select an option</option>
                <option value="Dog">Dog, If able add weight and size down below</option>
                <option value="Cat">Cat, If able add weight and size down below</option>
                <option value="Other">Other, If able add Other down below</option>
                <option value="None">No Pets</option>
            </select>
            {
              error.typeOfPet?
              <span>{error.typeOfPet.message}</span>
              :null
            }
          </div>
          <div className="col-md-4 mb-4 info">
            <label>Additional Information:</label>
            <textarea onChange={(e)=>{setAdditionalInformation(e.target.value)}}
              value={additionalInformation} type="text" name="additionalInformation" className='form-control'
            />
            <input className='submit' type="submit" value="Submit Form" />
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default LaCrestaContactForm