import { useEffect, useRef } from 'react';

function App() {
  const inputRef1 = useRef(null);
  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  return (
    <div className="App">
      <form>
        <label htmlFor="my-input">Enter your name:</label>
        <input id="my-input" type="text" ref={inputRef1} />
      </form>
    </div>
  );
}

export default App;
