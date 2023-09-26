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
  const reg = /^[0-9-_._+\s+]*$/;
  if(checkDuplicates(objecti, copy, "Name")){
    alert(`Warning: ${objecti.name} is already in the phonebook`)
    mem++;
  }
  if(checkDuplicates(objecti, copy, "Number")){
    alert(`Warning: ${objecti.number} is already in the phonebook`)
    mem++;
  }
  if(mem != 2){mem=0;}
  console.log(reg.test(objecti.number))
  if(reg.test(objecti.number) == false){
    alert(`Warning: ${objecti.number} is not a number`)
    return null;
  }
  return mem;
}

const Input = (props) => {
  return(
    <div>
      {props.text}  <input 
        type={props.type} 
        onChange={props.func} 
        placeholder={props.placeholder} 
        id={props.id}/>
    </div>
  )
}

const Search = (props) => {
  return(
    <Input 
      text={props.text}
      type="text"
      func={props.func}
      placeholder={props.placeholder}
      id="input-search"
    />    
  )
}

const AddPersons = (props) => {
  return(
    <div>
      <Input 
        text="Name: "
        type="text"
        func={props.updateInputStr}
        placeholder='Koko nimi'
        id='input-field-str'
      />
      <br />
      <Input 
        text="Number: "
        type="text"
        func={props.updateInputInt}
        placeholder='Puhelin numero'
        id='input-field-int'
      />
      <div>
        <button type="submit" onClick={props.handleSubmit}>add</button>
      </div>
    </div>
    )
}

const Persons = (props) => {
  return(
    <div>
      {
        props.search !== "" ? 
        <div>
          {
            props.idList.map(personsID =>  
              <p key={personsID}>{props.persons[personsID-1].name} | {props.persons[personsID-1].number}</p>       
            )
          }
        </div>
        :
        <div>
          {
            props.persons.map(people => <p key={people.name}>{people.name} | {people.number}</p>)
          }
        </div>
     }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])  
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0);
  const [idList, setIdList] = useState([]);
  const [search, setSearch] = useState("");

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
      number: newNum,
      id: (persons.length+1)
    };
    if(checkErrors(objecti, copy) === 0 && checkErrors(objecti, copy) !== null){
          objecti.number = String(objecti.number)
        copy.push(objecti)
        setPersons(copy)
    }else{
      return;
    }
    document.getElementById('input-field-str').value = "";
    document.getElementById('input-field-int').value = "";
  }
  const updateInputSrc = (e) => {
    setSearch(e.target.value);

    const filterPersonId = persons
    .filter(person => person.name.toLowerCase()
    .includes(e.target.value.toLowerCase()))
    .map(person => person.id);

  setIdList(filterPersonId);
}

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={e => e.preventDefault()}>
        <Search 
          text="Search: "
          func={updateInputSrc}
          placeholder="Etsi nimellä"
        />

        <hr />
        
        <AddPersons
          updateInputStr={updateInputStr}
          updateInputInt={updateInputInt}
          handleSubmit={handleSubmit}
        />
      </form>

      <h2>Numbers</h2>
      <div id='number-area'>
        <Persons 
          search={search}
          idList={idList}
          persons={persons}
        />
      </div>
    </div>
  )
}

export default App