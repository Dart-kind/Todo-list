import React from 'react';
import ProgressBarHandle from '../ProgressBarHandle/ProgressBarHandle';
import ProgressBar from '../ProgressBar/ProgressBar';

const Parent = () => {
  const [width, setWidth] = React.useState('');
  const handleWidth = (width) => {
    setWidth(width);
  };
  return (
    <div>
      <ProgressBarHandle onChange={handleWidth} />
      <ProgressBar width={width}/>
    </div>
  );
};

export default Parent;
