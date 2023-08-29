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
    let copy = [...persons];
    copy.push(
      {name: newName}
    )
    setPersons(copy)
    document.getElementById('input-field').value = "";
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          name: <input onChange={updateInput}
                  placeholder='Nimi'
                  id='input-field'
                />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(people => <p key={people.name}>{people.name}</p>)
      }
    </div>
  )

}

export default App