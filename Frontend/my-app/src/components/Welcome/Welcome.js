import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startEditing, setName, stopEditing } from "../../Redux/slice";

import "./Welcome.css";

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

  const handleCancelClick = () => {
    dispatch(stopEditing());
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {isEditing ? (
          <div className="editUser">
            <h3 className="userTitle">Edit user info </h3>
            <h4>
              <span>User name: </span>
              <input 
              type="text"
               value={name}
              onChange={handleNameChange} 
              />
            </h4>
            <h4>
              <span>First name: </span>
              <input 
              type="text" 
              value={""} 
              onChange={""} 
              readOnly
              className="read-only-input"
              />
            </h4>
            <h4>
              <span>Last name: </span>
              <input 
              type="text" 
              value={""} 
              onChange={""} 
              readOnly
              className="read-only-input"
              />
            </h4>
          </div>
        ) : (
          <span>{name}</span>
        )}
      </h1>
      {isEditing ? (
        <div>
          <button className="edit-button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="edit-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Welcome;
