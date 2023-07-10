import { useState } from 'react';
import './App.css';
// import data from './data.json';
import NivoCalendar from './NivoCalendar';
import MyComponent from './Test';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <NivoCalendar />
        <MyComponent name="Luar" age={20}></MyComponent>
      </div>
    </>
  )
}

export default App
