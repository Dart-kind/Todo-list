import MyInput from '../../../MyInput/MyInput';

const ProgressBarHandle = ({onChange}) => {
  
  const handleWidth = (e) => {
    
    onChange(e.target.value)
  };
  return (
    <MyInput
      type="range"
      id="range"
      min="10"
      max="100"
      name="progress"
      onChange={handleWidth}
    />
  );
};

export default ProgressBarHandle;
