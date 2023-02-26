import React,{useContext} from 'react';
import Father from './Father';

import { GiftsContext } from '../App';

// Create the Grandfather component, which displays the Father component
function Grandfather() {
  // Use the useContext hook to access the gifts array from the context
  const gifts = useContext(GiftsContext);
  return (
    <div>
      <h1>Grandfather</h1>
      <Father gifts={gifts} />
    </div>
  );
}

export default Grandfather;
