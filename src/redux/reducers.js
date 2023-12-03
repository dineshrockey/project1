// import React from "react";

// src/redux/reducers.js

const initialState = {
    resumeData: [],
  };
  
  const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_RESUME':
        return {
          ...state,
          resumeData: [...state.resumeData, action.payload],
        };
      case 'EDIT_RESUME':
        // Implement the logic to edit the resume details in the array
        // For simplicity, we'll update the entire resumeData array
        return {
          ...state,
          resumeData: action.payload,
        };
      case 'DELETE_RESUME':
        // Implement the logic to delete the resume details from the array
        // For simplicity, we'll update the entire resumeData array
        return {
          ...state,
          resumeData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default resumeReducer;
  