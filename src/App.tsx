import { useState } from 'react'
import './App.css'
import Profile from './components/Profile.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="profile">
        <Profile />
      </div>
    </>
  )
}

export default App
