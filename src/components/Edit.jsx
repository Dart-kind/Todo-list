import React from 'react';
import MyInput from './MyInput/MyInput';

const Edit = ({ note, onInputChange, onSaveClick, onCancelClick, post, setNote }) => {
  console.log(post);
  return (
    <div>
      <MyInput type="text" value={note} onChange={onInputChange} />
      <button onClick={onSaveClick}>Save</button>
      <button onClick={onCancelClick}>Cancel</button>
    </div>
  );
};

export default Edit;
