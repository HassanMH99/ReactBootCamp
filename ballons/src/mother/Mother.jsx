import React from 'react';
import Child from '../child/Child';

const Mother = (props) => {
  return (
    <div id='Mother'>
      <h1>A Tale of Five Balloons</h1>
      {props.kids.map((kid) => (
        <Child name={kid.name} color={kid.color} />
      ))}
    </div>
  );
};

export default Mother;