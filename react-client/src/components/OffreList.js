import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function OffreList(props) {
  const [trigger , setTrrigger] = useState(false)


  const remove = (id) => {
    axios
      .delete(`http://localhost:3000/api/offer/${id}`)
      .then((result) => {
        console.log("hiiii");
        props.trigger(!props.trigger);
      })
      .catch((error) => {
        console.log(error);
      },[trigger]);
  };

  return (
    <div className="body">
      {props.data &&
        props.data.map((e, i) => (
          <div key={i} className="places">
            <h2>{e.name}</h2>
            <img
              src={e.imageUrl}
              style={{ width: '300px', height: '250px', borderRadius: '12px' }}
              alt={e.name}
            />
            <br />
            <br />
            <h4>{e.price}</h4>
            <br />
            <br />
            <a href="#"  onClick={()=>{
              props.carts(e)}}>Book Now</a>
            <br />
            <br />
            <br />
            <a href="#" onClick={() => {
          props.offreUpdate(e)
        }}>Update</a>
            <br />
            <br />
            <br />
            <a
              href="#"
              onClick={() => {
                remove(e._id);
              }}
            >
              Delete
            </a>
            <div>
              <div></div>
              <div className="menu"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default OffreList;
