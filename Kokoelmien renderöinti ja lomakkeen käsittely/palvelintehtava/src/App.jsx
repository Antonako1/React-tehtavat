import { useState } from 'react'

const checkDuplicates = (obj, copy, type) => {
  if(type === "Name"){
    for(let i = 0; i < copy.length; i++){
      if(copy[i].name === obj.name){
        return true;
      }
    }
    return false
  } else if(type === "Number") {
    for(let i = 0; i < copy.length; i++){
      if(copy[i].number === obj.number){
        return true;
      }
    }
  }
}

const checkErrors = (objecti, copy) => {
  let mem = 0;
  const reg = new RegExp('^[0-9]+$');
  if(checkDuplicates(objecti, copy, "Name")){
    alert(`${objecti.name} is already in the phonebook`)
    mem++;
  }
  if(checkDuplicates(objecti, copy, "Number")){
    alert(`${objecti.number} is already in the phonebook`)
    mem++;
  }
  if(reg.test(objecti.number)){
    alert(`${objecti.number} is not a number`)
    mem++;
  }
  return mem;
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 123456789 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)

  const updateInputStr = (e) => {
    setNewName(e.target.value)
  }
  const updateInputInt = (e) => {
    setNewNum(e.target.value)
  }
  const handleSubmit = () => {
    let copy = [...persons];
    let objecti = {
      name: newName,
      number: newNum
    };
    if(checkErrors(objecti, copy) === 0){
        copy.push(objecti)
        setPersons(copy)
    }
    document.getElementById('input-field-str').value = "";
    document.getElementById('input-field-int').value = "";
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          name: <input onChange={updateInputStr}
                  placeholder='Kokonimi'
                  id='input-field-str'
                />
        </div>
        <br />
        <div>
          number: <input onChange={updateInputInt}
                      placeholder='Puhelin numero'
                      id='input-field-int' 
                    />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(people => <p key={people.name}>{people.name} | {people.number}</p>)
      }
    </div>
  )

}

export default App