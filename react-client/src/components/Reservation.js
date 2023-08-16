import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Reservation = (props) => {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [fullName,setFullName] =useState("")
  const [email,setEmail] =useState("")
  const [age,setAge] =useState("")
  console.log(data, "this is our data");

  useEffect(() => {
    axios.get("http://localhost:3000/api/offer")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleFullChange = (e) => {
    setFullName(e.target.value);
    // setEmail(e.target.value);
    // setAge(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handelAgeChange = (e) => {
    setAge(e.target.value)
  } 


  const handleAddFull = () => {
    if (fullName === ''&&email === "" &&age === undefined) {
      return; 
    }

    const FullNameData = {
      fullName: fullName,
      email:email,
      age:age
    };

    axios
      .post("http://localhost:3000/api/fullNames", FullNameData)
      .then((result) => {
        console.log("added successfully");
      })
      .catch((error) => {
        console.log("Error adding FullName:", error);
      });

    setFullName("")
    setEmail("")
    setAge("")
  };
  return (
    <div className='reservation'>
      <h1>Reservation</h1>
      {props.cart.map((e, i) => (
        <div key={i} className='reservation-details'>
          <span>Country Name : {e.name}</span>
          <span>Price: {e.price}</span>
          <h2> </h2>
                 
        </div>
      ))}

      <br />
      <br />


      <TextField
      id="outlined-basic"
      label="Full Name"
      variant="outlined"
      fullWidth
      value={fullName}
      onChange={handleFullChange}
    />

    <br />
    <br />

    <TextField
      id="outlined-basic"
      label="Email"
      variant="outlined"
      fullWidth
      type="email"
      value={email}
      onChange={handleEmailChange}
    />

    <br />
    <br />

    <TextField
      id="outlined-basic"
      label="Phone Number"
      variant="outlined"
      fullWidth
      type="tel"
      value={age}
      onChange={handelAgeChange}
    />
  <br />
    <br />
     
     
      <button className="Reserver-button" onClick={()=>{
        handleAddFull()
        alert("reservation with success")
      }}>
      Reserver
    </button>

    </div>

    
  );
}




 
 
 
 

export default Reservation;