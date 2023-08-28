import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const updateInput = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = () => {
    setPersons({name: newName})
    console.log(persons)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          name: <input onChange={updateInput}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>   
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App