import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startEditing,
  setName,
  stopEditing,
} from '../../Redux/slice'; 

import './Welcome.css';

const Welcome = () => {
  const { name, isEditing } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(startEditing());
  };

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleSaveClick = () => {
    dispatch(stopEditing());
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
