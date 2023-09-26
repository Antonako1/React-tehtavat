import { useState, useEffect  } from 'react'
import axios from 'axios';
import { loadJson, deleteJson, postJson, replaceJson } from './handlejson';
import './styles.css';

// Functions
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
const findId = (type, toSearch,copy) => {
  if(type === "nimi"){
    for(let i = 0; i < copy.length; i++){
      if(copy[i].name === toSearch){
        return copy[i].id;
      }
    }
    return false
  } else {
    for(let i = 0; i < copy.length; i++){
      if(copy[i].number === toSearch){
        return copy[i].id;
      }
    }
    retu
  }
}
const checkErrors = async (objecti, copy) => {
  let mem = 0;
  const reg = /^[0-9-_._+\s+]*$/;
  if(checkDuplicates(objecti, copy, "Name")){
    if(window.confirm(`${objecti.name} löytyy jo, korvataanko vanha?`)){
      const id = findId("nimi", objecti.name, copy)
      await replaceJson(id, objecti)
      return null;
    }    
  }
  if(checkDuplicates(objecti, copy, "Number")){
    if(window.confirm(`${objecti.name} löytyy jo, korvataanko vanha?`)){
      const id = findId("number", objecti.number, copy)
      await replaceJson(id, objecti)
      return null;
    }  
  }
  if(mem !== 2 ){mem = 0;}
  if(reg.test(objecti.number) == false){
    alert(`Warning: ${objecti.number} is not a number`)
    return null;
  }
  return mem;
}

// Components
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
const Delete = (props) => {
  return(
    <button onClick={props.func} id={props.idNum}>Delete</button>
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
        <div className='personArea'>
          {
            props.idList.map(personsID =>  
              <span>
                <p key={personsID}>{props.persons[personsID-1].name} | {props.persons[personsID-1].number}</p>
                <Delete func={props.func} idNum={personsID}/>
              </span>       
            )
          }
        </div>
        :
        <div className='personArea'>
          {
            props.persons.map(people =>
              <span>
                <p key={people.name}>{people.name} | {people.number}</p>
                <Delete func={props.func} idNum={people.id}/>
              </span>
            )
          }
        </div>
     }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);  
  const [newName, setNewName] = useState("")
  const [newNum, setNewNum] = useState(0);
  const [idList, setIdList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [submit, setSubmit] = useState(false);
  const [deletedName, setDeletedName] = useState("")
  const [deleted, setDeleted] = useState(false);
  
  const updateInputStr = (e) => {
    setNewName(e.target.value)
  }

  const updateInputInt = (e) => {
    setNewNum(e.target.value)
  }

  const handleSubmit = async () => {
    let copy = [...persons];
    let objecti = {
      name: newName,
      number: newNum,
      id: (persons.length+1)
    };
    const result = checkErrors(objecti, copy);
    if(result === null){
      return;
    }
    if(result === 0){
        objecti.number = String(objecti.number)
        copy.push(objecti)
        setPersons(copy)
    }
    document.getElementById('input-field-str').value = "";
    document.getElementById('input-field-int').value = "";

    try {
      postJson(objecti);
      updataData();
      setSubmit(true);
      // Oottaa kaks sekkaa
      setTimeout(() => {
        setSubmit(false);
      }, 2000);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  const updateInputSrc = (e) => {
    setSearch(e.target.value);

    const filterPersonId = persons
    .filter(person => person.name.toLowerCase()
    .includes(e.target.value.toLowerCase()))
    .map(person => person.id);

    setIdList(filterPersonId);
  }

  const handleDelete = async (id) => {
    if(window.confirm("Poistetaanko numero?")){
      const personId = id.target.id;
      try {
        await deleteJson(personId);

        for(let i = 0; i < persons.length; i++){
          if(String(persons[i].id) === String(personId)){
            setDeletedName(persons[i].name)
            console.log(persons[i])
            break;
          }
        }
        setDeleted(true);
        // Oottaa kaks sekkaa
        setTimeout(() => {
          setDeleted(false);
        }, 2000);
        await updataData()

      } catch (error) {
        console.error(error)
      }

    }    
  }

  const updataData = async () => {
    try {
      const data = await loadJson();
      setPersons(data);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }
    

  useEffect(() => {
    updataData();
  }, [])
  if (loading) {
    return <p>Loading json data...</p>;
  }

    return (
      <div>
        <div className='del'>
          {
            submit ?
            <p>Added {newName}</p>
            :
              deleted ?
                <p>Deleted {deletedName}</p>
              :
              <></>
          }
        </div>
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
            func={handleDelete}
          />
        </div>
      </div>
    )
  }

export default App