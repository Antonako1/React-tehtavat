import React, { useState } from 'react';
import './App.css';

/**
 * Tuo näkyviin listalta datan
 */
const DataArea = (props) => {
  const handleClick = () => {
    props.handleDelete(props.id)
  }
  return(
    <div key={props.id} className='lolo'>
      <p>{props.thing}</p>
      <button onClick={handleClick}>Poista</button>
    </div>
  )
}

// Main
function App () {
  // Statet
  const [newThing, setNewThing] = useState("");
  const [datam, setDatam] = useState([]);

  // Inputin päivitys
  const handleChange = (e) => {
    setNewThing(e.target.value)
  }

  // Napin klikkaus
  const handleClick = () => {
    let copy = [...datam];
    copy.push(newThing)
    setDatam(copy)
  }

  // Poistonappi
  const handleDelete = (id) => {
    let copy = [...datam];
    copy.splice(id, 1)
    setDatam(copy)
  }
  
  return (
    <div>
      {/* jebs jutut */}
      <input onChange={handleChange}/>
      <button onClick={handleClick}>Lisää</button>

      {/* Data näkyvii */}

      {
        datam.map((thing, id) => (
          <DataArea key={id} thing={thing} id={id} handleDelete={handleDelete} />
        ))
      }
    </div>
  )
}

export default App
