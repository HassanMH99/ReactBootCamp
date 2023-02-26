import { createContext, useContext, useState  } from 'react'
import Grandfather from './components/Grandfather';
import './App.css'
export const GiftsContext = createContext([]);
function App() {
  const [gifts, setGifts] = useState([]);
  // Provide the gifts array state to the context so it can be accessed by the other components
  return (
    <GiftsContext.Provider value={gifts}>
      <div>
        <h1>App</h1>
        <button onClick={() => setGifts(['Welcome', 'GrandSon'])}>Add Gifts</button>
        <Grandfather />
      </div>
    </GiftsContext.Provider>
  );
}

export default App
