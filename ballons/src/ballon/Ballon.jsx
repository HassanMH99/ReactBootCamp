import React from 'react';

const Balloon = (props) => {
  return (
    <div style={{backgroundColor: props.color, height: "100px", width: "100px", borderRadius: "50%"}} />
  );
};

export default Balloon;