import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="body">
      {props.data && props.data.map((e, i) => (
        <div key={i} className="places">
          <h2>{e.name}</h2>
          
          <img
            src={e.imageUrl}
            style={{ width: '300px', height: '250px', borderRadius: '12px' }}
            alt={e.name}
          />
                    <h4>{e.price}</h4>

          <br />
          <br />
          <a href="#">Book Now</a>
          <br/>
          <br/>
          <br/>
          <a href="#">Update</a>
          <br/>
          <br/>
          <br/>
          <a href="#">Delete</a>

        </div>
      ))}
    </div>
  );
}

export default App;
