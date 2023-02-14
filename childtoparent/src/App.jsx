import { useState } from 'react'
import './App.css'
import CustomButton from './CustemButton';

function App() {
  const colors = ['Blue', 'Red', 'Yellow'];
  const [selectedColor, setSelectedColor] = useState(null);
  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
       {colors.map((color) => (
        <CustomButton key={color} color={color} onClick={handleButtonClick} />
      ))}
      <p>The Color Selected is: {selectedColor}</p>
    </div>
  )
}

export default App
