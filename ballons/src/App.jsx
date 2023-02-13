import './App.css'
import Mother from './mother/Mother'
const kids= [
  { name: 'Ori', color: 'red' },
  { name: 'Ron', color: 'blue' },
  { name: 'Sigalit', color: 'green' },
  { name: 'Ruti', color: 'yellow' },
  { name: 'Alon', color: 'purple' },
  ]
function App() {
    
  return (
    <div className="App">
      <Mother kids={kids}></Mother>
    </div>
  )
}

export default App
