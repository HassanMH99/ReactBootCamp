import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/UseFetch'
function App() {
  const { data, isLoading, error } = useFetch('https://63f7738fe40e087c958f2bf7.mockapi.io/products');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
    <h1>Products:</h1>
    <ul>
      {data && data.map(data => (
        <li key={data.id}>
          <strong>{data.name}</strong>
          <br />
          {data.price}
          <br />
          {data.descrption}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App
