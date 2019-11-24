import React from 'react';
import axios from 'axios';


const CowCard = ({ id, cowName, deleteThisCow }) => {
  return (
    <div>
      <p>Cow Name: {cowName}</p>
      <button onClick={() => deleteThisCow(id)}>X</button>
    </div>
  )
};

export default CowCard