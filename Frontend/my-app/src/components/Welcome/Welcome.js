import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserProfileAsync,
  startEditing,
  setUserName,
  stopEditing,
  updateUserProfileAsync,
} from '../../Redux/slice';

import './Welcome.css';

const Welcome = () => {
  const { userName, isEditing, lastName, firstName, tempUserName } = useSelector(
    (state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfileAsync());
  }, [dispatch]);

  const handleEditClick = () => {
    dispatch(startEditing());
  };

  const handleNameChange = (event) => {
    dispatch(setUserName(event.target.value));
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfileAsync(userName));
    dispatch(stopEditing());
  };

  const handleCancelClick = () => {
    dispatch(setUserName(tempUserName));
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
                value={userName || ""}
                onChange={handleNameChange}
              />
            </h4>
            <h4>
              <span>First name: </span>
              <input
                type="text"
                value={firstName || ""}
                readOnly
                className="read-only-input"
              />
            </h4>
            <h4>
              <span>Last name: </span>
              <input
                type="text"
                value={lastName || ""}
                readOnly
                className="read-only-input"
              />
            </h4>
          </div>
        ) : (
          <span>{firstName + " " + lastName }</span>
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
