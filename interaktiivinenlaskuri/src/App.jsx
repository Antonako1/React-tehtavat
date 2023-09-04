import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const handleAdd = () => {
    setCount(count + 1);
  }
  
  const handleDec = () => {
    setCount(count - 1);
  }
  
  return (
    <div>

      <p>{count}</p>
      <br/>
      <button onClick={handleAdd}>lisää</button>
      <button onClick={handleDec}>vähennä</button>

    </div>
  )
}

export default App
