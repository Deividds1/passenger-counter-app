import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [savedCount, setSavedCount] = useState([]);

  const handleSave = () => {
    setSavedCount(prevCounts => [...prevCounts, count]);
    setCount(0);
  }

  return (
    <>
      <div className="card">
        <h1 className='title'>Passengers counter app</h1>
        <p>people entered</p>
        <h1>{count}</h1>
        <button className='button blue' onClick={() => setCount(prevCount => prevCount + 1)}>
          INCREMENT
        </button>
        <button className='button green' onClick={handleSave}>SAVE</button>
        <p>
          previous entries: {savedCount.join(" - ")}
        </p>
      </div>
    </>
  )
}

export default App
