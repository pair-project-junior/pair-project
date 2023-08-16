// Create.js

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Create() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handelClick = () => {
    axios
      .post('http://localhost:3000/api/offer', {
        name: name,
        price: price,
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <TextField
        required
        label="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        label="price"
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        required
        label="imageUrl"
        name="imageUrl"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button className="Add" onClick={handelClick}>
        Add
      </button>
    </div>
  );
}

export default Create;
