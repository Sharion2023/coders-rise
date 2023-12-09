import { useState } from "react"
import data from "../data.json"
import React from "react"
import Button from "./Button"



export default function Form(){

  let abbreviations = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

  const[degreesFilter, setDegreesFilter] = useState()
  const[locationStates, setLocationStates] = useState(abbreviations)
  const[tuition, setTuitionChange] = useState(null)


  // Using this function to update the state of degree
// whenever a new option is selected from the dropdown

  let handleDegreesFilterChange = (e) => {
    setDegreesFilter(e.target.value)
  }

  let handleLocationStatesChange = (e) => {
    setLocationStates(e.target.value)
  }

  let handleTuitionChange = (e) => {
   setTuitionChange(e.target.value)    
  }
 
  console.log(degreesFilter)
  console.log(locationStates)
  console.log(tuition)

  return(

<div className="App">
  <form>

    <div className="form-group" > 

    {/* Creating our dropdown and passing it the handleDegreeChange 
      so that every time a new choice is selected, our degree state 
      updates and renders name of the degree.
    */}
    <label value= "inputDegree">Select a degree:</label>
      <select className="form-control" onChange={handleDegreesFilterChange}> 
        {/* Creating the default / starting option for our 
          dropdown.
         */}
        <option value= "degree level"> -- Select a degree level -- </option>
        <option value = "1">Non-degree granting </option>
        <option value="2">Associate Degree </option>
        <option value="3">Bachelor's Degree </option>
        <option value="4">Graduate Degree </option>       
      </select>
    </div>

    <div className="form-group"> 
    <label value= "inputState">Select a state:</label>
      <select className="form-control" onChange={handleLocationStatesChange}>
        <option value= "state selection"> --Select a state-- </option>
        {abbreviations.map((abbreviation, index) => (
         <option key={index} value={abbreviation}>
            {abbreviation}
          </option>
          ))}
      </select>
    </div>

    <div className="form-group">
    <label value = "inputTuition">Tuition maximum:</label>
    <input type="text" className="form-control" id="inputAddress" onSubmit={handleTuitionChange}></input>
    </div>
   <Button>Submit</Button>
    </form> 
</div>

  
  ) 

  
}

