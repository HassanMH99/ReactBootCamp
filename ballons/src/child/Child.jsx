import React from 'react';
import Balloon from '../ballon/Ballon';

const Child = (props) => {
  return (
    <div id='Child'>
      <h3>{props.name}</h3>
      <Balloon color={props.color} />
    </div>
  );
};

export default Child;