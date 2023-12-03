// src/redux/actions.js
export const addResume = (resumeDetails) => ({
    type: 'ADD_RESUME',
    payload: resumeDetails,
  });
  
  export const editResume = (resumeData) => ({
    type: 'EDIT_RESUME',
    payload: resumeData,
  });
  
  export const deleteResume = (resumeData) => ({
    type: 'DELETE_RESUME',
    payload: resumeData,
  });
  