import React from 'react';
import Grandson from './Grandson';

// Create the Son component, which displays the Grandson component
function Son({ gifts }) {
  return (
    <div>
      <h3>Son</h3>
      <Grandson gifts={gifts} />
    </div>
  );
}

export default Son;
