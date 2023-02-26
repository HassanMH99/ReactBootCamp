import React from 'react';
import Son from './Son';
// Create the Father component, which displays the Son component
function Father({ gifts }) {
  return (
    <div>
      <h2>Father</h2>
      <Son gifts={gifts} />
    </div>
  );
}

export default Father;
