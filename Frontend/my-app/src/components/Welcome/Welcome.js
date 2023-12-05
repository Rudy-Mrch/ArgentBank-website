import React, { useState } from 'react';
import './Welcome.css'
const Welcome = () => {
  const [name, setName] = useState('John');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <input
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          ) : (
            <span>{name}</span>
          )}
        </h1>
        {isEditing ? (
          <button className='edit-button' onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className='edit-button' onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
     
  );
};

export default Welcome;
