import React from 'react';

// Create the Grandson component, which displays the gifts array
function Grandson({ gifts }) {
  return (
    <div>
      <h4>Grandson</h4>
      <ul>
        {gifts.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul>
    </div>
  );
}

export default Grandson;
