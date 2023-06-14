import React from 'react';

const ButtonAddPost = ({ ...props }) => {
  return (
    <button className="popup__button" {...props}>
      Submit
    </button>
  );
};

export default ButtonAddPost;
