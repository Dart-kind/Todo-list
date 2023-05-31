import React from 'react';
import MyInput from '../../../MyInput/MyInput';

const ProgressBarHandle = ({onChange}) => {
  console.log(onChange);
  
  const handleWidth = (e) => {
    console.log(e.target.value);
    
    onChange(e.target.value)
  };
  return (
    <MyInput
      type="range"
      id="range"
      min="0"
      max="100"
      name="progress"
      onChange={handleWidth}
    />
  );
};

export default ProgressBarHandle;
